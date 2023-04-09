import Loading from "@/components/Loading";
import useGetGuildConfig from "@/hooks/useGetGuildConfig";
import { useRouter } from "next/router"

export default function Guild() {
    const router = useRouter();
    const { config, loading } = useGetGuildConfig(router.query.id as string);

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <main>
                <h1>Hello</h1>
            </main>
        </>
    )
}