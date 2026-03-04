// ===== 赴美生子工具箱 — 共用邏輯 =====

// 頁面載入動畫
document.addEventListener('DOMContentLoaded', () => {
  // 卡片漸入動畫
  const cards = document.querySelectorAll('.tool-card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'all 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 100 + i * 80);
  });

  // Accordion 切換
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('open');
    });
  });

  // Timeline 展開
  document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });

  // Checklist 勾選 + localStorage
  document.querySelectorAll('.checklist-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('checked');
      saveChecklistState();
      updateProgress();
    });
  });

  // 載入 checklist 狀態
  loadChecklistState();
  updateProgress();
});

// 儲存勾選狀態到 localStorage
function saveChecklistState() {
  const pageId = document.body.dataset.page || 'default';
  const states = {};
  document.querySelectorAll('.checklist-item').forEach((item, i) => {
    states[i] = item.classList.contains('checked');
  });
  localStorage.setItem(`checklist-${pageId}`, JSON.stringify(states));
}

// 載入勾選狀態
function loadChecklistState() {
  const pageId = document.body.dataset.page || 'default';
  const saved = localStorage.getItem(`checklist-${pageId}`);
  if (saved) {
    const states = JSON.parse(saved);
    document.querySelectorAll('.checklist-item').forEach((item, i) => {
      if (states[i]) item.classList.add('checked');
    });
  }
}

// 更新進度條
function updateProgress() {
  const total = document.querySelectorAll('.checklist-item').length;
  const checked = document.querySelectorAll('.checklist-item.checked').length;
  if (total === 0) return;

  const pct = Math.round((checked / total) * 100);

  const fill = document.querySelector('.progress-bar .fill');
  const text = document.querySelector('.progress-text');

  if (fill) fill.style.width = pct + '%';
  if (text) text.textContent = `${checked} / ${total} 完成 (${pct}%)`;
}

// 數字格式化（加逗號）
function formatNumber(num) {
  return num.toLocaleString('en-US');
}

// 幣別轉換
function convertCurrency(usd, currency) {
  const rate = 31.5; // TWD/USD 匯率
  return currency === 'TWD' ? Math.round(usd * rate) : usd;
}

// 幣別符號
function currencySymbol(currency) {
  return currency === 'TWD' ? 'NT$' : '$';
}

// 日期格式化
function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}/${m}/${d}`;
}

// 加減天數
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// 取得季節
function getSeason(month) {
  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'summer';
  if (month >= 9 && month <= 11) return 'fall';
  return 'winter';
}

// 季節中文
function seasonName(season) {
  const names = { spring: '春季', summer: '夏季', fall: '秋季', winter: '冬季' };
  return names[season] || '';
}

// Filter tabs 切換
function initFilterTabs(containerId, callback) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      container.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      if (callback) callback(tab.dataset.filter);
    });
  });
}
