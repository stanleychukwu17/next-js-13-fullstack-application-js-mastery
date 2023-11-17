'use client'

import Link from "next/link"
import { useAppSelector } from "../../redux/hook"
import Image from "next/image"


export default function LoggedInCard() {
    const userInfo = useAppSelector(state => state.user)
    // {userInfo.name}

    return (
        <div className="flex space-x-5 items-center">
            <div className="">
                <button className="bg-black text-white p-3 px-6 rounded-full">Create new post</button>
            </div>
            <div className="">
                <Link href="/logout">
                    <button className="bg-white text-black p-3 px-6 rounded-full border border-black">Sign out</button>
                </Link>
            </div>
            <div className="">
                <Link href="/profile">
                    <Image
                        src="/assets/images/profile.png" alt="profile image"
                        className="rounded-full"
                        width={50} height={50}
                    />
                </Link>
            </div>
        </div>
    )
}