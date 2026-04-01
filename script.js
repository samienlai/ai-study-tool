// AI 学习小助手 - 主逻辑脚本

// ==================== Tab 切换 ====================
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // 切换 tab 激活状态
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    // 切换面板
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// ==================== 在线刷题 ====================
let currentSubject = 'english';

// 科目按钮切换
document.querySelectorAll('.subject-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.subject-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentSubject = btn.dataset.subject;
    loadQuiz();
  });
});

// 从题库中随机取 n 道题
function getRandomQuestions(subject, n) {
  const pool = [...questions[subject]];
  const result = [];
  const count = Math.min(n, pool.length);
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    result.push(pool.splice(idx, 1)[0]);
  }
  return result;
}

// 加载题目
function loadQuiz() {
  const quizArea = document.getElementById('quiz-area');
  const footer = document.getElementById('quiz-footer');
  footer.classList.add('hidden');

  const selected = getRandomQuestions(currentSubject, 5);
  quizArea.innerHTML = '';

  selected.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.dataset.answer = item.answer;

    // 题目标题
    const labels = ['A', 'B', 'C', 'D'];
    let html = `<div class="q-index">第 ${i + 1} 题 / 共 ${selected.length} 题</div>`;
    html += `<div class="q-text">${item.q}</div>`;

    // 选项
    item.options.forEach((opt, j) => {
      html += `<button class="option-btn" data-idx="${j}">${labels[j]}. ${opt}</button>`;
    });

    // 解析区域（初始隐藏）
    html += `<div class="explain-box hidden" id="explain-${i}">💡 ${item.explain}</div>`;

    card.innerHTML = html;
    quizArea.appendChild(card);

    // 绑定选项点击事件
    card.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => handleAnswer(card, btn, item.answer, i));
    });
  });

  // 记录当前题目数和答题状态
  quizArea.dataset.total = selected.length;
  quizArea.dataset.answered = '0';
  quizArea.dataset.correct = '0';
}

// 处理答题
function handleAnswer(card, btn, correctIdx, qIndex) {
  // 如果已经答过，忽略
  if (card.classList.contains('answered')) return;
  card.classList.add('answered');

  const selectedIdx = parseInt(btn.dataset.idx);
  const quizArea = document.getElementById('quiz-area');

  // 禁用所有选项
  card.querySelectorAll('.option-btn').forEach(b => b.classList.add('disabled'));

  if (selectedIdx === correctIdx) {
    btn.classList.add('correct');
    quizArea.dataset.correct = String(parseInt(quizArea.dataset.correct) + 1);
  } else {
    btn.classList.add('wrong');
    // 高亮正确答案
    card.querySelectorAll('.option-btn').forEach(b => {
      if (parseInt(b.dataset.idx) === correctIdx) {
        b.classList.add('show-answer');
      }
    });
  }

  // 显示解析
  document.getElementById(`explain-${qIndex}`).classList.remove('hidden');

  // 更新已答题数
  quizArea.dataset.answered = String(parseInt(quizArea.dataset.answered) + 1);

  // 全部答完显示得分
  if (parseInt(quizArea.dataset.answered) >= parseInt(quizArea.dataset.total)) {
    const score = parseInt(quizArea.dataset.correct);
    const total = parseInt(quizArea.dataset.total);
    const footer = document.getElementById('quiz-footer');
    const display = document.getElementById('score-display');
    let emoji = score >= 4 ? '🎉' : score >= 3 ? '👍' : '💪';
    display.textContent = `${emoji} 本轮得分：${score} / ${total}`;
    footer.classList.remove('hidden');
  }
}

// 刷新按钮
document.getElementById('btn-refresh').addEventListener('click', loadQuiz);

// 初始加载
loadQuiz();

// ==================== 中英互译 ====================
document.getElementById('btn-zh-en').addEventListener('click', () => translate('zh', 'en'));
document.getElementById('btn-en-zh').addEventListener('click', () => translate('en', 'zh'));

