/**
 * main.js — Utilitários e componentes globais
 * Conceta Mundo
 */

/* ── Toast Notifications ── */
const Toast = {
  container: null,
  init() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    }
  },
  show(msg, type = 'info', duration = 3500) {
    this.init();
    const icons = { success: '✅', error: '❌', info: 'ℹ️' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span class="toast-icon">${icons[type]}</span><span class="toast-msg">${msg}</span>`;
    this.container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(40px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },
  success(msg) { this.show(msg, 'success'); },
  error(msg) { this.show(msg, 'error'); },
  info(msg) { this.show(msg, 'info'); }
};

/* ── Navbar ── */
const Navbar = {
  init() {
    // Scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
      });
    }

    // Mobile toggle
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
      toggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
      });
    }

    // Ativo link atual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });

    // Avatar dropdown
    const avatarBtn = document.getElementById('navAvatarBtn');
    const dropdownMenu = document.getElementById('navDropdown');
    if (avatarBtn && dropdownMenu) {
      avatarBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('open');
      });
      document.addEventListener('click', () => {
        dropdownMenu.classList.remove('open');
      });
    }

    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => Auth.logout());
    }

    // Atualizar navbar com dados do usuário
    this.updateUserUI();
  },

  updateUserUI() {
    const user = Auth.getCurrentUser();
    const navAvatarName = document.getElementById('navUserName');
    const navAvatarEl = document.getElementById('navAvatarEl');
    const navGuestBtns = document.getElementById('navGuestBtns');
    const navUserArea = document.getElementById('navUserArea');

    if (user) {
      if (navGuestBtns) navGuestBtns.style.display = 'none';
      if (navUserArea) navUserArea.style.display = 'flex';
      if (navAvatarName) navAvatarName.textContent = user.nome.split(' ')[0];
      if (navAvatarEl) {
        navAvatarEl.textContent = user.iniciais;
        navAvatarEl.title = user.nome;
      }
    } else {
      if (navGuestBtns) navGuestBtns.style.display = 'flex';
      if (navUserArea) navUserArea.style.display = 'none';
    }
  }
};

/* ── Utilitários de UI ── */
const UI = {
  // Converte Markdown básico para HTML
  markdownToHtml(text) {
    if (!text) return '';
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>')
      .replace(/^(.+)$/, '<p>$1</p>');
  },

  // Formata data para PT-BR
  formatDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  },

  // Tempo relativo
  timeAgo(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);
    if (diff < 60) return 'agora mesmo';
    if (diff < 3600) return `${Math.floor(diff/60)} min atrás`;
    if (diff < 86400) return `${Math.floor(diff/3600)}h atrás`;
    if (diff < 2592000) return `${Math.floor(diff/86400)} dias atrás`;
    return this.formatDate(dateStr);
  },

  // Renderiza avatar (iniciais ou img)
  renderAvatar(user, size = 'md') {
    if (!user) return `<div class="avatar-placeholder avatar-${size}">?</div>`;
    return `
      <div class="avatar-placeholder avatar-${size}" style="font-size:${size === 'sm' ? '0.75rem' : size === 'lg' ? '1.2rem' : '0.9rem'}">
        ${user.iniciais || '?'}
      </div>
    `;
  },

  // Trunca texto
  truncate(text, len = 120) {
    if (!text) return '';
    return text.length > len ? text.slice(0, len) + '...' : text;
  },

  // Scroll suave para elemento
  scrollTo(selector) {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },

  // Pega parâmetro da URL
  getParam(key) {
    return new URLSearchParams(window.location.search).get(key);
  },

  // Anima entrada de elementos
  animateIn(selector, delay = 0) {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'all 0.5s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, delay + i * 80);
    });
  },

  // Obtém dados do usuário por ID
  getUserById(userId) {
    const users = Auth.getUsers();
    return users.find(u => u.id === userId) || null;
  },

  // Renderiza card de relato
  renderStoryCard(story) {
    const autor = this.getUserById(story.autorId);
    const bandeiras = { 'Irlanda': '🇮🇪', 'Canadá': '🇨🇦', 'Portugal': '🇵🇹', 'Alemanha': '🇩🇪', 'França': '🇫🇷', 'Espanha': '🇪🇸' };
    const flag = bandeiras[story.pais] || '🌍';
    const tagsHtml = story.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('');

    return `
      <article class="card story-card" data-id="${story.id}" onclick="typeof StoriesModal !== 'undefined' ? StoriesModal.open('${story.id}') : window.location.href='relato.html?id=${story.id}'">
        <div class="story-card-header">
          <div class="story-card-country">
            <span class="country-flag">${flag}</span>
            <div>
              <div class="country-name">${story.pais}</div>
              <div class="country-sub">${story.cidade} · ${story.ano}</div>
            </div>
          </div>
          ${story.destaque ? '<span class="badge badge-amber">⭐ Destaque</span>' : ''}
        </div>
        <h3 class="story-card-title">${story.titulo}</h3>
        <p class="story-card-resumo">${this.truncate(story.resumo, 110)}</p>
        <div class="tags-list mb-4">${tagsHtml}</div>
        <div class="story-card-footer">
          <div class="flex items-center gap-2">
            ${this.renderAvatar(autor, 'sm')}
            <span class="story-card-autor">${autor ? autor.nome.split(' ')[0] : 'Egresso'}</span>
          </div>
          <div class="story-card-stats">
            <span>❤️ ${story.curtidas.length}</span>
            <span>💬 ${story.comentarios.length}</span>
            <span>👁 ${story.visualizacoes}</span>
          </div>
        </div>
      </article>
    `;
  },

  // Renderiza card de pergunta
  renderQuestionCard(q) {
    const autor = this.getUserById(q.autorId);
    const catIcons = { 'seleção': '📋', 'família anfitriã': '🏠', 'documentação': '📄', 'vida no exterior': '✈️', 'retorno': '🏡' };
    const icon = catIcons[q.categoria] || '❓';

    return `
      <div class="card question-card" onclick="window.location.href='forum.html?id=${q.id}'">
        <div class="question-card-header">
          <span class="badge badge-blue">${icon} ${q.categoria}</span>
          ${q.resolvida ? '<span class="badge badge-teal">✓ Resolvida</span>' : ''}
        </div>
        <h4 class="question-card-title">${q.titulo}</h4>
        <p class="question-card-body">${this.truncate(q.corpo, 100)}</p>
        <div class="question-card-footer">
          <div class="flex items-center gap-2">
            ${this.renderAvatar(autor, 'sm')}
            <span style="font-size:0.82rem;color:var(--gray-400)">${autor ? autor.nome.split(' ')[0] : 'Estudante'}</span>
          </div>
          <div class="question-stats">
            <span>💬 ${q.respostas.length} resposta${q.respostas.length !== 1 ? 's' : ''}</span>
            <span>👁 ${q.visualizacoes}</span>
          </div>
        </div>
      </div>
    `;
  }
};

/* ── Inicializa componentes no DOMContentLoaded ── */
document.addEventListener('DOMContentLoaded', () => {
  Navbar.init();

  // Intersection Observer para animações
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.observe-fade').forEach(el => observer.observe(el));
});
