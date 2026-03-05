import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingBookingButton from '../components/FloatingBookingButton'

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-primary-light">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingBookingButton />
    </div>
  )
}
