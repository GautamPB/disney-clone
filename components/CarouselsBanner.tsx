'use client'

import { Movie } from '@/typings'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import getImagePath from '@/lib/getImagepath'
import Autoplay from 'embla-carousel-autoplay'

type Props = {
    movies: Movie[]
}

Autoplay.globalOptions = { delay: 8000 }

const CarouselsBanner = ({ movies }: Props) => {
    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
        Autoplay(),
    ])

    return (
        <div
            className="overflow-hidden lg:-mt-[6rem] relative cursor-pointer"
            ref={emblaRef}
        >
            <div className="flex">
                {movies.map((movie: Movie) => (
                    <div key={movie.id} className="flex-full min-w-0">
                        <Image
                            key={movie.id}
                            src={getImagePath(movie.backdrop_path, true)}
                            alt={movie.title}
                            width={1920}
                            height={1080}
                        />

                        <div className="top-0 absolute w-full h-full bg-gradient-to-r from-gray-900/90 to-transparent z-20 space-y-5 hidden md:inline pt-40 xl:pt-52 p-10 text-white">
                            <h2 className="text-5xl font-bold max-w-xl z-50">
                                {movie.title}
                            </h2>
                            <p className="max-w-xl line-clamp-3">
                                {movie.overview}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1a1c29]" />
        </div>
    )
}

export default CarouselsBanner
