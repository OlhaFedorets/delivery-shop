import Link from "next/link";
import Image from "next/image";

const LogoBlock = () => {
    return (
        <Link href='/' className="flex flex-row gap-3 items-center cursor-pointer">
            <div className="relative w-20 h-20">
                <Image
                    src="/icons-header/icon-logo.png"
                    alt="Mypetshop"
                    fill
                    sizes="100px"/>
            </div>
            <div className="relative hidden md:block w-90 h-20 pt-3">
                <Image
                    src="/icons-header/icon-text.png"
                    alt="Mypetshop"
                    width={480}
                    height={187}
                    priority
                    quality={100}
                    className="object-contain"
                    unoptimized={false}
                />
            </div>
        </Link>
    )
}

export default LogoBlock
