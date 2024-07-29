import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserProvider from './components/UserProvider.jsx'
import { GlobalStyle } from './app/Style.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <GlobalStyle />
    <App />
  </UserProvider>,
)
