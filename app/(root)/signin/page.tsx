'use client';
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";


const Signin = () => {
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/home')
    }
    return (
        <>
            <div className="signin-bg min-h-screen w-full absolute top-0"></div>
            <div className="absolute top-0 min-h-screen w-full bg-[#fff6ed] opacity-85"></div>
            <main className="relative min-h-screen w-full flex justify-center items-center">
                <div className="signin-container">
                    <div className="signin-content">
                        <h1 className="heading text-4xl ">Sign in</h1>
                        <form onSubmit={handleSubmit} className="signin-form">
                            <input type="text" placeholder="Email" className="signin-input"/>
                            <input type="password" placeholder="Password" className="signin-input"/>
                            <button type="submit" className="w-40 h-12 border-2 mt-2 border-black rounded-lg bg-yp-3 text-2xl">Create</button>
                            <hr className="w-100 h-px bg-[#DDCB92] mt-2.5 border-none"/>
                            <button type="submit" className="flex justify-center items-center gap-3 w-92.5 h-12 bg-yp-3 mt-2 rounded-lg border-2 border-black text-2xl">
                                <Icon icon="basil:google-solid" width="28" height="28" />
                                <span className="mt-0.75">Connect with Google</span>
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Signin