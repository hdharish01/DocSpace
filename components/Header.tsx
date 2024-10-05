import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";


export default function Header({children,className}:HeaderProps){
    return <div className="header">
        <Link href={'/'} className={cn("md:flex-1",className)}>
            <Image 
                src="/assets/icons/newlogo-large.png"
                alt="Logo with name"
                width={120}
                height={32}
                className="hidden md:block"
            />
            <Image 
                src="/assets/icons/newlogo-rounded.png"
                alt="Logo"
                width={32}
                height={32}
                className="mr-2 md:hidden"
            />
        </Link>
        {children}
    </div>
}