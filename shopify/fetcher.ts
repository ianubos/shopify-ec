import { API_TOKEN, API_URL } from './const'
import { handleFetchResponse } from './utils'

export type Fetcher<T = any, B = any> = (
          options: FetcherOptions<B>
       ) => T | Promise<T>

export type FetcherOptions<Body = any> = {
    url?: string
    query?: string
    method?: string
    variables?: any
    body?: Body
}

const fetcher: Fetcher = async ({
  url = API_URL,
  method = 'POST',
  variables,
  query,
}) => {
  const { locale, ...vars } = variables ?? {}
  return handleFetchResponse(
    await fetch(url, {
      method,
      body: JSON.stringify({ query, variables: vars }),
      headers: {
        'X-Shopify-Storefront-Access-Token': API_TOKEN!,
        'Content-Type': 'application/json',
        ...(locale && {
          'Accept-Language': locale,
        }),
      },
    })
  )
}

export default fetcher