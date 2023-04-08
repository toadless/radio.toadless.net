import axios from "axios";

import type { RequestData, ResponseData } from "./userDataFetcher"

export default async function fetchData(data: RequestData): Promise<ResponseData> {
    const response = await axios.get(data.endpoint, {
        data: data.body,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
        }
    });

    return {
        body: response.data,
        status: response.status
    }
}