import MoviesCarousel from '@/components/MoviesCarousel'
import {
    getPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies,
} from '@/lib/getMovies'
import CarouselBannerWrapper from '@/components/CarouselBannerWrapper'

export default async function Home() {
    const upcomingMovies = await getUpcomingMovies()
    const topRatedMovies = await getTopRatedMovies()
    const popularMovies = await getPopularMovies()

    return (
        <main>
            <CarouselBannerWrapper />

            <div className="flex flex-col space-y-2 -mt-16 lg:-mt-40">
                <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
                <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
                <MoviesCarousel movies={popularMovies} title="Popular" />
            </div>
        </main>
    )
}
