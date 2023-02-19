import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { defaultRoutes } from './routes'

const Navigation = () => {
  return (
    <>
      <BrowserRouter>
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
