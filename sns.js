// 더미 피드 데이터 배열
const snsFeeds = [
  {
    avatar: 'src/assets/logo.png',
    nick: '분노수확가🔴',
    id: '@ner_guardian21',
    date: '1일',
    text: '내 분노로 나라를 지킬 수 있다고? 혁신 그 자체 아님?<br> #분노_에너지_기부',
    image: 'src/assets/sns1.png', // 예시 이미지 추가
    comment: 12,
    retweet: 34,
    like: 256,
    view: 89,
    category: 'praise' // 찬양
  },
  {
    avatar: 'src/assets/logo.png',
    nick: '유튜브_분노해방',
    id: '@AngerReleaseTV',
    date: '12시간',
    text: '📺 새 영상 업로드!<br> NER-CORE 체험 리얼 후기와 분노 에너지 측정 팁 대방출합니다. <br>구독하고 알림 설정 잊지 마세요!<br><br>🔗www.youtube.com/watch?v=dQw4w9WgXcQ',
    comment: 50,
    retweet: 40,
    like: 800,
    view: 923,
    category: 'praise' // 찬양
  },
  {
    avatar: 'src/assets/logo.png',
    nick: 'Watcher👁️',
    id: '@Watcher',
    date: '1시간',
    text: '저 곧 하러가는데 뭐 가져갈게 있나요? <br> #NER_REVIEW',
    comment: 8,
    retweet: 54,
    like: 239,
    view: 1301,
    category: 'neutral' // 중립
  },
  {
    avatar: 'src/assets/logo.png',
    nick: '모르모르👀',
    id: '@observer007',
    date: '1알',
    text: 'NER-CORE 한 번 체험해봤는데, 솔직히 효과는 아직 잘 모르겠네요. 더 써봐야 알 듯. 📸 대기실 모습. <br> #NER_REVIEW #체험후기',
    image: 'src/assets/sns2.png', // 예시 이미지 추가
    comment: 10,
    retweet: 71,
    like: 882,
    view: 6120,
    category: 'neutral' // 중립
  },
  {
    avatar: 'src/assets/logo.png',
    nick: 'anti_NER',
    id: '@anti_tyRant',
    date: '5시간',
    text: 'NER-CORE는 개인 통제의 끝판왕. 진정한 해방을 원한다면 모두 철폐 운동에 동참하세요❌ <br> #NOTNERCORE #NER반대운동',
    image: 'src/assets/sns4.png', // 예시 이미지 추가
    comment: 22,
    retweet: 73,
    like: 72,
    view: 1120,
    category: 'oppose' // 반대
  },
  {
    avatar: 'src/assets/logo.png',
    nick: 'data_analyst',
    id: '@drift42',
    date: '4시간',
    text: 'R-CAL 평균값이 102라는데... 난 82 나옴 너무 낮은가?',
    comment: 3,
    retweet: 2,
    like: 45,
    view: 540,
    category: 'praise' // 찬양
  },
  {
    avatar: 'src/assets/logo.png',
    nick: 'privacy_punk🔒',
    id: '@privacyPunk',
    date: '8시간',
    text: '개인 감정 데이터를 국가에 제공하는 건, 정말 심각한 사생활 침해인건데...다들 이상하다고 생각 안하나?',
    comment: 19,
    retweet: 14,
    like: 60,
    view: 970,
    category: 'oppose' // 반대
  },
  {
    avatar: 'src/assets/logo.png',
    nick: 'FlameBearer🔥',
    id: '@flamebearer',
    date: '1시간',
    text: '분노를 에너지로 바꿔 나라를 지킬 수 있다? 이게 진짜 힘입니다!',
    comment: 5,
    retweet: 30,
    like: 870,
    view: 1826,
    category:'praise' // 찬양
  },
  {
    avatar: 'src/assets/logo.png',
    nick: '가드7',
    id: '@Guard',
    date: '3시간',
    text: '개인의 감정은 인권의 일부입니다. 국가가 채굴해서는 안 됩니다.',
    comment: 48,
    retweet: 143,
    like: 293,
    view: 976,
    category:'oppose' // 반대
  },
  {
    avatar: 'src/assets/logo.png',
    nick: '반대엔이알',
    id: '@badner',
    date: '2일',
    text: '‼️분노를 강제 수집? 이런 기술이야말로 통제의 가장 잔혹한 형태‼️',
    comment: 19,
    retweet: 243,
    like: 93,
    view: 976,
    category:'oppose' // 반대
  },
  
  // ...더미 데이터 추가 가능
];

