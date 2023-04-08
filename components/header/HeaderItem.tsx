import { ReactNode } from "react";

export default function HeaderItem(props: { items: number, className: string, children: ReactNode }) {
    return (
        <>
            <div className={`flex w-1/${props.items} items-center h-[100%] ` + props.className}>
                {props.children}
            </div>
        </>
    )
}