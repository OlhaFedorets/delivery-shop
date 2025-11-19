import Link from "next/link";
import Image from "next/image";
import iconLogo from "@/../public/icons-header/icon-logo.png"
import iconText from "@/../public/icons-header/icon-text.png"

const LogoBlock = () => {
    return (
        <Link href='/' className="flex flex-row gap-3 items-center cursor-pointer">
            <div className="relative w-20 h-20">
                <Image
                    src={iconLogo}
                    alt="Mypetshop"
                    fill
                    sizes="100px"/>
            </div>
            <div className="relative hidden md:block w-90 h-20 pt-3">
                <Image
                    src={iconText}
                    alt="Mypetshop"
                    width={480}
                    height={187}
                    quality={100}
                    className="object-contain"
                    unoptimized={false}
                />
            </div>
        </Link>
    )
}

export default LogoBlock
