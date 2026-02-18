const typeColors = {
  '景點': 'bg-hokkaido-blue text-white',
  '美食': 'bg-accent text-white',
  '住宿': 'bg-emerald-600 text-white',
}

export default function SpotCard({ spot, index }) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${spot.lat},${spot.lng}`

  return (
    <div className="flex gap-4 md:gap-8 group">
      {/* Timeline */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-12 h-12 rounded-full bg-hokkaido-blue text-white flex items-center justify-center font-bold text-sm shadow-md">
          {spot.time}
        </div>
        {<div className="w-0.5 flex-1 bg-gray-200 mt-2" />}
      </div>

      {/* Card */}
      <div className="flex-1 mb-8 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white">
        <div className="md:flex">
          <div className="md:w-64 h-48 md:h-auto overflow-hidden shrink-0">
            <img
              src={spot.image}
              alt={spot.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5 flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${typeColors[spot.type] || 'bg-gray-200 text-gray-700'}`}>
                  {spot.type}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {spot.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {spot.description}
              </p>
            </div>
            <div className="mt-4">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-hokkaido-blue hover:text-primary font-medium transition-colors no-underline"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                在 Google Maps 中查看
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
