import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

export default () => createRoot(document.getElementById('course-info')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
