import { getDiscoverMovies } from '@/lib/getMovies'
import CarouselsBanner from './CarouselsBanner'

type Props = {
    id?: string
    keywords?: string
}

const CarouselBannerWrapper = async ({ id, keywords }: Props) => {
    const movies = await getDiscoverMovies(id, keywords)

    return (
        <div>
            <CarouselsBanner movies={movies} />
        </div>
    )
}

export default CarouselBannerWrapper
