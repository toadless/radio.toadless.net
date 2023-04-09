import mutateData, { MutationResponse } from "@/api/mutateData";

export default function mutateDJRole(id: string, dj_role: string): Promise<MutationResponse> {
    return mutateData({ endpoint: process.env.NEXT_PUBLIC_API_URL + `/guilds/${id}/dj`, data: { dj_role } });
}