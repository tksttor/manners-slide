export async function onRequestPost(context) {
  try {
    const { prompt } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json({ text: 'エラー: APIキーが未設定です' });
    }
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { maxOutputTokens: 300 }
        })
      }
    );
    const data = await res.json();
    if (!res.ok) {
      return Response.json({ text: 'APIエラー: ' + (data.error?.message || JSON.stringify(data)) });
    }
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '解説を取得できませんでした。';
    return Response.json({ text });
  } catch (err) {
    return Response.json({ text: 'エラー: ' + err.message });
  }
}
