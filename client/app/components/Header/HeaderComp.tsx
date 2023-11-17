import Link from "next/link"
import Image from "next/image"

export default function HeaderComp() {
    const isLoggedIn = true

    return (
        <div className="flex justify-between items-center p-5">
            <div className="font-bold text-lg">
                <Link href='/'>Prompting</Link>
            </div>
            <div className="">
                {
                    isLoggedIn && (
                        <div className="flex space-x-5 items-center">
                            <div className="">
                                <button className="bg-black text-white p-3 px-6 rounded-full">Create new post</button>
                            </div>
                            <div className="">
                                <button className="bg-white text-black p-3 px-6 rounded-full border border-black">Sign out</button>
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
                {!isLoggedIn && (
                    <button className="bg-black text-white p-3 rounded-full w-32">Sign in</button>
                )}
            </div>
        </div>
    )
}