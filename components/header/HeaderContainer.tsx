import { ReactNode } from "react";

export default function HeaderContainer(props: { className: string, children: ReactNode }) {
    return (
        <>
            <div className={"flex justify-between items-center " + props.className}>
                {props.children}
            </div>
        </>
    )
}