import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store.js'
import { BrowserRouter as Routes} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes>
      <Provider store={store} >
    
    <App />
    </Provider>
    </Routes>
  </React.StrictMode>,
)
