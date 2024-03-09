import { useState } from 'react'
import './App.css'
import { Router_app } from './config/Router_app'
import { Provider } from 'react-redux'
import store from './store'
function App() {

  return (
    <>
      {/* <Provider store={store}>
      <ThemeProvider theme={theme}> */}
      <Router_app />
    {/* </ThemeProvider>
      </Provider> */}
    </>
  )
}

export default App
