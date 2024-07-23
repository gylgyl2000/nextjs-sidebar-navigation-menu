"use client"

import { useState } from "react"
import { PowerIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import SidebarItem from "./sidebarItem"
import Icon from '@/app/icon/apple.svg'

export default function Sidebar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [profileClick, setprofileClick] = useState(false)
    const handleProfileClick = () => setprofileClick(!profileClick)
    
    return(
        <div id="container" className="fixed">
            <button
                onClick={() => handleClick()}
                className={`
                    relative size-10 border-none rounded-full mt-2 mr-0 mb-0 ml-2 cursor-pointer bg-slate-800
                    flex justify-center items-center
                    before:content-[''] before:bg-white before:h-0.5 before:w-4 before:absolute before:transition-all before:duration-300 before:ease-in
                    after:content-[''] after:bg-white after:h-0.5 after:w-4 after:absolute after:transition-all after:duration-300 after:ease-in
                    ${click
                        ? 'before:top-[1.5] after:top-[1.2] before:-rotate-45 after:rotate-45'
                        : 'before:top-4 after:top-6 before:rotate-0 after:rotate-0'}
                `}
            >{/* Click */}</button>
            <div id="sidebar-container"
                className="bg-slate-800 w-14 h-[80vh] mt-4 rounded-r-3xl py-4
                    relative flex flex-col items-center justify-between"
                >
                <div id="logo" className="w-10">
                    <Image
                        src={Icon}
                        width={100}
                        height={100}
                        alt="Logo"
                    />
                </div>
                <ul id="slick-bar" className={`
                    bg-slate-800 list-none py-8 top-24 left-0 rounded-r-3xl
                    absolute flex flex-col items-center
                    transition-all duration-500 ease-in
                    ${click ? 'w-48' : 'w-14'}
                `}
                >
                    <SidebarItem
                        Name='home'
                        Title='Accueil'
                        OnClick={() => setClick(false)}
                        Href='/'
                        HandleClick={click}
                        Icon='HomeIcon'
                    />
                    <SidebarItem
                        Name='team'
                        Title='Équipe'
                        OnClick={() => setClick(false)}
                        Href='/team'
                        HandleClick={click}
                        Icon='UserGroupIcon'
                    />
                    <SidebarItem
                        Name='calender'
                        Title='Calendrier'
                        OnClick={() => setClick(false)}
                        Href='/calender'
                        HandleClick={click}
                        Icon='CalendarIcon'
                    />
                    <SidebarItem
                        Name='documents'
                        Title='Documents'
                        OnClick={() => setClick(false)}
                        Href='/documents'
                        HandleClick={click}
                        Icon='DocumentDuplicateIcon'
                    />
                    <SidebarItem
                        Name='projects'
                        Title='Projets'
                        OnClick={() => setClick(false)}
                        Href='/projects'
                        HandleClick={click}
                        Icon='FolderIcon'
                    />
                </ul>
                <div id="profile"
                    className={`
                        h-12 p-0 rounded-3xl bg-slate-800 text-white
                        flex items-center justify-center
                        transition-all duration-300 ease-in
                        ${profileClick ? 'w-56 ml-40' : 'w-12 ml-0'}
                    `}
                >
                    <Image
                        onClick={() => handleProfileClick()}
                        src="https://picsum.photos/200"
                        width={100}
                        height={100}
                        alt="Profile"
                        className="size-10 rounded-full cursor-pointer
                            hover:border-solid hover:border-2 hover:border-slate-500 hover:p-0.5"
                    />
                    <div id="details" className={`justify-between items-center ${profileClick ? 'flex' : 'hidden'}`}>
                        <div id="name" className="py-0 px-4 flex flex-col justify-center items-center">
                            <h4 className="inline-block">
                                Tom&nbsp;Pomme
                            </h4>
                            <a href="/#" className="text-xs no-underline text-slate-500 hover:underline">
                                voir&nbsp;le&nbsp;profil
                            </a>
                        </div>
                        <button id="logout"
                            className="border-none bg-transparent">
                            <PowerIcon className="size-8
                                    text-red-700
                                    transition-all duration-300 ease-in
                                    hover:border-none hover:p-0 hover:opacity-50
                            " />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}