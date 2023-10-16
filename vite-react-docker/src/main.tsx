import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MyContextProvider } from './context/MyContextProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <MyContextProvider>
      <App />
    </MyContextProvider>
)
