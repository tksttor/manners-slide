exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  try {
    const { prompt } = JSON.parse(event.body);
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return { statusCode: 200, body: JSON.stringify({ text: 'エラー: APIキーが未設定です' }) };
    }
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
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
      return { statusCode: 200, body: JSON.stringify({ text: 'APIエラー: ' + (data.error?.message || JSON.stringify(data)) }) };
    }
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '解説を取得できませんでした。';
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    };
  } catch (err) {
    return { statusCode: 200, body: JSON.stringify({ text: 'catchエラー: ' + err.message }) };
  }
};
