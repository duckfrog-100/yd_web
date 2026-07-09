const scents = {
  '01': {
    id: '01',
    slug: 'ganggu-morning',
    title: '강구항의 아침',
    place: 'Ganggu Port',
    mood: 'Morning Sea · Salt Air',
    lead: '파도가 하루를 깨우고, 소금기 어린 바람이 가장 먼저 도착하는 곳.',
    narrative: '이 향은 새벽의 선착장, 젖은 밧줄, 막 돌아온 배의 기척, 그리고 영덕 바다의 차가운 첫 공기를 담았습니다.',
    noteTitle: '차갑고 맑은 항구의 공기',
    top: 'Sea Salt · Bergamot · Morning Air',
    middle: 'Marine Accord · Wet Stone · Green Herb',
    base: 'Cedarwood · Soft Musk · Amber',
    soundTitle: '새벽 선착장의 파도와 갈매기',
    soundDesc: '잔잔한 파도, 갈매기, 항구의 아침 공기를 상상하도록 만든 ASMR 콘텐츠입니다.',
    routeTitle: '강구항 아침 산책 코스',
    route: ['강구항 선착장', '해파랑공원', '대게거리', '항구 카페'],
    partners: [
      ['항구 앞 로컬 카페', '아침 바다를 바라보며 머물기 좋은 작은 카페'],
      ['대게거리 식당', '영덕을 대표하는 식사 경험과 연결되는 파트너 매장'],
      ['바다 엽서 숍', '강구항 풍경을 담은 엽서와 소품을 판매하는 로컬 숍']
    ],
    map: 'https://map.naver.com/p/search/강구항',
    colors: ['#1f3556', '#6f8799', '#f4ead7'],
    looks: ['새벽 항구', '젖은 밧줄', '차가운 파도']
  },
  '02': {
    id: '02',
    slug: 'blueroad-walk',
    title: '블루로드 산책',
    place: 'Blue Road',
    mood: 'Pine Trail · Sea Breeze',
    lead: '바다를 곁에 두고 걷는 길, 소나무와 바람이 천천히 숨을 고릅니다.',
    narrative: '걷다 보면 솔잎의 향, 마른 흙의 냄새, 나무 사이로 스며드는 바람이 먼저 다가옵니다. 이 향은 잠시 멈춰 숨을 고르는 시간을 담았습니다.',
    noteTitle: '솔숲과 해안 산책길의 숨',
    top: 'Pine Needle · Green Leaf · Lemon Zest',
    middle: 'Cypress · Hinoki · Wild Herb',
    base: 'Cedarwood · Moss · Dry Earth',
    soundTitle: '솔숲 바람과 풀벌레',
    soundDesc: '푸른 솔숲이 바람에 흔들리는 사각거림과 작은 풀벌레 소리가 어우러집니다.',
    routeTitle: '블루로드 회복 산책 코스',
    route: ['블루로드 입구', '해안 전망 포인트', '솔숲 쉼터', '로컬 찻집'],
    partners: [
      ['해안 전망 찻집', '산책 뒤 조용히 쉬어가기 좋은 차 공간'],
      ['로컬 스테이', '블루로드와 가까운 감성 숙소'],
      ['트레킹 소품 숍', '산책과 여행을 위한 작은 로컬 소품 매장']
    ],
    map: 'https://map.naver.com/p/search/영덕 블루로드',
    colors: ['#264835', '#708b6c', '#eadbbf'],
    looks: ['소나무길', '흙길', '해안 바람']
  },
  '03': {
    id: '03',
    slug: 'peach-afternoon',
    title: '복숭아밭의 오후',
    place: 'Peach Orchard',
    mood: 'Summer Peach · Warm Light',
    lead: '햇살이 가장 부드러워지는 시간, 영덕의 여름은 복숭아빛으로 익어갑니다.',
    narrative: '한낮의 열기가 조금씩 가라앉을 무렵, 복숭아밭에는 달콤한 과즙 향과 흙의 온기가 함께 머뭅니다. 여행지에서 돌아온 뒤에도 오래 남는 여름의 잔상입니다.',
    noteTitle: '따뜻한 여름 과수원의 잔상',
    top: 'Peach · Mandarin · Pear',
    middle: 'Osmanthus · White Floral · Green Leaf',
    base: 'Soft Musk · Sandalwood · Vanilla',
    soundTitle: '여름 매미와 나뭇잎',
    soundDesc: '복숭아밭의 여름 오후를 떠올리게 하는 매미 소리와 나뭇잎 흔들림입니다.',
    routeTitle: '복숭아빛 오후 코스',
    route: ['복숭아 농가', '로컬 디저트 카페', '농산물 판매장', '햇살 포토스팟'],
    partners: [
      ['복숭아 디저트 카페', '영덕 과일을 활용한 디저트를 만나는 공간'],
      ['농산물 직판장', '계절 과일과 로컬 식재료를 구매할 수 있는 매장'],
      ['피크닉 소품 숍', '오후 여행을 위한 작은 소품 큐레이션']
    ],
    map: 'https://map.naver.com/p/search/영덕 복숭아',
    colors: ['#d58b76', '#f0bf9d', '#f4ead7'],
    looks: ['복숭아빛 햇살', '과수원 그늘', '여름 오후']
  },
  '04': {
    id: '04',
    slug: 'osipcheon-breeze',
    title: '오십천의 바람',
    place: 'Osipcheon Stream',
    mood: 'River Air · Green Water',
    lead: '강물은 조용히 흐르고, 저녁의 바람은 오래된 기억처럼 머뭅니다.',
    narrative: '강가의 풀냄새, 물가의 서늘한 공기, 저녁이 가까워질 때의 낮은 빛. 이 향은 영덕을 다시 떠올리는 순간에 더 잘 어울립니다.',
    noteTitle: '강변의 물기와 저녁 공기',
    top: 'Fresh Water · Bergamot · Green Apple',
    middle: 'Reed Grass · Violet Leaf · Watery Floral',
    base: 'White Musk · Cedar · Soft Amber',
    soundTitle: '잔잔한 물소리와 강변 바람',
    soundDesc: '천천히 흐르는 강물과 갈대 사이를 지나가는 저녁 바람을 담았습니다.',
    routeTitle: '오십천 저녁 산책 코스',
    route: ['오십천 산책로', '강변 포토스팟', '전통시장', '강변 카페'],
    partners: [
      ['강변 카페', '물가를 보며 쉬어가기 좋은 로컬 카페'],
      ['전통시장 상점', '영덕의 생활감과 먹거리를 만나는 장소'],
      ['로컬 디저트 숍', '산책 뒤 들르기 좋은 작은 디저트 매장']
    ],
    map: 'https://map.naver.com/p/search/영덕 오십천',
    colors: ['#607f78', '#a9beb0', '#efe2c8'],
    looks: ['강물', '갈대', '저녁 바람']
  },
  '05': {
    id: '05',
    slug: 'goesiri-night',
    title: '괴시리 고택의 밤',
    place: 'Goesiri House',
    mood: 'Hanok Night · Rain Bell',
    lead: '한옥 처마 끝에 밤이 내려앉고, 빗소리와 풍경 소리가 조용히 머무는 시간.',
    narrative: '괴시리 고택의 밤은 크고 화려한 풍경보다 낮은 빛과 오래된 나무의 결, 처마 아래의 빗소리로 기억됩니다. 영덕의 조용한 깊이를 담은 향입니다.',
    noteTitle: '한옥의 나무결과 비 내리는 밤',
    top: 'Rain Drop · Black Tea · Cool Air',
    middle: 'Cedar Leaf · Incense · Magnolia',
    base: 'Aged Wood · Amber · Calm Musk',
    soundTitle: '처마 빗소리와 은은한 풍경',
    soundDesc: '한옥 처마 끝에 떨어지는 빗소리와 작게 흔들리는 풍경 소리로 밤의 몰입감을 만듭니다.',
    routeTitle: '괴시리 고택 밤 산책 코스',
    route: ['괴시리 전통마을', '고택길', '한옥 스테이', '전통 찻집'],
    partners: [
      ['한옥 스테이', '오래된 나무와 조용한 밤을 경험하는 숙소'],
      ['전통 찻집', '비 오는 날 더 잘 어울리는 차 공간'],
      ['공예 공방', '한옥의 정서를 담은 로컬 공예품을 만나는 곳']
    ],
    map: 'https://map.naver.com/p/search/영덕 괴시리 전통마을',
    colors: ['#202033', '#7d6a54', '#eadbbf'],
    looks: ['한옥 처마', '비 내리는 밤', '풍경 소리']
  }
};

