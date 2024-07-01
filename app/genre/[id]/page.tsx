type Props = {
    params: {
        id: number
    }
    searchParams: {
        genre: string
    }
}

const Genre = ({ params: { id }, searchParams: { genre } }: Props) => {
    return <div>Movies which fall into the genre: {genre}</div>
}

export default Genre
