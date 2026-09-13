import { useMemo, useState } from "react";
import { MapPin, Shuffle, Star, ArrowUpRight } from "lucide-react";

const HERO_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Cozy_coffee_shop_corner_%28Unsplash%29.jpg";

const cafes = [
  {
    id: 1,
    name: "Daily Dose",
    distance: "0.8 km",
    rating: 4.7,
    price: "₱₱",
    note: "wifi carried my thesis",
    tags: ["lock in", "wifi good", "quiet"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Classy_coffee_house_%28Unsplash%29.jpg",
    imagePosition: "center",
  },
  {
    id: 2,
    name: "Brew & Bloom",
    distance: "1.2 km",
    rating: 4.5,
    price: "₱",
    note: "pretty enough to stay longer than planned",
    tags: ["date", "cheap", "outdoor"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/Cafe_Interior_with_Coffee.jpg",
    imagePosition: "center 52%",
  },
  {
    id: 3,
    name: "Midnight Mug",
    distance: "1.9 km",
    rating: 4.8,
    price: "₱₱",
    note: "the move when everything else is closed",
    tags: ["late", "cozy", "wifi"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Busy_people_at_a_coffee_shop_%28Unsplash%29.jpg",
    imagePosition: "center",
  },
  {
    id: 4,
    name: "Common Ground",
    distance: "2.3 km",
    rating: 4.6,
    price: "₱₱",
    note: "laptop campers live here",
    tags: ["lock in", "outlets", "quiet"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cb/Empty_coffee_shop_interior_with_wooden_table_and_water_skis.jpg",
    imagePosition: "center",
  },
];

const moods = ["all", "lock in", "date", "cheap", "late"];

export default function App() {
  const [activeMood, setActiveMood] = useState("all");
  const [pickedCafe, setPickedCafe] = useState(null);

  const visibleCafes = useMemo(() => {
    if (activeMood === "all") return cafes;
    return cafes.filter((cafe) => cafe.tags.includes(activeMood));
  }, [activeMood]);

  const pickCafe = () => {
    const source = visibleCafes.length ? visibleCafes : cafes;
    setPickedCafe(source[Math.floor(Math.random() * source.length)]);
  };

  return (
    <main className="min-h-screen bg-[#f3eee7] text-[#251b17]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
        <div>
          <p className="text-xl font-black tracking-[-0.04em]">where2kape</p>
          <p className="mt-1 text-xs text-[#8a7467]">coffee, but make it easier</p>
        </div>

        <button className="text-sm font-semibold underline decoration-[#ba8f73] decoration-2 underline-offset-4">
          about
        </button>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-10 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:pt-16">
        <div className="relative z-10">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#997864]">
            coffee near you
          </p>

          <h1 className="max-w-3xl text-[clamp(3.5rem,7.2vw,7.6rem)] font-black leading-[0.84] tracking-[-0.07em]">
            where are we
            <br />
            getting coffee?
          </h1>

          <p className="mt-8 max-w-md text-base leading-7 text-[#6f5a4d] sm:text-lg">
            no spreadsheets. no twenty-minute group chat. just find a place and go.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="flex items-center gap-2 bg-[#251b17] px-5 py-3 text-sm font-bold text-[#f3eee7] transition hover:-translate-y-0.5">
              <MapPin size={17} />
              use my location
            </button>

            <button
              onClick={pickCafe}
              className="flex items-center gap-2 border border-[#251b17] px-5 py-3 text-sm font-bold transition hover:bg-[#e8ddd2]"
            >
              <Shuffle size={17} />
              pick for me
            </button>
          </div>

          {pickedCafe && (
            <div className="mt-7 max-w-sm -rotate-1 border border-[#251b17]/20 bg-[#ead5c5] p-4 shadow-[5px_5px_0_#251b17]">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#896652]">
                fine. go here.
              </p>
              <p className="mt-1 text-2xl font-black">{pickedCafe.name}</p>
              <p className="mt-2 text-sm text-[#644e42]">
                “{pickedCafe.note}”
              </p>
            </div>
          )}
        </div>

        <div className="relative min-h-[390px] sm:min-h-[470px] lg:min-h-[560px]">
          <div className="absolute left-[2%] top-[5%] h-[78%] w-[82%] rotate-[-4deg] bg-[#d7b39e]" />

          <div className="absolute right-[1%] top-[12%] h-[78%] w-[82%] rotate-[3deg] border border-[#251b17] bg-[#c5caa8]" />

          <figure className="absolute left-[9%] top-[10%] h-[75%] w-[80%] overflow-hidden border border-[#251b17]/60 bg-[#c8a58e] shadow-[8px_8px_0_rgba(37,27,23,0.15)]">
            <img
              src={HERO_IMAGE}
              alt="Cozy coffee shop interior"
              className="h-full w-full object-cover grayscale-[12%] saturate-[0.9]"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#251b17]/55 to-transparent px-5 pb-5 pt-16 text-[#fff8f0]">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] opacity-80">
                featured somewhere
              </p>

              <p className="mt-1 text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                your next coffee spot
              </p>
            </div>
          </figure>

          <div className="absolute bottom-[3%] right-[1%] rotate-3 bg-[#fff7ef] px-4 py-3 text-sm font-bold shadow-[3px_3px_0_#251b17]">
            0.8 km away
          </div>

          <div className="absolute left-[2%] top-[74%] -rotate-6 bg-[#e9d6a8] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] shadow-[2px_2px_0_#251b17]">
            windowside seat &gt; therapy
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-5 border-y border-[#251b17]/20 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#997864]">
              today's mood
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {moods.map((mood) => (
              <button
                key={mood}
                onClick={() => setActiveMood(mood)}
                className={`text-sm font-bold transition ${activeMood === mood
                    ? "underline decoration-[#b67f61] decoration-2 underline-offset-4"
                    : "text-[#7a6559] hover:text-[#251b17]"
                  }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8 lg:px-10">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#997864]">
              near you rn
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-[-0.04em]">
              places worth leaving the house for
            </h2>
          </div>

          <p className="hidden text-sm text-[#836c60] md:block">
            probably.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {visibleCafes.map((cafe, index) => (
            <article
              key={cafe.id}
              className={`group ${index % 2 === 1 ? "md:translate-y-12" : ""}`}
            >
              <div className="relative">
                <div
                  className={`overflow-hidden border border-[#251b17]/20 ${index === 0
                      ? "aspect-[5/4]"
                      : index === 1
                        ? "aspect-[4/5] md:ml-12"
                        : index === 2
                          ? "aspect-[6/5]"
                          : "aspect-[5/4] md:mr-10"
                    }`}
                >
                  <img
                    src={cafe.image}
                    alt={`${cafe.name} café`}
                    loading="lazy"
                    style={{ objectPosition: cafe.imagePosition }}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </div>

                {index === 1 && (
                  <div className="absolute -right-2 top-5 rotate-3 bg-[#d9dda9] px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] shadow-[2px_2px_0_#251b17]">
                    camera eats first
                  </div>
                )}
              </div>

              <div
                className={`pt-7 ${index === 1 ? "md:ml-12" : index === 3 ? "md:mr-10" : ""
                  }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-3xl font-black tracking-[-0.04em]">
                      {cafe.name}
                    </p>
                    <p className="mt-1 text-sm text-[#80695b]">
                      “{cafe.note}”
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-sm font-bold">
                    <Star size={14} fill="currentColor" />
                    {cafe.rating}
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-[#251b17]/15 pt-4">
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {cafe.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold text-[#715c50]">
                        #{tag.replace(" ", "")}
                      </span>
                    ))}
                  </div>

                  <button className="ml-auto flex items-center gap-1 text-sm font-black">
                    peek
                    <ArrowUpRight
                      size={15}
                      className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}