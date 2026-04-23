// Shared top strip + nav + bottom strip. Renders into [data-chrome] placeholders.
(function () {
  const page = document.body.dataset.page || 'home';

  const topStrip = `
    <div class="top-strip">
      <div class="left">@FOCUSE.ESTATE</div>
      <nav class="center">
        <a href="index.html" ${page === 'home' ? 'class="active"' : ''}>Главная</a>
        <a href="projects.html" ${page === 'projects' ? 'class="active"' : ''}>Проекты</a>
        <a href="faq.html" ${page === 'faq' ? 'class="active"' : ''}>Вопросы</a>
        <a href="contact.html" ${page === 'contact' ? 'class="active"' : ''}>Заявка</a>
      </nav>
      <div class="right">© MMXXVI · MOSCOW · DUBAI</div>
    </div>
  `;

  const nav = `
    <div class="nav">
      <a href="index.html" class="logo">Focuse<span class="dot">.</span></a>
      <div class="official">Резиденции и архитектурные дома</div>
      <div class="nav-col">
        <span class="label">Разделы:</span>
        <a href="projects.html" ${page === 'projects' ? 'class="active"' : ''}>Проекты и коллекции</a>
        <a href="index.html#why" ${page === 'home' ? 'class="active"' : ''}>Почему Focuse</a>
        <a href="faq.html" ${page === 'faq' ? 'class="active"' : ''}>Вопросы и ответы</a>
      </div>
      <div class="nav-col">
        <span class="label">Контакт:</span>
        <a href="contact.html" ${page === 'contact' ? 'class="active"' : ''}>Оставить заявку</a>
        <a href="tel:+74952770010">+7 495 277 00 10</a>
      </div>
      <button class="burger" aria-label="Меню">
        <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2">
          <line x1="0" y1="4" x2="14" y2="4" />
          <line x1="0" y1="10" x2="14" y2="10" />
        </svg>
      </button>
    </div>
  `;

  const bottom = `
    <div class="bottom-strip">
      <div>Focuse — подлинная архитектура</div>
      <div>Лицензия №77-0341 · ДОМ.РФ</div>
      <div>hello@focuse.estate</div>
    </div>
  `;

  const mobileMenu = `
    <div class="mobile-menu" id="mobileMenu">
      <button class="close" aria-label="Закрыть" onclick="document.getElementById('mobileMenu').classList.remove('open')">×</button>
      <a href="index.html" ${page === 'home' ? 'class="active"' : ''}>Главная</a>
      <a href="projects.html" ${page === 'projects' ? 'class="active"' : ''}>Проекты</a>
      <a href="faq.html" ${page === 'faq' ? 'class="active"' : ''}>Вопросы</a>
      <a href="contact.html" ${page === 'contact' ? 'class="active"' : ''}>Заявка</a>
      <div class="meta">
        +7 495 277 00 10<br/>
        hello@focuse.estate<br/>
        Москва · Дубай
      </div>
    </div>
  `;

  const topSlot = document.querySelector('[data-chrome="top"]');
  const navSlot = document.querySelector('[data-chrome="nav"]');
  const bottomSlot = document.querySelector('[data-chrome="bottom"]');

  if (topSlot) topSlot.outerHTML = topStrip;
  if (navSlot) navSlot.outerHTML = nav;
  if (bottomSlot) bottomSlot.outerHTML = bottom;

  // append mobile menu to body
  document.body.insertAdjacentHTML('beforeend', mobileMenu);
  // burger click handler
  setTimeout(() => {
    const burger = document.querySelector('.burger');
    if (burger) {
      burger.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.add('open');
      });
    }
  }, 0);
})();
