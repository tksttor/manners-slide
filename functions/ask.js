export async function onRequestPost(context) {
  // CORSヘッダー
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // プリフライトリクエスト対応
  if (context.request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // APIキーの存在確認
  const apiKey = context.env.GROQ_API_KEY;
  if (!apiKey) {
    return Response.json(
      { text: 'エラー: GROQ_API_KEYが未設定です' },
      { status: 500, headers: corsHeaders }
    );
  }

  // リクエストボディの取得
  let prompt;
  try {
    const body = await context.request.json();
    prompt = body.prompt;
  } catch {
    return Response.json(
      { text: 'エラー: リクエストの形式が正しくありません' },
      { status: 400, headers: corsHeaders }
    );
  }

  if (!prompt) {
    return Response.json(
      { text: 'エラー: promptが空です' },
      { status: 400, headers: corsHeaders }
    );
  }

  // Groq API呼び出し
  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          {
            role: 'system',
            content: 'あなたは日本語の敬語・言葉遣いの専門家です。200文字以内で簡潔に解説してください。',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_tokens: 300,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('Groq API error:', res.status, errText);
      return Response.json(
        { text: `エラー: AI APIの呼び出しに失敗しました (${res.status})` },
        { status: 502, headers: corsHeaders }
      );
    }

    const data = await res.json();
    const text =
      data.choices?.[0]?.message?.content || '解説を取得できませんでした。';

    return Response.json({ text }, { headers: corsHeaders });
  } catch (err) {
    console.error('Fetch error:', err);
    return Response.json(
      { text: 'エラー: ネットワークエラーが発生しました' },
      { status: 503, headers: corsHeaders }
    );
  }
}
