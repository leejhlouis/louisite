import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '@/App'
import '@/assets/css/main.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
