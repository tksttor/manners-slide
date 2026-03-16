const questions = [
  {num:'①', q:'「課長は何時に出れますか？」', reason:'「出る」の可能形は「出られる」が正しい。「出れる」はら抜き言葉でビジネスシーンでは不適切な表現。', correct:'「課長は何時に出られますか？」'},
  {num:'②', q:'「植木に水をあげましょう」', reason:'「あげる」は相手への敬意を含む表現のため、植物など生き物でないものには使わない。植物への行為には「やる」が正しい。', correct:'「植木に水をやりましょう」'},
  {num:'③', q:'「書類の方お持ちしました」', reason:'「〜の方」は方向や選択肢を示す言葉であり、物の代わりに使うのは誤り。ぼかし言葉として使うのはビジネスでは不適切。「お〜いたす」はセットで一つの謙譲表現のため、「お持ちいたしました」も正しい丁寧な表現。', correct:'「書類をお持ちしました」（「書類をお持ちいたしました」も正しい表現）'},
  {num:'④', q:'「書類を拝見してくださいましたか」', reason:'「拝見する」は自分の行為をへりくだる謙譲語。相手の行為に使うのは誤りで、相手が見る場合は尊敬語「ご覧になる」を使う。「ご覧になりましたか？」も同様に正しい。', correct:'「書類をご覧くださいましたか」（「書類をご覧になりましたか？」も正しい表現）'},
  {num:'⑤', q:'「うちの子におもちゃを買ってあげました」', reason:'「あげる」は相手への敬意を含むため、自分の子どもなど目下の相手への行為には使わない。「やる」が適切。', correct:'「うちの子におもちゃを買ってやりました」'},
  {num:'⑥', q:'「Ｂさんはおりますか？」', reason:'「おる」は自分をへりくだる謙譲語。相手や第三者の存在を尋ねるときに使うのは誤りで、尊敬語「いらっしゃる」を使う。', correct:'「Bさんはいらっしゃいますか？」'},
  {num:'⑦', q:'「どうぞお話してください」', reason:'「お話しする」の「し」は送り仮名として必要。「お話する」では「話する」という誤った動詞になってしまう。', correct:'「どうぞお話しください」'},
  {num:'⑧', q:'「パーティーには誰がまいりますか？」', reason:'「まいる」は自分の行為をへりくだる謙譲語。相手や第三者の行為に使うのは誤りで、尊敬語「いらっしゃる」を使う。', correct:'「パーティーにはどなたがいらっしゃいますか？」'},
  {num:'⑨', q:'「ここはＣさんの家でいらっしゃいますか？」', reason:'「いらっしゃる」は人の存在や行為に使う尊敬語。建物や場所には使えない。場所には「でございます」または「ですか」が適切。「Cさんのお宅でございますか？」も丁寧な正しい表現。', correct:'「Cさんのお宅ですか？」（「Cさんのお宅でございますか？」も正しい表現）'},
  {num:'⑩', q:'「社内的にはこの方針でと決まりました」', reason:'「〜的」は不必要なぼかし表現でビジネスでは避けるべき。また「でと」も冗長。簡潔に「社内では」とするのが正しい。', correct:'「社内ではこの方針に決まりました」'},
  {num:'⑪', q:'「お名前頂戴できますか？」', reason:'「頂戴する」はものをもらう意味の謙譲語。名前はもらうものではないため不適切。「お聞かせいただく」「お教えいただく」が正しい表現。', correct:'「お名前をお聞かせいただけますか」（「お名前をお教えいただけますか？」も正しい表現）'},
  {num:'⑫', q:'「お電話番号をいただけますか？」', reason:'「いただく」はものをもらう意味の謙譲語。電話番号はもらうものではないため不適切。「お教えいただく」「お聞かせいただく」が正しい表現。', correct:'「お電話番号をお教えいただけますか」（「お電話番号をお聞かせいただけますか？」も正しい表現）'},
  {num:'⑬', q:'「昨夜は寝れましたか？」', reason:'「寝る」の可能形は「寝られる」が正しい。「寝れる」はら抜き言葉でビジネスや丁寧な会話では不適切な表現。「昨夜は寝られましたか？」も同様に正しい。', correct:'「昨夜は眠れましたか？」（「昨夜は寝られましたか？」も正しい表現）'},
  {num:'⑭', q:'「絵を見させてください」', reason:'「見る」に「させる」を付けるのはさ入れ言葉と呼ばれる誤り。「見せてください」が正しく、不要な「さ」を入れてしまっている。へりくだって言う場合は「拝見してもよろしいですか？」も正しい表現。', correct:'「絵を見せてください」（謙譲表現なら「絵を拝見してもよろしいですか？」も正しい）'},
  {num:'⑮', q:'「お手洗いはあちらになります」', reason:'「なります」は変化や状態の変化を表す言葉。場所の案内に使うのは誤りで、「でございます」または「です」が正しい。', correct:'「お手洗いはあちらでございます」（「お手洗いはあちらです」も正しい表現）'},
  {num:'⑯', q:'「先生がおっしゃられました」', reason:'「おっしゃる」自体がすでに尊敬語。さらに「られる」を付けるのは二重敬語になり過剰な表現。「おっしゃいました」だけで十分。', correct:'「先生がおっしゃいました」'},
  {num:'⑰', q:'「社長が申されました」', reason:'「申す」は自分の行為をへりくだる謙譲語。社長など目上の人の行為に使うのは誤りで、尊敬語「おっしゃる」を使う。', correct:'「社長がおっしゃいました」'},
  {num:'⑱', q:'「Ｂさんがお帰りになられました」', reason:'「お帰りになる」自体がすでに尊敬語。さらに「られる」を付けるのは二重敬語になり過剰な表現。「お帰りになりました」で十分。', correct:'「Bさんがお帰りになりました」'},
  {num:'⑲', q:'「ご用件を(自社の)Ｃにお伝えします」', reason:'自社の人間の行為に「お〜する」という謙譲表現を付けるのは誤り。社外の人に対して自社の人間を立てる表現は不要。', correct:'「ご用件をCに伝えます（申し伝えます）」'},
  {num:'⑳', q:'「どうもすみませんでした」', reason:'「どうも」はカジュアルな口語表現でビジネスの謝罪には不適切。また「すみません」より「申し訳ございません」のほうが丁寧で誠意が伝わる。「誠に申し訳ございませんでした」も同様に正しい。', correct:'「大変申し訳ございませんでした」（「誠に申し訳ございませんでした」も正しい表現）'},
];

