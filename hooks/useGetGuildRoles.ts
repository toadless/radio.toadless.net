import useSWR from "swr"

import userDataFetcher from "@/api/userDataFetcher";
import useDoesDataExist from "./useDoesDataExist"

export type GuildRoleData = {
    roles?: Role[],
    loading: boolean
};

export type Role = {
    id: string,
    name: string
}

export default function useGetGuildRoles(id: string): GuildRoleData {
    const { data, isLoading } = useSWR(id ? process.env.NEXT_PUBLIC_API_URL + `/guilds/${id}/roles` : null, id ? userDataFetcher : null);
    const isReady = useDoesDataExist(data, isLoading, id ? true : false);

    if (!isReady) {
        return { loading: true }
    }

    return {
        roles: data?.body.roles,
        loading: isLoading
    }
}