async function translate(from, to) {
  const input = document.getElementById('translate-input').value.trim();
  if (!input) {
    alert('请输入要翻译的文字！');
    return;
  }

  const loading = document.getElementById('translate-loading');
  const result = document.getElementById('translate-result');
  const output = document.getElementById('translate-output');

  loading.classList.remove('hidden');
  result.classList.add('hidden');

  try {
    const langpair = `${from}|${to}`;
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(input)}&langpair=${langpair}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.responseData && data.responseData.translatedText) {
      output.textContent = data.responseData.translatedText;
      result.classList.remove('hidden');
    } else {
      output.textContent = '翻译失败，请稍后重试。';
      result.classList.remove('hidden');
    }
  } catch (err) {
    output.textContent = '网络错误，请检查网络连接后重试。';
    result.classList.remove('hidden');
  } finally {
    loading.classList.add('hidden');
  }
}

// 一键复制翻译结果
document.getElementById('btn-copy-translate').addEventListener('click', () => {
  const text = document.getElementById('translate-output').textContent;
  copyToClipboard(text);
});

// ==================== 知识点总结 ====================
document.getElementById('btn-summary').addEventListener('click', () => {
  const input = document.getElementById('summary-input').value.trim();
  if (!input) {
    alert('请输入一段文字！');
    return;
  }

  const result = document.getElementById('summary-result');
  const output = document.getElementById('summary-output');

  // 简单前端文本提取
  const summary = generateSummary(input);
  output.innerHTML = summary;
  result.classList.remove('hidden');
});

// 基础版总结：提取关键句、分词、分点
function generateSummary(text) {
  // 按句号、问号、感叹号分句
  const sentences = text.split(/[。！？!?\n]+/).filter(s => s.trim().length > 0);

  if (sentences.length === 0) {
    return '<p>⚠️ 未检测到有效句子。</p>';
  }

  let html = '';

  // 1. 重点提炼：取前 3 句（或全部）
  const keySentences = sentences.slice(0, Math.min(3, sentences.length));
  html += '<p><strong>📌 重点提炼：</strong></p><ul>';
  keySentences.forEach(s => {
    html += `<li>${s.trim()}</li>`;
  });
  html += '</ul>';

  // 2. 提取关键词：简单取长度 >= 3 的高频词
  const words = text.replace(/[，。！？、,.!?""''《》（）\s]/g, ' ').split(/\s+/).filter(w => w.length >= 2);
  const freq = {};
  words.forEach(w => {
    freq[w] = (freq[w] || 0) + 1;
  });
  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  const topKeywords = sorted.slice(0, Math.min(8, sorted.length)).map(e => e[0]);

  if (topKeywords.length > 0) {
    html += '<p style="margin-top:12px"><strong>🔑 关键词：</strong></p>';
    html += '<p>' + topKeywords.map(k => `<span class="badge" style="margin:3px 4px;display:inline-block">${k}</span>`).join('') + '</p>';
  }

  // 3. 字数统计
  html += `<p style="margin-top:12px;color:#888;font-size:13px">📊 原文共 ${text.length} 字，${sentences.length} 个句子。</p>`;

  return html;
}

// 一键复制总结结果
document.getElementById('btn-copy-summary').addEventListener('click', () => {
  const el = document.getElementById('summary-output');
  const text = el.innerText || el.textContent;
  copyToClipboard(text);
});

// ==================== 通用：复制到剪贴板 ====================
function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showCopyToast();
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showCopyToast();
  } catch (e) {
    alert('复制失败，请手动复制。');
  }
  document.body.removeChild(ta);
}

function showCopyToast() {
  const toast = document.createElement('div');
  toast.textContent = '✅ 已复制到剪贴板';
  toast.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#16a34a;color:#fff;padding:12px 24px;border-radius:8px;font-size:15px;z-index:9999;box-shadow:0 4px 12px rgba(0,0,0,0.15)';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 1500);
}
