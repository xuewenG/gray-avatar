const env = process.env

export const serverConfig = {
  port: env.PORT || 8082,
  contextPath: env.CONTEXT_PATH || '/gray-avatar',
  corsOrigin: (env.CORS_ORIGIN || '').split(',')
}
