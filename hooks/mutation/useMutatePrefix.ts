import mutateData, { MutationResponse } from "@/api/mutateData";

export default function mutatePrefix(id: string, prefix: string): Promise<MutationResponse> {
    return mutateData({ endpoint: process.env.NEXT_PUBLIC_API_URL + `/guilds/${id}/prefix`, data: { prefix } });
}