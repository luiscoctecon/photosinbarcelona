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

// Error Boundary
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error('React Error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{padding: '20px', textAlign: 'center', fontFamily: 'sans-serif'}}>
          <h1>Something went wrong</h1>
          <p>Please refresh the page or check the browser console for details.</p>
        </div>
      )
    }
    return this.props.children
  }
}

const root = document.getElementById('root')
if (!root) {
  throw new Error('Root element not found')
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ErrorBoundary>
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
    </ErrorBoundary>
  </React.StrictMode>,
)
