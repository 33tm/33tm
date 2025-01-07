import Link from "next/link"
import { Logo } from "@/components/logo"
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6"

export default function Page() {
    return (
        <div className="flex flex-col relative h-full">
            <div className="absolute top-8 left-8 right-8 bottom-28 md:left-52 md:bottom-8">
            </div>
            <div className="absolute bottom-8 left-8 right-8 md:right-auto">
                <div className="flex justify-between space-x-6 md:space-x-8">
                    <Logo className="h-12 md:h-24 fill-accent" />
                    <Link href="https://github.com/33tm" className="my-auto">
                        <FaGithub
                            size={24}
                            className="hover:opacity-80 transition-opacity duration-200"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}