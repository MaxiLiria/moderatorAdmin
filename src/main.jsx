import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserProvider from './components/UserProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <App />
  </UserProvider>,
)
