import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggler } from './ThemeToggler'
import SearchInput from './SearchInput'

const Header = () => {
    return (
        <header className="flex sticky w-full top-0 z-20 p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900 items-center justify-between">
            <Link href="/" className="mr-10">
                <Image
                    src="https://links.papareact.com/a943ae"
                    alt="Disney Logo"
                    width={120}
                    height={100}
                    className="cursor-pointer dark:invert"
                />
            </Link>

            <div className="flex space-x-2 items-center">
                {/* Genre dropdown */}
                <SearchInput />
                <ThemeToggler />
            </div>
        </header>
    )
}

export default Header
