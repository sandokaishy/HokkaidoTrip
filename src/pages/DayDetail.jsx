import { useParams, Link } from 'react-router-dom'
import SpotCard from '../components/SpotCard'
import itinerary from '../data/itinerary.json'

export default function DayDetail() {
  const { dayNumber } = useParams()
  const dayData = itinerary.days.find((d) => d.day === Number(dayNumber))

  if (!dayData) {
    return (
      <div className="pt-24 text-center min-h-screen">
        <h2 className="text-2xl font-bold text-gray-800">找不到此行程</h2>
        <Link to="/" className="text-hokkaido-blue mt-4 inline-block">
          回到首頁
        </Link>
      </div>
    )
  }

  const prevDay = itinerary.days.find((d) => d.day === dayData.day - 1)
  const nextDay = itinerary.days.find((d) => d.day === dayData.day + 1)

  return (
    <>
      {/* Day Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${dayData.coverImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-sm tracking-[0.2em] uppercase text-white/80 mb-3">
            {dayData.date}
          </p>
          <h1 className="text-4xl md:text-6xl font-black mb-3 drop-shadow-lg">
            {dayData.title}
          </h1>
          <p className="text-lg text-white/90 font-light">
            {dayData.description}
          </p>
        </div>
      </section>

      {/* Spots Timeline */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          今日景點
          <span className="text-sm font-normal text-gray-400 ml-2">
            共 {dayData.spots.length} 站
          </span>
        </h2>

        <div>
          {dayData.spots.map((spot, index) => (
            <SpotCard key={index} spot={spot} index={index} />
          ))}
        </div>
      </section>

      {/* Day Navigation */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="flex justify-between items-center border-t border-gray-200 pt-8">
          {prevDay ? (
            <Link
              to={`/day/${prevDay.day}`}
              className="text-hokkaido-blue hover:text-primary transition-colors no-underline"
            >
              ← {prevDay.date}: {prevDay.title}
            </Link>
          ) : (
            <div />
          )}
          {nextDay ? (
            <Link
              to={`/day/${nextDay.day}`}
              className="text-hokkaido-blue hover:text-primary transition-colors no-underline"
            >
              {nextDay.date}: {nextDay.title} →
            </Link>
          ) : (
            <Link
              to="/"
              className="text-hokkaido-blue hover:text-primary transition-colors no-underline"
            >
              回到行程總覽 →
            </Link>
          )}
        </div>
      </section>
    </>
  )
}
