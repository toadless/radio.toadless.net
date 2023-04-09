import { RequestResponse } from "@/api/userDataFetcher";
import { useState, useEffect } from "react";

// This hook will automatically
// re-route to login page if the
// requested data does not exist
// (user not logged-in). It returns
// a boolean (isReady) which determines
// weather or not to render the page
export default function doesDataExist(data: RequestResponse | undefined, isLoading: boolean, redirect: boolean): boolean {
    const [isReady, setReady] = useState(false);

    useEffect(() => {
        if (isLoading) return;

        if (data != null && data.body != null) {
            setReady(true);
            return;
        }

        if (!redirect) return;
        window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/authorize`;
    }, [isLoading])

    return isReady;
}