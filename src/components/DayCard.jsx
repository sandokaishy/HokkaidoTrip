import { Link } from 'react-router-dom'

export default function DayCard({ day, date, title, description, coverImage, spotCount }) {
  return (
    <Link
      to={`/day/${day}`}
      className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 no-underline"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary font-bold px-3 py-1 rounded-full text-sm">
          {date}
        </div>
        <div className="absolute bottom-4 right-4 bg-accent text-white text-xs px-3 py-1 rounded-full">
          {spotCount} 個景點
        </div>
      </div>
      <div className="p-5 bg-white">
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-hokkaido-blue transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{description}</p>
      </div>
    </Link>
  )
}
