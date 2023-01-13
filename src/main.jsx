import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ThemeProvider} from './Api/Context'
import {Provider} from 'react-redux'
import { store } from './Apps/Store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store} >
        <ThemeProvider>
         <App />
        </ThemeProvider>
      </Provider>
  </React.StrictMode>,
)
