export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (context.request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const apiKey = context.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return Response.json(
      { text: 'エラー: OPENROUTER_API_KEYが未設定です' },
      { status: 500, headers: corsHeaders }
    );
  }

  let prompt, systemPrompt;
  try {
    const body = await context.request.json();
    prompt = body.prompt;
    systemPrompt = body.systemPrompt || 'あなたは日本語の敬語・言葉遣いの専門家です。指示された形式を厳守して回答してください。日本語のみで答えてください。';
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

  try {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': 'https://manners-slide.pages.dev',
        'X-Title': 'Manners Slide',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.0-flash-exp:free',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt },
        ],
        max_tokens: 300,
        temperature: 0.2,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('OpenRouter API error:', res.status, errText);
      return Response.json(
        { text: `エラー: AI APIの呼び出しに失敗しました (${res.status})` },
        { status: 502, headers: corsHeaders }
      );
    }

    const data = await res.json();
    const text = data.choices?.[0]?.message?.content || '解説を取得できませんでした。';
    return Response.json({ text }, { headers: corsHeaders });

  } catch (err) {
    console.error('Fetch error:', err);
    return Response.json(
      { text: 'エラー: ネットワークエラーが発生しました' },
      { status: 503, headers: corsHeaders }
    );
  }
}
