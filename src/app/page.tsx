import Link from "next/link"
import { Logo } from "@/components/logo"
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6"

export default () => {
    return (
        <>
            <Logo className="absolute bottom-12 left-12 h-24 fill-[#594545]" />
            <div className="absolute flex flex-col justify-between h-24 bottom-12 left-44 space-y-2">
                <Link className="flex group" href="https://github.com/33tm">
                    <FaGithub size={24} />
                    <p className="pl-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">@33tm</p>
                </Link>
                <Link className="flex group" href="https://instagram.com/33tmmm">
                    <FaInstagram size={24} />
                    <p className="pl-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">@33tmmm</p>
                </Link>
                <Link className="flex group" href="https://x.com/33tmmm">
                    <FaXTwitter size={24} />
                    <p className="pl-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">@33tmmm</p>
                </Link>
            </div>
        </>
    )
}