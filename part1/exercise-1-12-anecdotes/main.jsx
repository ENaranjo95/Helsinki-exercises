import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';

export default () => createRoot(document.getElementById('anecdotes')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)