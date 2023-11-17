import Link from "next/link"

export default function LoggedOutCard() {
    return (
        <Link href="/login">
            <button className="bg-black text-white p-3 rounded-full w-52">Sign in or register</button>
        </Link>
    )
}