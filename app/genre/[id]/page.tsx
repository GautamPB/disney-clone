import MoviesCarousel from '@/components/MoviesCarousel'
import { getDiscoverMovies } from '@/lib/getMovies'

type Props = {
    params: {
        id: string
    }
    searchParams: {
        genre: string
    }
}

const Genre = async ({ params: { id }, searchParams: { genre } }: Props) => {
    const movies = await getDiscoverMovies(id)

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
                <h1 className="px-10 font-bold text-6xl">
                    Movies which fall into the genre: {genre}
                </h1>
                {movies.length ? (
                    <MoviesCarousel movies={movies} isVertical={true} />
                ) : (
                    <h1 className="px-10 text-xl font-bold py-5">
                        No results found for '{genre}'
                    </h1>
                )}
            </div>
        </div>
    )
}

export default Genre
