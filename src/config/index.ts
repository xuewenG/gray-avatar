const env = process.env

export const serverConfig = {
  port: env.PORT || 8082,
  contextPath: env.CONTEXT_PATH || '',
  corsOrigin: (env.CORS_ORIGIN || '').split(',')
}
