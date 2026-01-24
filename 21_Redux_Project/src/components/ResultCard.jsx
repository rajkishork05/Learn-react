import { memo, useState } from "react"

const ResultCard = memo(({ item, activeTab }) => {
  const [play, setPlay] = useState(false)

  return (
    <div className="relative rounded-xl overflow-hidden 
                    bg-black shadow-md">

      {/* MEDIA */}
      {activeTab === "Photos" ? (
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          className="h-48 w-full object-cover"
        />
      ) : (
        <div
          className="relative cursor-pointer"
          onClick={() => setPlay(true)}
        >
          {!play ? (
            <>
              <img
                src={item.thumbnail}
                alt={item.title}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center 
                               bg-black/40 text-white text-3xl">
                ▶
              </span>
            </>
          ) : (
            <video
              src={item.src}
              controls
              autoPlay
              className="h-48 w-full object-cover"
            />
          )}
        </div>
      )}

      {/* TITLE */}
      <div className="p-3">
        <p className="text-sm text-white line-clamp-2">
          {item.title}
        </p>
      </div>
    </div>
  )
})

export default ResultCard
