import useSWR from "swr"

import userDataFetcher from "@/api/userDataFetcher";

export type UserData = {
    user?: User,
    loading: boolean
};

export type User = {
    id: number,
    name: string,
    discriminator: string,
    avatar: string
}

export default function useGetUser(): UserData {
    const { data, isLoading } = useSWR(process.env.NEXT_PUBLIC_API_URL + "/users/me", userDataFetcher)

    return {
        user: data?.body,
        loading: isLoading
    }
}