let currentId = getInitialScentId();
let audioContext;
let oscillator;
let gain;
let isPlaying = false;

const $ = (selector) => document.querySelector(selector);

function getInitialScentId() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get('scent') || params.get('id');
  const hash = window.location.hash.match(/scent=(\d{2})/i)?.[1];
  const path = window.location.pathname.match(/scent\/(\d{2})/i)?.[1];
  const candidate = query || hash || path || '01';
  return scents[candidate] ? candidate : '01';
}

function setScent(id, updateUrl = true) {
  currentId = id;
  const scent = scents[id];
  const [c1, c2, c3] = scent.colors;

  $('#scentNumber').textContent = scent.id;
  $('#scentTitle').textContent = scent.title;
  $('#scentLead').textContent = scent.lead;
  $('#placeLabel').textContent = scent.place;
  $('#moodLabel').textContent = scent.mood;
  $('#narrativeText').textContent = scent.narrative;
  $('#noteTitle').textContent = scent.noteTitle;
  $('#topNote').textContent = scent.top;
  $('#middleNote').textContent = scent.middle;
  $('#baseNote').textContent = scent.base;
  $('#soundTitle').textContent = scent.soundTitle;
  $('#soundDesc').textContent = scent.soundDesc;
  $('#routeTitle').textContent = scent.routeTitle;
  $('#mapLink').href = scent.map;
  $('#reorderTitle').textContent = `${scent.title} 다시 구매하기`;
  $('#visualGradient').style.background = `linear-gradient(135deg, ${c1} 0%, ${c2} 54%, ${c3} 100%)`;

  renderLookbook(scent);
  renderRoute(scent);
  renderPartners(scent);
  renderScentGrid();
  renderDialogList();

  document.title = `${scent.title} | Yeongdeok Scent Archive`;

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set('scent', id);
    window.history.replaceState({}, '', url);
  }
}

