import { useRouter } from "next/router";

import Loading from "@/components/Loading";
import Header from "@/components/header/Header";
import useGetGuildConfig from "@/hooks/useGetGuildConfig";

export default function Guild() {
    const router = useRouter();
    const { config, loading } = useGetGuildConfig(router.query.id as string);

    if (loading || config == null) {
        return <Loading />
    }

    return (
        <>
            <Header />
            <main>
                <h1>Prefix: {config.prefix}</h1>
            </main>
        </>
    )
}