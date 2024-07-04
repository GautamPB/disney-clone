import { Genre, Genres } from '@/typings'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

async function GenreDropdown() {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en'
    const options: RequestInit = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
        next: {
            revalidate: 60 * 60 * 24, // 24 hours
        },
    }

    const response = await fetch(url, options)
    const data = (await response.json()) as Genres

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="text-white justify-center items-center flex">
                Genre
                <ChevronDown className="ml-1" />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {data.genres.map((genre: Genre) => (
                    <div className="w-full" key={genre.id}>
                        <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                            <DropdownMenuItem>{genre.name}</DropdownMenuItem>
                        </Link>
                    </div>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default GenreDropdown
