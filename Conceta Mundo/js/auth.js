/**
 * auth.js — Gerenciamento de Autenticação via localStorage
 * Conceta Mundo
 */

const Auth = (() => {
  const USERS_KEY = 'cm_users';
  const SESSION_KEY = 'cm_session';

  // Dados mock iniciais (egressos e estudantes de exemplo)
  const SEED_USERS = [
    {
      id: 'u1',
      nome: 'Ana Beatriz Santos',
      email: 'ana@exemplo.com',
      senha: '123456',
      papel: 'egresso',
      pais: 'Irlanda',
      programa: 'Bolsa de Intercâmbio',
      ano: 2023,
      cidade: 'Dublin',
      bio: 'Passei 10 meses em Dublin estudando inglês e descobri uma paixão por culturas diferentes.',
      foto: null,
      iniciais: 'AB',
      curtidas: [],
      createdAt: '2024-01-15'
    },
    {
      id: 'u2',
      nome: 'Carlos Eduardo Lima',
      email: 'carlos@exemplo.com',
      senha: '123456',
      papel: 'egresso',
      pais: 'Canadá',
      programa: 'Bolsa de Intercâmbio',
      ano: 2022,
      cidade: 'Toronto',
      bio: 'Intercâmbio no Canadá mudou minha perspectiva de vida. Aprendi inglês, fiz amigos do mundo todo e voltei com maturidade.',
      foto: null,
      iniciais: 'CE',
      curtidas: [],
      createdAt: '2024-02-10'
    },
    {
      id: 'u3',
      nome: 'Mariana Oliveira',
      email: 'mariana@exemplo.com',
      senha: '123456',
      papel: 'egresso',
      pais: 'Portugal',
      programa: 'Bolsa de Intercâmbio',
      ano: 2023,
      cidade: 'Lisboa',
      bio: 'Lisboa me acolheu de braços abertos. A experiência foi transformadora e me preparou para o vestibular.',
      foto: null,
      iniciais: 'MO',
      curtidas: [],
      createdAt: '2024-03-05'
    },
    {
      id: 'u4',
      nome: 'Pedro Alves',
      email: 'pedro@exemplo.com',
      senha: '123456',
      papel: 'estudante',
      bio: 'Sonhando com o intercâmbio!',
      foto: null,
      iniciais: 'PA',
      curtidas: [],
      createdAt: '2024-04-20'
    }
  ];

  function _initSeed() {
    const users = localStorage.getItem(USERS_KEY);
    if (!users) {
      localStorage.setItem(USERS_KEY, JSON.stringify(SEED_USERS));
    }
  }

  function _getUsers() {
    _initSeed();
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  }

  function _saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function getSession() {
    const s = localStorage.getItem(SESSION_KEY);
    return s ? JSON.parse(s) : null;
  }

  function isLoggedIn() {
    return getSession() !== null;
  }

  function getCurrentUser() {
    const session = getSession();
    if (!session) return null;
    const users = _getUsers();
    return users.find(u => u.id === session.userId) || null;
  }

  function login(email, senha) {
    const users = _getUsers();
    const user = users.find(u => u.email === email && u.senha === senha);
    if (!user) {
      return { ok: false, error: 'E-mail ou senha incorretos.' };
    }
    localStorage.setItem(SESSION_KEY, JSON.stringify({ userId: user.id }));
    return { ok: true, user };
  }

  function register(dados) {
    const users = _getUsers();

    if (users.find(u => u.email === dados.email)) {
      return { ok: false, error: 'Este e-mail já está cadastrado.' };
    }

    const initiais = dados.nome
      .split(' ')
      .slice(0, 2)
      .map(n => n[0])
      .join('')
      .toUpperCase();

    const newUser = {
      id: 'u_' + Date.now(),
      nome: dados.nome,
      email: dados.email,
      senha: dados.senha,
      papel: dados.papel,
      pais: dados.pais || null,
      programa: dados.programa || 'Bolsa de Intercâmbio',
      ano: dados.ano ? parseInt(dados.ano) : null,
      cidade: dados.cidade || null,
      bio: dados.bio || '',
      foto: null,
      iniciais: initiais,
      curtidas: [],
      createdAt: new Date().toISOString().split('T')[0]
    };

    users.push(newUser);
    _saveUsers(users);
    localStorage.setItem(SESSION_KEY, JSON.stringify({ userId: newUser.id }));
    return { ok: true, user: newUser };
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
    window.location.href = 'index.html';
  }

  function updateUser(updates) {
    const session = getSession();
    if (!session) return { ok: false, error: 'Não autenticado.' };
    const users = _getUsers();
    const idx = users.findIndex(u => u.id === session.userId);
    if (idx === -1) return { ok: false, error: 'Usuário não encontrado.' };
    users[idx] = { ...users[idx], ...updates };
    _saveUsers(users);
    return { ok: true, user: users[idx] };
  }

  function requireAuth(redirect = 'login.html') {
    if (!isLoggedIn()) {
      window.location.href = redirect;
      return false;
    }
    return true;
  }

  function redirectIfLoggedIn(redirect = 'dashboard.html') {
    if (isLoggedIn()) {
      window.location.href = redirect;
      return true;
    }
    return false;
  }

  // Inicializa seed
  _initSeed();

  return {
    getSession,
    isLoggedIn,
    getCurrentUser,
    login,
    register,
    logout,
    updateUser,
    requireAuth,
    redirectIfLoggedIn,
    getUsers: _getUsers
  };
})();
