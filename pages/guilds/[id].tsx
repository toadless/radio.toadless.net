import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import Loading from "@/components/Loading";
import Header from "@/components/header/Header";
import useGetGuildConfig from "@/hooks/useGetGuildConfig";

export default function Guild(props: { id: string }) {
    const { config, loading } = useGetGuildConfig(props.id);

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

export function getStaticPaths(): GetStaticPathsResult {
    return {
        paths: [],
        fallback: true // catch all routes
    }
}

export function getStaticProps({ params }: GetStaticPropsContext): GetStaticPropsResult<Params> {
    return {
        props: {
            id: params!.id
        }
    }
}