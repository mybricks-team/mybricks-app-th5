export const shapeUrlByEnv = (envList, env, url) => {
  if (!envList || !env || /^(https?|ws)/.test(url)) return url
  const data = (envList || []).find(item => item.name === env)
  if (!data || !data.value) return url
  return data.value + url
}