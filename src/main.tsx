import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'

// Pages
import Home from './pages/Home'
import Events from './pages/Events'
import PersonalBrand from './pages/PersonalBrand'
import ProductPhotography from './pages/ProductPhotography'
import RealEstate from './pages/RealEstate'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Root from './pages/Root'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router basename="/">
      <Routes>
        <Route element={<Root />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="brand" element={<PersonalBrand />} />
          <Route path="product" element={<ProductPhotography />} />
          <Route path="real-estate" element={<RealEstate />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
