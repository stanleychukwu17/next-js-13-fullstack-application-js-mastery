'use client'
import axios from "axios";
import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "../../redux/hook";
import { updateUser, userDetailsType } from "../../redux/features/userSlice";
import { BACKEND_PORT as backEndPort } from "@/my.config";
import Link from "next/link"

import LoggedInCard from "./LoggedInCard";
import LoggedOutCard from "./LoggedOutCard";

export default function HeaderComp() {
    const isLoggedIn = true
    const userInfo = useAppSelector(state => state.user)
    const reduxDispatch = useAppDispatch()
    const route = useRouter()

    return (
        <div className="flex justify-between items-center p-5">
            <div className="font-bold text-lg">
                <Link href='/'>Prompting</Link>
            </div>
            <div className="">
                {userInfo.loggedIn === 'no' && <LoggedOutCard />}
                {userInfo.loggedIn === 'yes' && <LoggedInCard />}
            </div>
        </div>
    )
}