// 랜덤 프로필 이미지 URL 목록 (무료 아바타 서비스 활용)
const avatarList = [
  'https://api.dicebear.com/7.x/pixel-art/svg?seed=ner1',
  'https://api.dicebear.com/7.x/pixel-art/svg?seed=ner2',
  'https://api.dicebear.com/7.x/pixel-art/svg?seed=ner3',
  'https://api.dicebear.com/7.x/pixel-art/svg?seed=ner4',
  'https://api.dicebear.com/7.x/pixel-art/svg?seed=ner5',
  'https://api.dicebear.com/7.x/pixel-art/svg?seed=ner6',
  'https://api.dicebear.com/7.x/pixel-art/svg?seed=ner7',
  'https://api.dicebear.com/7.x/pixel-art/svg?seed=ner8',
  'https://api.dicebear.com/7.x/pixel-art/svg?seed=ner9',
  'https://api.dicebear.com/7.x/pixel-art/svg?seed=ner10'
];

// 피드 데이터 avatar가 없거나 logo.png면 랜덤 아바타로 대체
function applyRandomAvatars() {
  snsFeeds.forEach(feed => {
    if (!feed.avatar || feed.avatar.includes('logo.png')) {
      const idx = Math.floor(Math.random() * avatarList.length);
      feed.avatar = avatarList[idx];
    }
  });
}

// 카테고리별 필터링 및 렌더링
function renderSnsFeeds(category = 'praise') {
  const feedList = document.querySelector('.sns-feed-list');
  const filtered = snsFeeds.filter(feed => feed.category === category);
  // 해시태그( #... )를 파란색 span으로 감싸기
  function highlightTags(text) {
    return text.replace(/(#[\w가-힣_]+)/g, '<span class="sns-feed-tag">$1</span>');
  }
  feedList.innerHTML = filtered.length ? filtered.map((feed, idx) => `
    <div class="sns-feed-item" data-feed-idx="${snsFeeds.indexOf(feed)}">
      <img class="sns-avatar" src="${feed.avatar}" alt="avatar" />
      <div class="sns-feed-content">
        <div class="sns-feed-author-row">
          <span class="sns-feed-nick">${feed.nick}</span>
          <span class="sns-feed-id">${feed.id}</span>
          <span class="sns-feed-dot">·</span>
          <span class="sns-feed-date">${feed.date}</span>
        </div>
        <div class="sns-feed-text">${highlightTags(feed.text)}</div>
        ${feed.image ? `<div class='sns-feed-img-wrap'><img class='sns-feed-img' src='${feed.image}' alt='피드 이미지' /></div>` : ''}
        <div class="sns-feed-actions">
          <span class="sns-action"><span class="sns-action-icon">💬</span> <span class="sns-action-num">${feed.comment}</span></span>
          <span class="sns-action"><span class="sns-action-icon">🔁</span> <span class="sns-action-num">${feed.retweet}</span></span>
          <span class="sns-action sns-like-action"><span class="sns-action-icon">❤</span> <span class="sns-action-num">${feed.like}</span></span>
          <span class="sns-action"><span class="sns-action-icon">👁️</span> <span class="sns-action-num">${feed.view}</span></span>
        </div>
      </div>
    </div>
  `).join('') : '<div class="sns-feed-empty">해당 분류의 피드가 없습니다.</div>';

  // 하트(❤) 클릭 이벤트 연결
  document.querySelectorAll('.sns-like-action').forEach((el, i) => {
    el.onclick = function() {
      // 실제 데이터 인덱스 찾기 (data-feed-idx)
      const feedItem = el.closest('.sns-feed-item');
      const realIdx = feedItem ? parseInt(feedItem.getAttribute('data-feed-idx')) : null;
      if (realIdx !== null && !isNaN(realIdx)) {
        snsFeeds[realIdx].like++;
        renderSnsFeeds(category); // 다시 렌더링
      }
    };
  });
}

// 메뉴 클릭 이벤트 연결
function setupSnsMenu() {
  const menuLinks = document.querySelectorAll('.sns-menu ul li a');
  const categoryMap = ['praise', 'neutral', 'oppose'];
  menuLinks.forEach((link, idx) => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      menuLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      renderSnsFeeds(categoryMap[idx]);
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  applyRandomAvatars();
  renderSnsFeeds('praise');
  setupSnsMenu();
});
