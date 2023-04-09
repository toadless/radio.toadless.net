import useSWR from "swr"

import userDataFetcher from "@/api/userDataFetcher";
import useDoesDataExist from "./useDoesDataExist"

export type GuildConfigData = {
    config?: GuildConfig,
    loading: boolean
};

export type GuildConfig = {
    prefix: string,
    dj_role: number
}

export default function useGetGuildConfig(id: string): GuildConfigData {
    const { data, isLoading } = useSWR(id ? process.env.NEXT_PUBLIC_API_URL + `/guilds/${id}/config` : null, id ? userDataFetcher : null);
    const isReady = useDoesDataExist(data, isLoading, id ? true : false);

    if (!isReady) {
        return { loading: true }
    }

    return {
        config: data?.body,
        loading: isLoading
    }
}