import { ReactNode } from "react";

export default function HeaderText(props: { className?: string, children: ReactNode }) {
    return <p className={"cursor-pointer text-gray-600 hover:text-violet-400 " + props.className}>{props.children}</p>
}