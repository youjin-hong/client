export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh'
  },
  USER: {
    PROFILE: '/users/profile',
    UPDATE: '/users/update'
  }
};

export const ROUTES = {
  HOME: '/',
  LANDING: '/landing',
  MANUAL: '/manual',
  LOGIN: '/login',
  SIGNUP: '/signup',
  PROJECTS: '/projects',
  NEW_PROJECT: '/projects/new',
  PROJECT_DETAIL: '/projects/:projectId',
  TESTS: '/tests',
  TEST_DETAIL: '/tests/:testId',
  SETTINGS: '/settings',
  PROFILE: '/settings/profile'
};

export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user'
};

export const ERROR_MESSAGES = {
  NETWORK_ERROR: '네트워크 오류가 발생했습니다. 다시 시도해주세요.',
  UNAUTHORIZED: '인증이 필요합니다. 로그인해주세요.',
  FORBIDDEN: '접근 권한이 없습니다.',
  NOT_FOUND: '요청하신 페이지를 찾을 수 없습니다.',
  SERVER_ERROR: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
};
