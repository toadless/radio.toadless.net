import refreshUser from "./refreshUser"
import fetchData from "./fetchData"

export type RequestData = {
    endpoint: string,
    body: any
}

export type ResponseData = {
    body: any,
    status: number
}

export type RequestResponse = {
    body?: any,
    status?: number
}

export default async function fetcher(endpoint: string, body: any): Promise<RequestResponse> {
    if (localStorage.getItem("access_token") == null ||
        localStorage.getItem("refresh_token") == null) {
        return {};
    }

    const response = await fetchData({ endpoint, body });

    // The user has deauthorized Radio
    // from their account. Redirect to
    // authorize page
    if (response.status == 403) {
        window.location.href = process.env.NEXT_PUBLIC_API_KEY + "/auth/authorize";
        return {};
    }

    if (response.status == 401) {
        if (await refreshUser()) {
            return fetcher(endpoint, body);
        }
    }

    if (response.status != 200) {
        window.location.href = window.location.origin + "/error"
        return {};
    }

    return response;
}