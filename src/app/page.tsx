import Link from "next/link"
import { Logo } from "@/components/logo"
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6"

export default () => {
    return (
        <>
            <div className="absolute flex justify-between w-[calc(100vw-4rem)] md:w-auto top-12 left-12 md:top-auto md:bottom-12">
                <Logo className="h-12 md:h-24 fill-accent" />
                <div className="flex md:flex-col my-auto md:m-0 pr-8 md:pr-0 md:w-auto md:ml-8 md:justify-between space-x-4 md:space-x-0 md:space-y-2">
                    <Link href="https://github.com/33tm">
                        <FaGithub
                            size={24}
                            className="hover:opacity-80 transition-opacity duration-200"
                        />
                    </Link>
                    <Link href="https://instagram.com/33tmmm">
                        <FaInstagram
                            size={24}
                            className="hover:opacity-80 transition-opacity duration-200"
                        />
                    </Link>
                    <Link href="https://x.com/33tmmm">
                        <FaXTwitter
                            size={24}
                            className="hover:opacity-80 transition-opacity duration-200"
                        />
                    </Link>
                </div>
            </div>
        </>
    )
}