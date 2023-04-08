import axios from "axios";

export default async function refreshUser(): Promise<Boolean> {
    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/auth/token", {
        data: {
            "grant_type": "refresh_token",
            "refresh_token": localStorage.getItem("refresh_token")
        }
    });

    if (response.status != 200) {
        return false;
    }

    // update local storage
    localStorage.setItem("access_token", response.data.access_token);
    localStorage.setItem("refresh_token", response.data.refresh_token);

    return true;
}