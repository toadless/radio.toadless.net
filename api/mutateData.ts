import axios from "axios";

export type MutationResponse = {
    success: boolean
};

type MutationData = {
    endpoint: string,
    data: any
};

export default async function mutateData(data: MutationData): Promise<MutationResponse> {
    try {
        await axios.patch(data.endpoint, data.data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("access_token")
            }
        });

        return { success: true };
    } catch (error) {
        return { success: false };
    }
}