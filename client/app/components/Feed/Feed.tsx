'use client'
import './Feed.scss'

type EachCardProps = {
    name: string
}

const EachCard = (data: EachCardProps) => {
    return (
        <div className="promptCard my-5">
            HomePage
        </div>

    )
}

export default function Feed() {
    const data : EachCardProps[] = [
        {name:'stanley'}, {name:'stanley'}, {name:'stanley'}, {name:'stanley'}, {name:'stanley'}, {name:'stanley'},
        {name:'stanley'}, {name:'stanley'}, {name:'stanley'}, {name:'stanley'}, {name:'stanley'}, {name:'stanley'},
        {name:'stanley'}, {name:'stanley'}, {name:'stanley'}, {name:'stanley'}, {name:'stanley'}, {name:'stanley'},
    ]
    return (
        <div className="FeedMCvr my-16 flex flex-wrap">
            {data.map((item, index) => {
                return <EachCard {...item} key={index} />
            })}
        </div>
    )
}