// ── 共通API呼び出し ──────────────────────────────────────
function callAI(systemPrompt, userPrompt) {
  return fetch('/ask', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: userPrompt, systemPrompt }),
  }).then(r => r.json());
}

// ── submitQuiz ────────────────────────────────────────────
function submitQuiz(idx) {
  const card  = document.getElementById('qcard' + idx);
  const input = document.getElementById('qinput' + idx);
  const back  = document.getElementById('qback' + idx);
  if (!card || !back) return;

  const userAnswer = input ? input.value.trim() : '';
  const qData = questions[idx - 1];
  if (!qData) return;

  card.dataset.userAnswer = userAnswer;
  card.classList.add('flipped');
  sec9Flipped = true;

  // 裏面HTML生成
  back.innerHTML = `
    <p style="font-size:clamp(12px,1.3vw,15px);color:#27ae60;font-weight:700;margin:0 0 6px;">ANSWER ${qData.num}</p>
    <p style="font-size:clamp(13px,1.5vw,17px);color:var(--text-light);margin:0 0 4px;text-decoration:line-through;">❌ ${qData.q}</p>
    <p style="font-size:clamp(16px,2vw,24px);font-weight:700;color:var(--deep-blue);background:var(--bg-light);padding:6px 14px;border-radius:10px;border-left:5px solid #27ae60;margin:0 0 10px;width:100%;box-sizing:border-box;">✅ ${qData.correct}</p>
    <div id="qeval${idx}" style="width:100%;box-sizing:border-box;background:var(--accent-yellow-light);border-radius:8px;padding:6px 12px;font-size:clamp(13px,1.5vw,17px);margin-bottom:10px;border-left:4px solid var(--accent-yellow);min-height:32px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
      ${userAnswer
        ? `<span style="font-size:11px;color:var(--text-light);">あなたの回答：</span><span style="font-weight:600;">${userAnswer}</span><span style="font-size:12px;color:var(--text-light);">　採点中…</span>`
        : `<span style="color:var(--text-light);font-weight:600;">未回答</span>`}
    </div>
    <button onclick="showAI(${idx})" style="padding:6px 18px;border-radius:10px;border:2px solid var(--main-cyan);background:#fff;color:var(--main-cyan);font-size:clamp(12px,1.4vw,15px);font-weight:700;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='var(--main-cyan)';this.style.color='#fff'" onmouseout="this.style.background='#fff';this.style.color='var(--main-cyan)'">🤖 AI解説を見る</button>
  `;

  // 回答がある場合のみ採点
  if (!userAnswer) return;

  const systemPrompt = `あなたは日本語の敬語・言葉遣いの採点者です。
【絶対に守るルール】
- 出力は「記号1文字＋半角スペース＋コメント」の形式のみ。
- 記号だけの出力は絶対禁止。必ずコメントをつけること。
- コメントは20文字以内の日本語。
- 前置き・後書き・改行・説明は一切不要。1行のみ出力すること。
良い例：◎ 完璧です！正しく使えています
良い例：○ 敬語は正しいですが表現が少し違います
良い例：△ 方向性は合っていますが重要な誤りがあります
良い例：✕ ら抜き言葉と方言が含まれています
悪い例：✕　←これは絶対NG。コメントがないので禁止。`;

  const scoringPrompt = `【採点してください】
問題文（誤った表現）：${qData.q}
正しい表現：${qData.correct}
記入者の回答：「${userAnswer}」

【即✕ルール】以下のどれか1つでも該当したら即✕
- ら抜き言葉（例：見れる・食べれる・寝れる）
- さ入れ言葉（例：読まさせる・させさせる）
- 問題文とほぼ同じ表現
- 敬語になっていない・口語・タメ口・方言

【◎○△の基準】即✕でない場合のみ判定
- ◎：正しい表現と完全一致または意味・敬語レベルが同等
- ○：敬語は正しいが表現が少し異なる
- △：敬語を使おうとしているが重要な部分が誤っている`;

  callAI(systemPrompt, scoringPrompt)
    .then(data => {
      const evalEl = document.getElementById('qeval' + idx);
      if (!evalEl) return;
      const text = (data.text || '').trim();
      const symbol = text.charAt(0);
      card.dataset.evaluation = symbol;
      const colorMap = { '◎': '#27ae60', '○': '#2980b9', '△': '#e67e22', '✕': '#e74c3c' };
      const color = colorMap[symbol] || 'var(--deep-blue)';
      // コメントがない場合（記号1文字だけ返ってきた場合）のフォールバック
      const fallbackComment = {
        '◎': '完璧です！正しく使えています',
        '○': '敬語は正しいですが表現が少し違います',
        '△': '方向性は合っていますが重要な誤りがあります',
        '✕': '敬語の使い方を見直しましょう',
      };
      const displayText = text.length <= 1
        ? `${symbol} ${fallbackComment[symbol] || ''}` 
        : text;
      evalEl.innerHTML = `
        <div style="margin-bottom:4px;">
          <span style="font-size:11px;color:var(--text-light);">あなたの回答：</span>
          <span style="font-weight:600;">${userAnswer}</span>
        </div>
        <div style="font-size:clamp(14px,1.6vw,18px);font-weight:700;color:${color}">${displayText}</div>
      `;
    })
    .catch(() => {
      const evalEl = document.getElementById('qeval' + idx);
      if (evalEl) evalEl.innerHTML = `<span style="font-size:11px;color:var(--text-light);">あなたの回答：</span><span style="font-weight:600;">${userAnswer}</span>`;
    });
}

