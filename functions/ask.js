export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (context.request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const apiKey = context.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json(
      { text: 'エラー: GEMINI_API_KEYが未設定です' },
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
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: systemPrompt }],
        },
        contents: [
          { role: 'user', parts: [{ text: prompt }] },
        ],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 300,
        },
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('Gemini API error:', res.status, errText);
      return Response.json(
        { text: `エラー: AI APIの呼び出しに失敗しました (${res.status})` },
        { status: 502, headers: corsHeaders }
      );
    }

    const data = await res.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '解説を取得できませんでした。';
    return Response.json({ text }, { headers: corsHeaders });

  } catch (err) {
    console.error('Fetch error:', err);
    return Response.json(
      { text: 'エラー: ネットワークエラーが発生しました' },
      { status: 503, headers: corsHeaders }
    );
  }
}
