import { Suspense, lazy, useEffect } from 'react';
import { Header } from './components/Header';
import Hero from './components/Hero';
import { CustomCursor } from './components/CustomCursor';
import Fotos from './components/Fotos';

// Lazy loading for components below the fold
const Ministracoes = lazy(() => import('./components/Ministracoes'));
const Partners = lazy(() => import('./components/Partners'));
const Recomendacoes = lazy(() => import('./components/Recomendacoes'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  useEffect(() => {
    document.body.id = 'top'
    document.body.setAttribute('data-route', 'home')
    document.body.setAttribute('data-area', '')
  }, [])

  return (
    <div className={`ua-sp ua-safari ua-ios`}>
      <CustomCursor />
      <Header />
      <main className="main">
        <Hero />
        <div className="homeMain">
          <Suspense fallback={<div className="h-32" />}>
            <Fotos />
          </Suspense>
          <Suspense fallback={<div className="h-32" />}>
            <Ministracoes />
          </Suspense>
          <Suspense fallback={<div className="h-32" />}>
            <Partners />
          </Suspense>
          <Suspense fallback={<div className="h-32" />}>
            <Recomendacoes />
          </Suspense>
        </div>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
