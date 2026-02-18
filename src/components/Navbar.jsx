import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="text-2xl">❄️</span>
          <span className="text-lg font-bold text-primary tracking-wide">
            北海道旅遊雜誌
          </span>
        </Link>
        {!isHome && (
          <Link
            to="/"
            className="text-sm text-hokkaido-blue hover:text-primary transition-colors no-underline"
          >
            ← 回到行程總覽
          </Link>
        )}
      </div>
    </nav>
  )
}
