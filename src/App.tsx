import { RouterProvider } from 'react-router'
import './App.css'
import User from './components/User'
import { router } from './Router'

function App() {
  return (
    <>
      <User/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