// ── showAI ────────────────────────────────────────────────
function showAI(idx) {
  const qData = questions[idx - 1];
  if (!qData) return;

  const card       = document.getElementById('qcard' + idx);
  const userAnswer = card ? (card.dataset.userAnswer || '') : '';
  const evaluation = card ? (card.dataset.evaluation || '') : '';

  // モーダル生成
  const overlay = document.createElement('div');
  overlay.id = 'aiModal';
  overlay.style.cssText = `position:fixed;inset:0;z-index:999;background:rgba(0,0,0,0.45);display:flex;align-items:flex-end;justify-content:center;`;

  const evalLabel = { '◎': '◎ 正解！', '○': '○ 惜しい！', '△': '△ もう少し', '✕': '✕ 不正解' }[evaluation] || '';
  const evalColor = { '◎': '#27ae60', '○': '#2980b9', '△': '#e67e22', '✕': '#e74c3c' }[evaluation] || 'transparent';

  overlay.innerHTML = `
    <div id="aiSheet" style="width:100%;background:#fff;border-radius:20px 20px 0 0;padding:16px 20px 36px;transform:translateY(100%);transition:transform 0.3s cubic-bezier(0.22,0.61,0.36,1);max-height:65vh;overflow-y:auto;box-sizing:border-box;">
      <!-- ヘッダー -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
        <span style="font-size:13px;color:var(--main-cyan);font-weight:700;">🤖 AI解説　${qData.num}</span>
        <button onclick="document.getElementById('aiModal').remove()" style="width:32px;height:32px;border-radius:50%;border:none;background:#f0f0f0;color:#666;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;">×</button>
      </div>

      <!-- 誤った表現 → 正しい表現 -->
      <div style="background:var(--bg-light);border-radius:10px;padding:8px 12px;margin-bottom:10px;font-size:clamp(13px,1.5vw,16px);">
        <div style="color:var(--text-light);text-decoration:line-through;margin-bottom:2px;">❌ ${qData.q}</div>
        <div style="color:var(--deep-blue);font-weight:700;">✅ ${qData.correct}</div>
      </div>

      ${userAnswer ? `
      <!-- 記入者の回答 -->
      <div style="display:flex;align-items:center;gap:8px;padding:6px 12px;border-radius:8px;background:#f8f8f8;margin-bottom:10px;font-size:clamp(12px,1.4vw,15px);">
        <span style="color:var(--text-light);">あなたの回答：</span>
        <span style="font-weight:600;">${userAnswer}</span>
        ${evalLabel ? `<span style="margin-left:auto;font-weight:700;color:${evalColor};font-size:clamp(13px,1.5vw,16px);">${evalLabel}</span>` : ''}
      </div>` : ''}

      <!-- AI解説本文 -->
      <div id="aiModalContent" style="font-size:clamp(13px,1.5vw,16px);color:var(--text-dark);line-height:1.75;">
        <div style="color:var(--text-light);font-size:13px;padding:8px 0;">読み込み中…</div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  requestAnimationFrame(() => {
    document.getElementById('aiSheet').style.transform = 'translateY(0)';
  });
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

  // AI解説プロンプト
  const evalTone = {
    '◎': '正解なので、正しい理由をより深く理解できるよう前向きに',
    '○': '惜しかったので、励ましながら',
    '△': '方向性は合っていたので、ポジティブに',
    '✕': '次につながるよう前向きに',
  }[evaluation] || '親しみやすい口調で';

  const systemPrompt = `あなたは日本語の敬語・言葉遣いの専門家です。${evalTone}解説してください。
【絶対に守るルール】
- 出力はひらがな・カタカナ・漢字・句読点・絵文字のみ使うこと。
- 中国語（因为・的・是・不など）・英語・韓国語など、日本語以外の単語や文字は絶対に使わないこと。
- 「〜である」「〜だ」調は使わず、「〜です」「〜ます」の丁寧語で書くこと。
- 「あなたの回答は不正解です」のような決めつけ表現は使わず、具体的な内容を述べること。
- 指定された形式のみ出力し、前置き・後書きは一切不要。`;

  const explanationPrompt = userAnswer
    ? `【解説してください】
誤った表現：${qData.q}
正しい表現：${qData.correct}
誤りのポイント：${qData.reason}
あなたの回答：「${userAnswer}」（採点結果：${evaluation || '未採点'}）

【出力形式】以下の3行のみ出力。接続詞（「〜なので」「〜ですが」「〜因为」など）で文をつなげず、それぞれ独立した1文にすること。
📌 何が問題？　〔誤りの種類と理由を日本語1文で〕
💬 あなたの回答　〔「あなたの回答」という言葉を使わず、その回答内容の良し悪しを日本語1文で〕
💡 覚え方　〔正しく使うコツを日本語1文で〕`
    : `【解説してください】
誤った表現：${qData.q}
正しい表現：${qData.correct}
誤りのポイント：${qData.reason}

【出力形式】以下の2行のみ出力。余分な文章・前置き・後書きは不要。
📌 何が問題？　〔誤りの種類と理由を1文で〕
💡 覚え方　〔正しく使うコツを1文で〕`;

  // キャッシュがあればAPIを叩かず再利用
  const cachedKey = 'aiCache' + idx;
  if (card && card.dataset[cachedKey]) {
    const content = document.getElementById('aiModalContent');
    if (content) content.innerHTML = card.dataset[cachedKey];
    return;
  }

  callAI(systemPrompt, explanationPrompt)
    .then(data => {
      const content = document.getElementById('aiModalContent');
      if (!content) return;
      const lines = (data.text || '').trim().split('\n').filter(l => l.trim());
      const html = lines.map(line => `
        <div style="padding:6px 0;border-bottom:1px solid #f0f0f0;font-size:clamp(13px,1.5vw,16px);line-height:1.7;">${line}</div>
      `).join('');
      content.innerHTML = html;
      // 結果をキャッシュ
      if (card) card.dataset[cachedKey] = html;
    })
    .catch(() => {
      const content = document.getElementById('aiModalContent');
      if (content) content.innerHTML = `
        <div style="padding:6px 0;border-bottom:1px solid #f0f0f0;">📌 何が問題？　${qData.reason}</div>
        ${userAnswer ? `<div style="padding:6px 0;border-bottom:1px solid #f0f0f0;">💬 あなたの回答　回答を確認してください</div>` : ''}
        <div style="padding:6px 0;">💡 覚え方　${qData.correct}を覚えておきましょう</div>
      `;
    });
}

// ── jumpToQuiz ────────────────────────────────────────────
function jumpToQuiz(slideIdx) {
  const sec9Idx = sections.findIndex(s => s.hasQuiz);
  if (sec9Idx < 0) return;
  sec9Flipped = false;
  currentSection = sec9Idx;
  currentSlide = slideIdx;
  updatePositions(false);
  setTimeout(() => updatePositions(true), 20);
}

function navigate(dir) {
  if (isAnimating) return;
  if (sections[currentSection].hasQuiz && currentSlide >= 2) {
    const cardEl = document.getElementById('qcard' + (currentSlide - 1));
    if (dir === 1 && !sec9Flipped) {
      isAnimating = true;
      setTimeout(() => isAnimating = false, 800);
      if (cardEl) cardEl.classList.add('flipped');
      sec9Flipped = true;
      return;
    }
    if (dir === -1 && sec9Flipped) {
      isAnimating = true;
      setTimeout(() => isAnimating = false, 800);
      if (cardEl) cardEl.classList.remove('flipped');
      sec9Flipped = false;
      return;
    }
  }
  if (sections[currentSection].hasFlip5) {
    const flipSlides = { 1: 'flip17a', 2: 'flip17b', 3: 'flip17c' };
    const flipIdx = { 1: 0, 2: 1, 3: 2 };
    if (flipSlides[currentSlide]) {
      const idx = flipIdx[currentSlide];
      if (dir === 1 && !sec5Flipped[idx]) {
        isAnimating = true;
        setTimeout(() => isAnimating = false, 1200);
        const el = document.getElementById(flipSlides[currentSlide]);
        if (el) el.classList.add('flipped');
        sec5Flipped[idx] = true;
        return;
      }
      if (dir === 1 && sec5Flipped[idx] && currentSlide < 3) {
        isAnimating = true;
        const nextIds = { 1: 'flip17b', 2: 'flip17c' };
        const curEl = document.getElementById(flipSlides[currentSlide]);
        const nextEl = document.getElementById(nextIds[currentSlide]);
        if (curEl) curEl.classList.add('sliding-out');
        if (nextEl) {
          nextEl.style.visibility = 'visible';
          nextEl.style.opacity = '0';
          setTimeout(() => nextEl.classList.add('sliding-in'), 20);
        }
        setTimeout(() => {
          if (curEl) { curEl.classList.remove('sliding-out'); curEl.classList.remove('flipped'); curEl.style.visibility = 'hidden'; }
          if (nextEl) { nextEl.classList.remove('sliding-in'); nextEl.style.opacity = '1'; nextEl.style.visibility = 'visible'; }
          sec5Flipped[idx] = false;
          currentSlide++;
          updatePositions(false);
          isAnimating = false;
        }, 350);
        return;
      }
      if (dir === -1 && sec5Flipped[idx]) {
        isAnimating = true;
        setTimeout(() => isAnimating = false, 1200);
        const el = document.getElementById(flipSlides[currentSlide]);
        if (el) el.classList.remove('flipped');
        sec5Flipped[idx] = false;
        return;
      }
    }
  }
  if (dir === 1 && sections[currentSection].hasFlip && currentSlide === 1 && !sec2Flipped) {
    isAnimating = true;
    setTimeout(() => isAnimating = false, 1200);
    const card1 = document.getElementById('sec2Card1');
    const card2 = document.getElementById('sec2Card2');
    if (card1 && card2) { card1.classList.add('flipped'); setTimeout(() => card2.classList.add('flipped'), 400); sec2Flipped = true; }
    return;
  }
  if (dir === -1 && sections[currentSection].hasFlip && currentSlide === 1 && sec2Flipped) {
    isAnimating = true;
    setTimeout(() => isAnimating = false, 1200);
    const card1 = document.getElementById('sec2Card1');
    const card2 = document.getElementById('sec2Card2');
    if (card1 && card2) { card2.classList.remove('flipped'); setTimeout(() => card1.classList.remove('flipped'), 400); sec2Flipped = false; }
    return;
  }
  if (sections[currentSection].hasFlip3) {
    if (currentSlide === 1) {
      if (dir === 1 && !sec3Flipped1) {
        isAnimating = true; setTimeout(() => isAnimating = false, 1200);
        const c1 = document.getElementById('sec3Flip1a'); const c2 = document.getElementById('sec3Flip1b');
        if (c1) c1.classList.add('flipped'); if (c2) setTimeout(() => c2 && c2.classList.add('flipped'), 400);
        sec3Flipped1 = true; return;
      }
      if (dir === -1 && sec3Flipped1) {
        isAnimating = true; setTimeout(() => isAnimating = false, 1200);
        const c1 = document.getElementById('sec3Flip1a'); const c2 = document.getElementById('sec3Flip1b');
        if (c2) c2.classList.remove('flipped'); if (c1) setTimeout(() => c1 && c1.classList.remove('flipped'), 400);
        sec3Flipped1 = false; return;
      }
    }
    if (currentSlide === 2) {
      if (dir === 1 && !sec3Flipped2) { isAnimating = true; setTimeout(() => isAnimating = false, 2000); sec3Flipped2 = true; setTimeout(runTypewriter, 3000); return; }
      if (dir === -1 && sec3Flipped2) { isAnimating = true; setTimeout(() => isAnimating = false, 1000); sec3Flipped2 = false; resetTypewriter(); return; }
    }
  }
  isAnimating = true;
  setTimeout(() => isAnimating = false, 1500);
  if (dir === 1) {
    const section = sections[currentSection];
    if (currentSlide < section.slides.length - 1) {
      currentSlide++;
    } else if (currentSection < sections.length - 1) {
      currentSection++;
      currentSlide = 0;
    }
  } else {
    if (currentSlide > 0) {
      currentSlide--;
    } else if (currentSection > 0) {
      currentSection--;
      currentSlide = sections[currentSection].slides.length - 1;
    }
  }
  updatePositions(true);
}

function goToSlide(sIdx, hIdx) {
  if (isAnimating) return;
  isAnimating = true;
  setTimeout(() => isAnimating = false, 1500);
  currentSection = sIdx;
  currentSlide = hIdx;
  updatePositions(true);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
    e.preventDefault();
    navigate(1);
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    navigate(-1);
  }
});

let touchStartX = 0, touchStartY = 0;
document.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
});
document.addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) > 50 || Math.abs(dy) > 50) {
    if (Math.abs(dx) > Math.abs(dy)) {
      navigate(dx < 0 ? 1 : -1);
    } else {
      navigate(dy < 0 ? 1 : -1);
    }
  }
});

document.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (Math.abs(e.deltaY) > 30) {
    navigate(e.deltaY > 0 ? 1 : -1);
  }
}, { passive: false });

let sec3Flipped1 = false;
let sec3Flipped2 = false;
let sec5Flipped = [false, false, false];
let sec9Flipped = false;

const SEC3_FROM = '知識人';
const SEC3_TO   = '儀礼そのもの';

function runTypewriter() {
  const el    = document.getElementById('sec3TypewriterText');
  const label = document.getElementById('sec3TwLabel');
  const box   = document.getElementById('sec3TwBox');
  const ba    = document.getElementById('sec3BeforeAfter');
  if (!el) return;
  if (label) { label.textContent = '変化後の意味'; label.style.color = 'var(--accent-pink)'; }
  if (box)   box.style.borderColor = 'var(--accent-pink)';
  let text = SEC3_FROM;
  function deleteChar() {
    if (text.length === 0) { setTimeout(typeChar, 200); return; }
    text = text.slice(0, -1);
    el.textContent = text;
    setTimeout(deleteChar, 240);
  }
  let idx = 0;
  function typeChar() {
    if (idx >= SEC3_TO.length) {
      const arrow = document.getElementById('sec3Arrow');
      if (ba) ba.style.opacity='1';
      if (arrow) arrow.style.opacity='1';
      sec3Flipped2 = true;
      return;
    }
    text += SEC3_TO[idx++];
    el.textContent = text;
    setTimeout(typeChar, 280);
  }
  deleteChar();
}

function resetTypewriter() {
  const el    = document.getElementById('sec3TypewriterText');
  const label = document.getElementById('sec3TwLabel');
  const box   = document.getElementById('sec3TwBox');
  const ba    = document.getElementById('sec3BeforeAfter');
  if (el)    el.textContent      = SEC3_FROM;
  if (label) { label.textContent = '当初の意味'; label.style.color = 'var(--main-cyan)'; }
  if (box)   box.style.borderColor = 'var(--main-cyan)';
  if (ba)    ba.style.opacity    = '0';
  const arrow = document.getElementById('sec3Arrow');
  if (arrow) arrow.style.opacity='0';
  sec3Flipped2 = false;
}

function runKamakura() {
  const ids = ['k1','k2','k3','k4','k5'];
  ids.forEach(id => { const el = document.getElementById(id); if(el) el.style.opacity = '0'; });
  ids.forEach((id, i) => {
    setTimeout(() => { const el = document.getElementById(id); if(el) el.style.opacity = '1'; }, 800 + i * 700);
  });
}

function runMeiji() {
  const main = document.getElementById('meijiMain');
  const sub  = document.getElementById('meijiSub');
  if (main) { main.style.opacity='0'; main.style.transform='scale(0.7)'; }
  if (sub)  { sub.style.opacity='0';  sub.style.transform='scale(0.85)'; }
  setTimeout(() => { if (main) { main.style.opacity='1'; main.style.transform='scale(1)'; } }, 400);
  setTimeout(() => { if (sub)  { sub.style.opacity='1';  sub.style.transform='scale(1)'; } }, 1400);
}

function openMenu() {
  const overlay = document.getElementById('sectionMenuOverlay');
  overlay.classList.add('open');
  document.querySelectorAll('.section-menu-item').forEach((el, i) => {
    el.classList.toggle('current', i === currentSection);
  });
}
function closeMenu(e) {
  if (e.target === document.getElementById('sectionMenuOverlay')) {
    document.getElementById('sectionMenuOverlay').classList.remove('open');
  }
}
function jumpToSection(sIdx) {
  document.getElementById('sectionMenuOverlay').classList.remove('open');
  goToSlide(sIdx, 0);
}

buildSlides();
