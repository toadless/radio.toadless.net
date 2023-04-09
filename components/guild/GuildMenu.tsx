import { ReactNode } from "react";

export default function GuildMenu(props: { children: ReactNode }) {
    return (
        <>
            <main className="flex justify-center items-center h-screen font-space-grotesk">
                <div className="flex justify-center flex-col w-screen items-center">
                    {props.children}
                </div>
            </main>
        </>
    )
}