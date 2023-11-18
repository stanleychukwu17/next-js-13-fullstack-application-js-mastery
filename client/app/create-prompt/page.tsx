'use client'

import { Metadata } from "next"

import Link from "next/link"
import {useState} from "react";
import axios from 'axios';
import {useForm, SubmitHandler} from "react-hook-form"
import { BACKEND_PORT as backEndPort } from '@/my.config';
import { useAppSelector } from "../redux/hook";


// export const metadata: Metadata = {
//     title: 'Create a new post',
//     description: 'Create a post to help others discover prompts that could make their life easier',
// }

type PromptForRHF = {
    prompt: string
    tag: string
}

export default function CreatePrompt() {
    const [isLoading1, setIsLoading1] = useState<boolean>(false) // used for login
    const userInfo = useAppSelector(state => state.user)

    // setting up React Hook Form to handle the forms below(i.e both the login and registration forms)
    const { register: registerForm, handleSubmit, setValue: formSetValue, formState: {errors:formError} } = useForm<PromptForRHF>()

    const submitForm: SubmitHandler<PromptForRHF> = (data) => {
        const toSend = {...userInfo, ...data}
        // setIsLoading1(true)

        axios.post(`${backEndPort}/prompts/new`, toSend, {headers: {'Content-Type': 'application/json'}})
        .then((res) => {
            console.log(res.data)
            return true
            if(res.data.msg === 'okay') {
                // show successful message

                // waits a little bit so that redux can finish it's thing and they i can redirect to the home page

                // clears all of the input field for login
                Object.keys(data).forEach((item) => {
                    formSetValue(item as "prompt" | "tag", "") // RHF hook used here
                })
            } else {
                // setShowAlert(true)
                // setAlertMsg({'msg_type':res.data.msg, 'msg_dts':res.data.cause})
            }
            setIsLoading1(false)
        })
        .catch((err) => {
            // setShowAlert(true)
            // setAlertMsg({'msg_type':'bad', 'msg_dts':err.message+', please contact the customer support and report this issue'})
            setIsLoading1(false)
        });
    }

    return (
        <section>
            <div className="my-8">
                <h2 className="text-4xl">Create a new post</h2>
                <div className="max-w-xl mt-5">Create and share amazing prompt with the world, and let your imagination run wild with any AI powered platform</div>
            </div>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="">
                    <div className="">
                        <div className="font-semibold">Your AI prompt</div>
                        <div className="mt-2 w-[80%]">
                            <textarea
                                className="border border-black p-3 rounded-md w-2/4"
                                placeholder='Write your post here'
                                {...registerForm("prompt", { required: true })}
                                required
                            />
                            {formError.prompt && <p className="">This field is required!!!</p>}
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="font-semibold">Tag (#product, #webdevelopment, #idea, etc.)</div>
                        <div className="mt-2 w-[80%]">
                            <input
                                type='text' placeholder='#Tag' required
                                className="border border-black p-3 rounded-md w-2/4"
                                {...registerForm("tag", { required: true })}
                            />
                            {formError.tag && <p className="">This field is required!!!</p>}
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex space-x-8 items-center">
                    <div className="">
                        {!isLoading1 && <button type='submit' disabled={false} className='bg-black text-white p-3 px-6 rounded-full'> Create post</button>}
                        {isLoading1 && <p>Loading...</p>}
                        
                    </div>
                    <div className="">
                        <Link href='/' className='bg-white text-black p-3 px-6 rounded-full border border-black'> Cancel </Link>
                    </div>
                </div>
            </form>
        </section>
    )
}