import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='min-w-screen-xl'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
