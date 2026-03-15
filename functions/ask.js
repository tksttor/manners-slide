export async function onRequestPost(context) {
  try {
    const { prompt } = await context.request.json();
    const ai = context.env.AI;
    if (!ai) {
      return Response.json({ text: 'エラー: AI bindingが未設定です' });
    }
    const response = await ai.run('@cf/meta/llama-3.1-8b-instruct', {
      messages: [
        { role: 'system', content: 'あなたは日本語の敬語・言葉遣いの専門家です。200文字以内で簡潔に解説してください。' },
        { role: 'user', content: prompt }
      ]
    });
    const text = response.response || '解説を取得できませんでした。';
    return Response.json({ text });
  } catch (err) {
    return Response.json({ text: 'エラー: ' + err.message });
  }
}
