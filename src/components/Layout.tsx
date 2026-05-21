import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import PreviewBanner from './PreviewBanner'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <PreviewBanner />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
