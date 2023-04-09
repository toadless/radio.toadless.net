import { ReactNode } from "react";

export default function GuildFormItem(props: { children: ReactNode }) {
    return (
        <>
            <div className="flex flex-col justify-center border-[1px] border-gray-900 m-2 h-48 w-2/5 items-center">
                {props.children}
            </div>
        </>
    )
}