import Link from "next/link"
import { usePathname } from 'next/navigation'
import { HomeIcon, UserGroupIcon, CalendarIcon, DocumentDuplicateIcon, FolderIcon } from '@heroicons/react/24/solid'

export default function SidebarItem({
    Name,
    Title,
    OnClick,
    Href,
    HandleClick,
    Icon
}: any) {
    const pathname = usePathname()
    return(
        <Link id={`item-${Name}`}
            onClick={OnClick}
            href={Href}
            className={`
                group flex no-underline w-full py-4 pl-4 pr-0 cursor-pointer
                hover:border-solid hover:border-r-4 hover:border-white
                ${pathname === Href ? 'border-solid border-r-4 border-white' : ''}
            `}
        >
            {Icon === 'HomeIcon' ? <HomeIcon className={`size-6 text-slate-500 group-hover:text-slate-100 ${pathname === Href ? 'text-slate-100' : 'text-slate-500'}`} /> :
            Icon === 'UserGroupIcon' ? <UserGroupIcon className={`size-6 text-slate-500 group-hover:text-slate-100 ${pathname === Href ? 'text-slate-100' : 'text-slate-500'}`} /> :
            Icon === 'CalendarIcon' ? <CalendarIcon className={`size-6 text-slate-500 group-hover:text-slate-100 ${pathname === Href ? 'text-slate-100' : 'text-slate-500'}`} /> :
            Icon === 'DocumentDuplicateIcon' ? <DocumentDuplicateIcon className={`size-6 text-slate-500 group-hover:text-slate-100 ${pathname === Href ? 'text-slate-100' : 'text-slate-500'}`} /> :
            Icon === 'FolderIcon' ? <FolderIcon className={`size-6 text-slate-500 group-hover:text-slate-100 ${pathname === Href ? 'text-slate-100' : 'text-slate-500'}`} /> :
            ''}
            
            <span id={`text-${Name}`}
                className={`
                    overflow-hidden transition-all duration-500 ease-in
                    ${HandleClick ? 'w-full ml-6' : 'w-0 ml-0'}
                `}
            >
                {Title}
            </span>
        </Link>
    )
}