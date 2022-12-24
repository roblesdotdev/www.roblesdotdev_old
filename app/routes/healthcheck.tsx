import type { DataFunctionArgs } from '@remix-run/node'

export async function loader({ request }: DataFunctionArgs) {
  const host =
    request.headers.get('X-Forwarded-Host') ?? request.headers.get('host')

  try {
    await Promise.all([
      fetch(`${new URL(request.url).protocol}${host}`, { method: 'HEAD' }).then(
        r => {
          if (!r.ok) return Promise.reject(r)
        },
      ),
    ])
    return new Response('OK')
  } catch (error: unknown) {
    console.log(request.url, 'healthcheck ❌', { error })
    return new Response('ERROR', { status: 500 })
  }
}
