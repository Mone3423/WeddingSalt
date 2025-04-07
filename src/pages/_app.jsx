// pages/_app.jsx
import { AnimatePresence } from 'framer-motion'
import PageTransition from '../Pagetransition/PageTransition'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [isFirstMount, setIsFirstMount] = useState(true)

  useEffect(() => {
    const handleRouteChange = () => {
      setIsFirstMount(false)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <AnimatePresence mode='wait'>
      <PageTransition key={router.asPath}>
        <Component {...pageProps} isFirstMount={isFirstMount} />
      </PageTransition>
    </AnimatePresence>
  )
}

export default MyApp