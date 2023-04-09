import useSWR from "swr"

import userDataFetcher from "@/api/userDataFetcher";

export type GuildsData = {
    guilds?: {
        mutualGuilds: Guild[],
        individualGuilds: Guild[],
    },
    loading: boolean
};

export type Guild = {
    id: number,
    name: string,
    discriminator: string,
    icon: string
}

export default function useGetUser(): GuildsData {
    const { data, isLoading } = useSWR(process.env.NEXT_PUBLIC_API_URL + "/users/me/guilds", userDataFetcher)

    return {
        guilds: {
            mutualGuilds: data?.body.mutual_guilds,
            individualGuilds: data?.body.individual_guilds
        },
        loading: isLoading
    }
}