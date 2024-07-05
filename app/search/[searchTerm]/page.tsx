import MoviesCarousel from '@/components/MoviesCarousel'
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies'
import { notFound } from 'next/navigation'

type Props = {
    params: {
        searchTerm: string
    }
}

const Search = async ({ params: { searchTerm } }: Props) => {
    if (!searchTerm) {
        return notFound
    }

    const termToUse = decodeURI(searchTerm)

    const movies = await getSearchedMovies(termToUse)

    const popularMovies = await getPopularMovies()
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
                <h1 className="text-6xl font-bold px-10">
                    Results for '{termToUse}'
                </h1>
                {movies.length ? (
                    <MoviesCarousel
                        title="Movies"
                        movies={movies}
                        isVertical={true}
                    />
                ) : (
                    <h1 className="px-10 text-xl font-bold py-5">
                        No results found for '{termToUse}'
                    </h1>
                )}
                <MoviesCarousel
                    title="You may also like"
                    movies={popularMovies}
                    isVertical={false}
                />
            </div>
        </div>
    )
}

export default Search
