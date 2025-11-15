import Sidebar from "@/app/components/Sidebar";
import React from "react";

export default function Layout ({ children } : Readonly<{children: React.ReactNode}>) {
    return(
        <main>
            <Sidebar />

            { children }
        </main>
    )
}