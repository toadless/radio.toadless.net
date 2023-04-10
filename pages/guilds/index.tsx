import Header from "@/components/header/Header";
import Loading from "@/components/Loading";

import GuildItem from "@/components/guild/GuildItem";
import GuildMenu from "@/components/guild/GuildMenu";

import useGetGuilds from "@/hooks/useGetGuilds";

export default function Guilds() {
  const { guilds, loading } = useGetGuilds();

  if (loading || guilds == null) {
    return <Loading />
  }

  // We dont want to show the guilds that the player
  // is in and has permissions in, but is not a mutual
  // guild

  return (
    <>
      <Header />
      <GuildMenu>
        {guilds.mutualGuilds.length > 0 ? guilds.mutualGuilds!.map(guild => <GuildItem guild={guild} key={guild.id} />) : (
          <div className="flex justify-center items-center border-[1px] border-gray-900 m-2 h-14 w-1/2">
            <h1 className="font-space-grotesk text-xl font-bold text-gray-600">You have no mutual-servers with Radio!</h1>
          </div>
        )}
      </GuildMenu>
    </>
  )
}