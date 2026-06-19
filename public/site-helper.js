const config = {
  siteUrl: 'https://app-m-leyusports.com.cn',
  appName: '乐鱼体育',
  badgeColor: '#ff4757',
  badgeText: '热门'
};

function createCard(container, title, content, type = 'info') {
  const card = document.createElement('div');
  card.className = `helper-card helper-${type}`;

  const titleEl = document.createElement('h3');
  titleEl.textContent = title;

  const contentEl = document.createElement('p');
  contentEl.textContent = content;

  card.appendChild(titleEl);
  card.appendChild(contentEl);
  container.appendChild(card);
}

function createBadge(container, label, variant = 'default') {
  const badge = document.createElement('span');
  badge.className = `keyword-badge badge-${variant}`;
  badge.textContent = label;
  container.appendChild(badge);
}

function showAccessNotice(container) {
  const notice = document.createElement('div');
  notice.className = 'access-notice';

  const link = document.createElement('a');
  link.href = config.siteUrl;
  link.textContent = `访问 ${config.appName} 官网`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  notice.textContent = '提示：点击下方链接进入 ';
  notice.appendChild(link);
  container.appendChild(notice);
}

function initSiteHelper() {
  const wrapper = document.getElementById('site-helper') || document.body;
  const cardContainer = document.createElement('div');
  cardContainer.className = 'helper-card-container';

  createCard(cardContainer, '欢迎使用', `${config.appName} 提供丰富的体育赛事资讯与互动服务。`, 'info');
  createCard(cardContainer, '快速访问', `直接访问 ${config.siteUrl} 获取最新内容。`, 'tip');

  const badgeContainer = document.createElement('div');
  badgeContainer.className = 'badge-container';

  createBadge(badgeContainer, config.appName, 'primary');
  createBadge(badgeContainer, '体育资讯', 'secondary');
  createBadge(badgeContainer, '实时比分', 'accent');
  createBadge(badgeContainer, config.badgeText, 'hot');

  showAccessNotice(cardContainer);

  const style = document.createElement('style');
  style.textContent = `
    .helper-card-container { max-width: 600px; margin: 20px auto; font-family: sans-serif; }
    .helper-card { background: #f0f2f5; border-radius: 10px; padding: 16px 20px; margin-bottom: 14px; box-shadow: 0 2px 6px rgba(0,0,0,0.08); }
    .helper-card h3 { margin: 0 0 8px; font-size: 18px; color: #1e293b; }
    .helper-card p { margin: 0; font-size: 14px; color: #475569; }
    .helper-tip { border-left: 4px solid #3b82f6; }
    .helper-info { border-left: 4px solid #10b981; }
    .badge-container { display: flex; flex-wrap: wrap; gap: 10px; margin: 18px 0; }
    .keyword-badge { display: inline-block; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600; background: #e2e8f0; color: #334155; }
    .badge-primary { background: #3b82f6; color: #fff; }
    .badge-secondary { background: #64748b; color: #fff; }
    .badge-accent { background: #f59e0b; color: #fff; }
    .badge-hot { background: ${config.badgeColor}; color: #fff; }
    .access-notice { background: #fef9c3; border-radius: 8px; padding: 12px 16px; margin-top: 12px; font-size: 14px; }
    .access-notice a { color: #2563eb; text-decoration: none; font-weight: 500; }
    .access-notice a:hover { text-decoration: underline; }
  `;

  wrapper.appendChild(style);
  wrapper.appendChild(cardContainer);
  wrapper.appendChild(badgeContainer);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSiteHelper);
} else {
  initSiteHelper();
}