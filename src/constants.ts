export const HTTP_STATUS = {
  OK: 200,
  PRECONDITION_FAILED: 412,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
} as const

export const AUTH_API = {
  LOGIN: 'http://localhost:3130/login',
  LOGOUT: 'http://localhost:3130/logout',
  REGISTER: 'http://localhost:3130/register',
  DELETE: 'http://localhost:3130/delete',
  UPDATE: 'http://localhost:3130/update',
} as const

export const COLORS = {
  WARN: '',
  ERROR: '#d33',
  SUCCESS: '#28a745',
} as const
