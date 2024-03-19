import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import TimerApp from './TimerApp.jsx'
import StopwatchApp from './StopwatchApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TimerApp />
    <StopwatchApp />
  </React.StrictMode>,
)
