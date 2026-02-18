import HeroSection from '../components/HeroSection'
import DayCard from '../components/DayCard'
import itinerary from '../data/itinerary.json'

export default function Home() {
  return (
    <>
      <HeroSection
        title={itinerary.tripTitle}
        subtitle={itinerary.subtitle}
        duration={itinerary.duration}
        image={itinerary.heroImage}
      />

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">行程總覽</h2>
          <p className="text-gray-500 mt-2">點擊卡片查看每日詳細行程</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itinerary.days.map((day) => (
            <DayCard
              key={day.day}
              day={day.day}
              date={day.date}
              title={day.title}
              description={day.description}
              coverImage={day.coverImage}
              spotCount={day.spots.length}
            />
          ))}
        </div>
      </section>
    </>
  )
}
