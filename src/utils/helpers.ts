export function getRootUrl() {
  const { protocol, hostname, port } = window.location;
  const baseURL = `${protocol}//${hostname}${port ? `:${port}` : ''}`;
  return process.env.NODE_ENV === 'production' ? baseURL + '/vue-ar' : baseURL
}