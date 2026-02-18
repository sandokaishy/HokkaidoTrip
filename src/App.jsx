import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import DayDetail from './pages/DayDetail'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-snow flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/day/:dayNumber" element={<DayDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
