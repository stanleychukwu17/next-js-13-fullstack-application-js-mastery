'use client'

export default function HomePage() {
    return (
        <main className="text-center">
            <div className="mt-20 font-extrabold text-7xl leading-tight">
                <p>Discover & share</p>
                <p>Ai powered prompts</p>
            </div>
            <div className="text-2xl py-9 leading-normal">
                <p>Prompting is an open source Ai Prompting tool for modern world to</p>
                <p>discover, create and share creative prompts</p>
            </div>
            <div className="">
                <input
                    className="bg-[#f1f2f6] w-2/4 px-5 py-5 rounded border-[#efeff0] focus:outline-[#bae4e5] focus:bg-[#eff5f7]"
                    type="text" placeholder="Search for a tag or a username"
                />
            </div>
        </main>
    )
}