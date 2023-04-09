import { Guild } from "@/hooks/useGetGuilds";

export default function GuildItem(props: { guild: Guild }) {
    return (
        <>
            <div className="flex justify-between border-[1px] border-gray-900 m-2 h-14 w-1/2 items-center cursor-pointer" onClick={() => {
                window.location.href = `${window.location.origin}/guilds/${props.guild.id}`
            }}>
                <p className="m-5">{props.guild.name}</p>
                <img src={props.guild.icon} width={60} className="rounded-full cursor-pointer p-2 m-5" />
            </div>
        </>
    )
}