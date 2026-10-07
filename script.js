(() => {
  'use strict';
  const games = [
  {
    "slug": "coin",
    "name": "Coin Block Clicker",
    "subtitle": "Tap Game",
    "category": "arcade",
    "genre": "Idle · Clicker",
    "color": "#CAE7FD",
    "id": "com.cubeclickercoin.app",
    "description": "Tap a block. Collect coins. Unlock heroes and build a retro reward machine.",
    "portrait": true,
    "count": 3
  },
  {
    "slug": "dead-online",
    "name": "DeadTubbies Online",
    "subtitle": "A familiar world. An unfamiliar feeling.",
    "category": "horror",
    "genre": "Horror · Multiplayer",
    "color": "#D3D8E0",
    "id": "com.ArtuomGameStudio.DTOnline",
    "description": "Explore the unsettling world of DeadTubbies with a friend. Two locations, different times of day, and three game modes.",
    "count": 3
  },
  {
    "slug": "atlas",
    "name": "Pocket Atlas",
    "subtitle": "Block Puzzle",
    "category": "puzzle",
    "genre": "Puzzle · Tangram",
    "color": "#E1E8BC",
    "id": "com.blockpuzzlepocketatlas",
    "description": "Drag, rotate, and fit colorful pieces into miniature maps. Take your time and discover the next destination.",
    "portrait": true,
    "count": 3
  },
  {
    "slug": "word",
    "name": "Daily Word Puzzle",
    "subtitle": "Tile Swap",
    "category": "puzzle",
    "genre": "Puzzle · Words",
    "color": "#E3D7FA",
    "id": "com.Uniline.DailyWordPuzzle",
    "description": "Swap letter tiles to uncover hidden words. A quiet daily challenge with no countdown timer.",
    "portrait": true,
    "count": 3
  },
  {
    "slug": "dead-last",
    "name": "DeadTubbies",
    "subtitle": "The Last Mistake",
    "category": "horror",
    "genre": "Horror · Story",
    "color": "#D8DFDF",
    "id": "com.ArtuomGameStudio.DT1",
    "description": "Follow Phil into a valley that has fallen silent. An alternative horror story where familiar faces hide something darker.",
    "count": 3
  },
  {
    "slug": "dead-reason",
    "name": "DeadTubbies 2",
    "subtitle": "The Reason",
    "category": "horror",
    "genre": "Horror · Prequel",
    "color": "#DCCCD0",
    "id": "com.ArtuomGameStudio.DT2",
    "description": "Return to the events before The Last Mistake and discover how the nightmare began.",
    "count": 3
  },
  {
    "slug": "rails",
    "name": "Tiny Rails",
    "subtitle": "Train Puzzle",
    "category": "puzzle",
    "genre": "Puzzle · Timing",
    "color": "#F5DEC8",
    "id": "com.uniline.toontrainpuzzle",
    "description": "Switch tracks, time your taps, and guide colorful trains safely through a world of miniature railways.",
    "portrait": true,
    "count": 2,
    "unavailable": true
  },
  {
    "slug": "doom",
    "name": "DoomDivers",
    "subtitle": "Battle Drone Attack",
    "category": "arcade",
    "genre": "Action · Idle RPG",
    "color": "#FFD4C4",
    "id": "com.doomdivers.warrobots.idlerpg",
    "description": "Command a battle mech, upgrade your arsenal, and take on waves of alien bugs and giant bosses.",
    "portrait": true,
    "count": 2,
    "unavailable": true
  },
  {
    "slug": "catch",
    "name": "Catch or Fall io",
    "subtitle": "STAR Dudes",
    "category": "arcade",
    "genre": "Arcade · Obstacle race",
    "color": "#CBE5CF",
    "id": "com.uniline.catchorfallguys",
    "description": "Run, jump, and dodge your way through colorful knockout courses with the STAR Dudes.",
    "portrait": true,
    "count": 2,
    "unavailable": true
  },
  {
    "slug": "what-if",
    "name": "What If",
    "subtitle": "Your personal stories",
    "category": "experiments",
    "genre": "Experiment · AI portraits",
    "color": "#D4D2E6",
    "id": "com.whatif.whatiffapp",
    "description": "An experiment beyond games: turn your portrait into an alternate historical persona, complete with a story from another era.",
    "portrait": true,
    "count": 3
  }
];
  document.documentElement.classList.add('js');
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  let motion = !reduced.matches;
  try { const saved = localStorage.getItem('uniline-motion'); if (saved !== null && !reduced.matches) motion = saved === 'on'; } catch {}
  function updateMotion() {
    document.documentElement.classList.toggle('motion-off', !motion);
    $('.motion-toggle').textContent = 'Motion: ' + (motion ? 'on' : 'off');
    $('.motion-toggle').setAttribute('aria-pressed', String(motion));
    if (!motion) $$('.is-pending').forEach(el => el.classList.remove('is-pending'));
  }
  updateMotion();
  $('.motion-toggle').addEventListener('click', () => { motion = !motion; updateMotion(); try { localStorage.setItem('uniline-motion', motion ? 'on' : 'off'); } catch {} });
  reduced.addEventListener('change', e => { motion = !e.matches; updateMotion(); });
  $('#year').textContent = new Date().getFullYear();

  if ('IntersectionObserver' in window && motion) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove('is-pending'); observer.unobserve(entry.target); }
    }), { threshold: .07, rootMargin: '0px 0px 150px 0px' });
    $$('.reveal').forEach(el => { if (el.getBoundingClientRect().top > innerHeight * .95) el.classList.add('is-pending'); observer.observe(el); });
  }
  let ticking = false;
  function scrollFrame() {
    const distance = document.documentElement.scrollHeight - innerHeight;
    $('.scroll-progress').style.transform = `scaleX(${distance > 0 ? scrollY / distance : 0})`;
    if (motion) $('.world-band-track').style.setProperty('--band-shift', `${-30 - Math.min(scrollY * .12, 300)}px`);
    ticking = false;
  }
  addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(scrollFrame); ticking = true; } }, { passive: true });
  scrollFrame();

  const menu = $('.menu-toggle');
  function closeMenu() { $('#main-nav').classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); }
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; $('#main-nav').classList.toggle('open', open); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
  $$('#main-nav a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('click', e => { if (!e.target.closest('.site-header')) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  let sceneTimer;
  function selectScene(slug) {
    const game = games.find(g => g.slug === slug);
    $$('.scene-selector button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.scene === slug)));
    $('#hero-preview').dataset.game = slug;
    $('#hero-genre').textContent = game.genre;
    $('.hero-playground').style.setProperty('--scene-color', game.color);
    $('#hero-image').style.opacity = 0;
    $('#hero-image-back').style.opacity = 0;
    clearTimeout(sceneTimer);
    sceneTimer = setTimeout(() => {
      $('#hero-scene').classList.toggle('landscape', !game.portrait);
      $('#hero-image').src = `assets/${slug}-1.webp`;
      $('#hero-image').alt = `${game.name} gameplay`;
      $('#hero-image-back').src = `assets/${slug}-2.webp`;
      $('#hero-icon').src = `assets/${slug}-icon.webp`;
      $('#hero-image').style.opacity = 1;
      $('#hero-image-back').style.opacity = 1;
    }, motion ? 130 : 0);
  }
  $$('.scene-selector button').forEach(b => b.addEventListener('click', () => selectScene(b.dataset.scene)));
  $('.hero-playground').addEventListener('pointermove', e => {
    if (!motion || !fine.matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    $('#hero-scene').style.setProperty('--sx', `${(e.clientX - rect.left - rect.width / 2) / rect.width * 10}px`);
    $('#hero-scene').style.setProperty('--sy', `${(e.clientY - rect.top - rect.height / 2) / rect.height * 8}px`);
  });
  $('.hero-playground').addEventListener('pointerleave', () => { $('#hero-scene').style.setProperty('--sx', '0px'); $('#hero-scene').style.setProperty('--sy', '0px'); });

  $$('.filters button').forEach(button => button.addEventListener('click', () => {
    $$('.filters button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    let count = 0;
    $$('.game-card').forEach(card => { const show = button.dataset.filter === 'all' || card.dataset.category === button.dataset.filter; card.hidden = !show; if (show) { count++; card.classList.remove('is-pending'); } });
    $('.result-count').textContent = `${count} ${count === 1 ? 'project' : 'projects'}`;
    scrollFrame();
  }));
  $$('.game-card').forEach(card => {
    card.addEventListener('pointermove', e => { if (!motion || !fine.matches) return; const r = card.getBoundingClientRect(); card.style.setProperty('--ry', `${(e.clientX - r.left - r.width / 2) / r.width * 3}deg`); card.style.setProperty('--rx', `${-(e.clientY - r.top - r.height / 2) / r.height * 3}deg`); });
    card.addEventListener('pointerleave', () => { card.style.setProperty('--ry', '0deg'); card.style.setProperty('--rx', '0deg'); });
  });

  const dialog = $('.game-dialog');
  let activeGame, screenshot = 1, lastFocus;
  function renderScreenshot() {
    $('#dialog-image').src = `assets/${activeGame.slug}-${screenshot}.webp`;
    $('#dialog-image').alt = `${activeGame.name} — screenshot ${screenshot} of ${activeGame.count}`;
    $('#gallery-count').textContent = `${screenshot} / ${activeGame.count}`;
  }
  function openGame(slug) {
    activeGame = games.find(g => g.slug === slug); if (!activeGame) return;
    lastFocus = document.activeElement; screenshot = 1;
    $('#dialog-title').textContent = activeGame.name;
    $('#dialog-subtitle').textContent = activeGame.subtitle;
    $('#dialog-description').textContent = activeGame.description;
    $('#dialog-genre').textContent = activeGame.genre;
    dialog.style.setProperty('--dialog-color', activeGame.color);
    $('#dialog-store').href = 'https://play.google.com/store/apps/details?id=' + activeGame.id;
    $('#dialog-store').hidden = !!activeGame.unavailable;
    $('#dialog-unavailable').hidden = !activeGame.unavailable;
    renderScreenshot();
    if (typeof dialog.showModal === 'function') { dialog.showModal(); document.body.classList.add('dialog-open'); $('.dialog-close').focus(); } else { location.href = activeGame.unavailable ? '#project-' + slug : $('#dialog-store').href; }
  }
  $$('[data-game]').forEach(button => button.addEventListener('click', () => openGame(button.dataset.game)));
  $('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); if (lastFocus) lastFocus.focus({ preventScroll: true }); });
  dialog.addEventListener('click', e => { const r = dialog.getBoundingClientRect(); if (e.target === dialog && (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)) dialog.close(); });
  function advance(step) { screenshot = (screenshot - 1 + step + activeGame.count) % activeGame.count + 1; renderScreenshot(); }
  $('#gallery-prev').addEventListener('click', () => advance(-1));
  $('#gallery-next').addEventListener('click', () => advance(1));
  dialog.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { e.preventDefault(); advance(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); advance(-1); } });
  let touchX = 0;
  $('#dialog-image').addEventListener('touchstart', e => { touchX = e.changedTouches[0].clientX; }, { passive: true });
  $('#dialog-image').addEventListener('touchend', e => { const delta = e.changedTouches[0].clientX - touchX; if (Math.abs(delta) > 45) advance(delta < 0 ? 1 : -1); }, { passive: true });
})();
