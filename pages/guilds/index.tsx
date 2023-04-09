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

  return (
    <>
      <Header />
      <GuildMenu>
        {guilds.mutualGuilds!.map(guild => <GuildItem guild={guild} key={guild.id} />)}
        {guilds.individualGuilds!.map(guild => <GuildItem guild={guild} key={guild.id} />)}
      </GuildMenu >
    </>
  )
}