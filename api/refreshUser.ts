import axios from "axios";

export default async function refreshUser(): Promise<Boolean> {
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/auth/token", {
            "grant_type": "refresh_token",
            "refresh_token": localStorage.getItem("refresh_token")
        });

        // update local storage
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("refresh_token", response.data.refresh_token);

        return true;
    } catch (error: any) {
        return false;
    }
}