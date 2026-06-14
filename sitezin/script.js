document.addEventListener('DOMContentLoaded', () => {
  // Keep existing nav-item active behavior (if present)
  const cards = document.querySelectorAll('.nav-item');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(item => item.classList.remove('active'));
      card.classList.add('active');
    });
  });

  // Simple scroll reveal to guide user attention sequentially
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
        setTimeout(() => el.classList.add('is-visible'), delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  // Smoothly focus anchor targets when navigated via hash
  function focusHash() {
    const id = location.hash.slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
    // remove tabindex after focusing to keep DOM clean
    setTimeout(() => el.removeAttribute('tabindex'), 1200);
  }
  window.addEventListener('hashchange', focusHash, false);
  // if loaded with hash
  if (location.hash) focusHash();

  // Modal: open project details centered
  const modal = document.getElementById('project-modal');
  const modalOverlay = modal.querySelector('.modal-overlay');
  const modalClose = modal.querySelector('.modal-close');
  const modalTitle = modal.querySelector('#modal-title');
  const modalDesc = modal.querySelector('.modal-desc');
  const modalTag = modal.querySelector('.project-tag');
  const modalImg = modal.querySelector('.modal-preview img');
  const modalLive = modal.querySelector('.modal-live');

  function openModal(data) {
    modalTitle.textContent = data.title || '';
    modalDesc.textContent = data.desc || '';
    modalTag.textContent = data.tag || '';
    modalImg.src = data.img || '';
    modalImg.alt = data.title ? `Preview de ${data.title}` : 'Preview do projeto';
    modalLive.href = data.live || '#';
    modal.setAttribute('aria-hidden', 'false');
    // lock scroll
    document.documentElement.style.overflow = 'hidden';
    // focus inside modal
    modal.setAttribute('tabindex', '-1');
    modal.focus();
  }

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
    modal.removeAttribute('tabindex');
  }

  modalOverlay.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
  });

  // Wire up project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, idx) => {
    // allow data attributes for dynamic content
    const data = {
      title: card.querySelector('h3')?.textContent || `Projeto ${idx+1}`,
      desc: card.querySelector('p')?.textContent || '',
      tag: card.querySelector('.project-tag')?.textContent || '',
      img: card.getAttribute('data-img') || '',
      live: card.getAttribute('data-live') || '#'
    };
    const link = card.querySelector('.project-link');
    if (link) {
      link.addEventListener('click', (ev) => {
        ev.preventDefault();
        openModal(data);
      });
    }
  });
});