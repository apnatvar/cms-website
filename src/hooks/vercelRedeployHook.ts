export const VercelRedeployHook = async () => {
  const url = process.env.VERCEL_DEPLOY_HOOK_URL

  if (!url) {
    console.warn('Redeploy URL not defined')
    return
  }

  try {
    const res = await fetch(url, { method: 'POST' })

    if (!res.ok) {
      console.error(`Deploy hook failed: ${res.status} ${res.statusText}`)
    } else {
      console.log('Vercel deploy hook triggered successfully')
    }
  } catch (err) {
    console.error('Error triggering deploy hook:', err)
  }
}
