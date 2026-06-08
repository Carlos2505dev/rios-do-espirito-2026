import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Hero from './components/Hero';
import { CustomCursor } from './components/CustomCursor';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import Fotos from './components/Fotos';

const Ministracoes = lazy(() => import('./components/Ministracoes'));
const Avaliacao = lazy(() => import('./components/Avaliacao'));
const Playlist = lazy(() => import('./components/Playlist'));
const Partners = lazy(() => import('./components/Partners'));
const Recomendacoes = lazy(() => import('./components/Recomendacoes'));
const Footer = lazy(() => import('./components/Footer'));
const FeedbackPage = lazy(() => import('./pages/feedbacks'));
const TestemunhosPage = lazy(() => import('./pages/testemunhos'));

const Home = () => {
  return (
    <>
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
            <Avaliacao />
          </Suspense>
          <Suspense fallback={<div className="h-32" />}>
            <Playlist />
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
    </>
  );
};

const App = () => {
  useEffect(() => {
    document.body.id = 'top'
    document.body.setAttribute('data-route', 'home')
    document.body.setAttribute('data-area', '')
  }, [])

  return (
    <Router>
      <div className={`ua-sp ua-safari ua-ios`}>
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={
            <Suspense fallback={<LoadingSpinner />}>
              <FeedbackPage />
            </Suspense>
          } />
          <Route path="/testemunhos" element={
            <Suspense fallback={<LoadingSpinner />}>
              <TestemunhosPage />
            </Suspense>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
