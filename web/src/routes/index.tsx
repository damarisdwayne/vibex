import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../components'
import { defaultRoutes } from './routes'

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {defaultRoutes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navigation
