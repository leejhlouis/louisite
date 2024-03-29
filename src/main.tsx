import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '@/App.tsx'
import ScrollToTop from '@/components/common/ScrollToTop.tsx'
import '@/assets/css/main.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
)
