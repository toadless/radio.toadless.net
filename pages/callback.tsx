import { useRouter } from "next/router"
import { useEffect } from "react";

import Loading from "@/components/Loading"

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const accessToken = router.query.access_token as string;
    const refreshToken = router.query.refresh_token as string;

    if (accessToken == null || refreshToken == null) {
      window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/authorize`
      return;
    }

    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);

    window.location.href = `${window.location.origin}/guilds`
  }, [router.isReady]);

  return <Loading />
}