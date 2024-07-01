import { notFound } from 'next/navigation'

type Props = {
    params: {
        searchTerm: string
    }
}

const Search = ({ params: { searchTerm } }: Props) => {
    if (!searchTerm) {
        return notFound
    }

    const termToUse = decodeURI(searchTerm)

    // api call to get the searched movies

    // api call to get the popular movies
    return <div>You searched for: '{termToUse}'</div>
}

export default Search
