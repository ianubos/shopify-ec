import '@assets/main.css'
import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Head } from '@components/common'

import { CustomerProvider, CollectionProvider } from '../contexts'

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <CustomerProvider>
        <CollectionProvider>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
        </CollectionProvider>
      </CustomerProvider>
    </>
  )
}