import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
    domain="dev-7s4yg3kslqiovl3r.us.auth0.com"
    clientId="P0vByHV9PjQHOhfzd9AamOSTYnvamNUY"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
      </BrowserRouter>
      
    </Auth0Provider>
)
