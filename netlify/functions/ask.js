exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  try {
    const { prompt } = JSON.parse(event.body);
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return { statusCode: 500, body: JSON.stringify({ text: 'エラー: APIキーが設定されていません' }) };
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
      return { statusCode: 500, body: JSON.stringify({ text: 'Geminiエラー: ' + JSON.stringify(data.error) }) };
    }
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '解説を取得できませんでした。';
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ text: 'エラー: ' + err.message })
    };
  }
};
