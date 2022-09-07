import { getProviders, signIn, useSession } from "next-auth/react";
import React from 'react';
import { FcGoogle } from "react-icons/fc";

export default function login({ providers }) {
    const {data,session} = useSession();
    // console.log(data,session);

    return (
        <div className="flex items-center justify-center h-screen">
            {
                Object?.values(providers).map((provider) => (
                    <div key={provider.name}>
                        <button className="bg-twitterLightGrey px-5 py-3 rounded-full flex justify-center items-center" onClick={() => signIn(provider?.id)}>
                            <FcGoogle className="w-6 h-6 mr-2" />
                            Sign in with {provider?.name}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: providers ? { providers } : { providers: {} },
    }
}