function renderLookbook(scent) {
  const [c1, c2, c3] = scent.colors;
  $('#lookbook').innerHTML = scent.looks.map((label, index) => {
    const deg = 125 + index * 34;
    const bg = `linear-gradient(${deg}deg, ${c1}, ${c2} 58%, ${c3})`;
    return `<div class="look-item" style="--look-bg:${bg}"><span>${label}</span></div>`;
  }).join('');
}

function renderRoute(scent) {
  $('#routeList').innerHTML = scent.route.map((item) => `<li>${item}</li>`).join('');
}

function renderPartners(scent) {
  $('#partnerGrid').innerHTML = scent.partners.map(([title, desc]) => `
    <article class="partner-card">
      <h3>${title}</h3>
      <p>${desc}</p>
    </article>
  `).join('');
}

function renderScentGrid() {
  $('#scentGrid').innerHTML = Object.values(scents).map((scent) => `
    <button class="scent-card" type="button" data-scent="${scent.id}">
      <h3>${scent.id}. ${scent.title}</h3>
      <p>${scent.lead}</p>
    </button>
  `).join('');
}

function renderDialogList() {
  $('#dialogList').innerHTML = Object.values(scents).map((scent) => `
    <button class="dialog-item" value="${scent.id}" type="button" data-scent="${scent.id}">
      <strong>${scent.id}. ${scent.title}</strong>
      <span>${scent.mood}</span>
    </button>
  `).join('');
}

function activateTabOnScroll() {
  const sections = ['scent-play', 'local-map', 're-order'];
  const current = sections.findLast((id) => {
    const top = document.getElementById(id).getBoundingClientRect().top;
    return top <= 110;
  }) || 'scent-play';

  document.querySelectorAll('.tab-link').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

function toggleAudio() {
  if (isPlaying) {
    stopAudio();
    return;
  }

  audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
  oscillator = audioContext.createOscillator();
  gain = audioContext.createGain();

  const baseFrequency = 120 + Number(currentId) * 18;
  oscillator.type = currentId === '05' ? 'triangle' : 'sine';
  oscillator.frequency.setValueAtTime(baseFrequency, audioContext.currentTime);
  gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.035, audioContext.currentTime + 0.5);

  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start();
  isPlaying = true;
  $('#soundButton').textContent = 'Ⅱ';
  $('#audioToggle').textContent = 'ASMR 끄기';
  $('#audioToggle').setAttribute('aria-pressed', 'true');
}

function stopAudio() {
  if (!oscillator || !gain || !audioContext) return;
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.2);
  oscillator.stop(audioContext.currentTime + 0.25);
  oscillator = null;
  gain = null;
  isPlaying = false;
  $('#soundButton').textContent = '▶';
  $('#audioToggle').textContent = 'ASMR 켜기';
  $('#audioToggle').setAttribute('aria-pressed', 'false');
}

function bindEvents() {
  window.addEventListener('scroll', activateTabOnScroll, { passive: true });

  $('#openScentPicker').addEventListener('click', () => $('#scentDialog').showModal());
  $('#soundButton').addEventListener('click', toggleAudio);
  $('#audioToggle').addEventListener('click', toggleAudio);

  document.body.addEventListener('click', (event) => {
    const button = event.target.closest('[data-scent]');
    if (!button) return;
    const id = button.dataset.scent;
    setScent(id);
    $('#scentDialog').close();
    document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
    stopAudio();
  });

  $('#makeMemory').addEventListener('click', () => {
    const scent = scents[currentId];
    const value = $('#memoryInput').value.trim() || '영덕의 한 장면이 조용히 떠올랐습니다.';
    const output = $('#memoryOutput');
    output.hidden = false;
    output.innerHTML = `
      <strong>나의 영덕 향기 기록</strong><br />
      나는 ${scent.title}에서<br />
      ${escapeHtml(value)}<br /><br />
      <small>YEONGDEOK SCENT ARCHIVE · ${new Date().toLocaleDateString('ko-KR')}</small>
    `;
  });

  $('#voucherButton').addEventListener('click', () => {
    const code = $('#voucherCode');
    code.hidden = false;
    code.textContent = `YDSCENT-${currentId}-LOCAL10`;
  });
}

function escapeHtml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

setScent(currentId, false);
bindEvents();
activateTabOnScroll();
