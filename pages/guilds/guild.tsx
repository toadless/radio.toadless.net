import { useRouter } from "next/router";

import Loading from "@/components/Loading";
import Header from "@/components/header/Header";
import GuildMenu from "@/components/guild/GuildMenu";
import GuildFormItem from "@/components/guild/form/GuildFormItem";

import useGetGuildConfig from "@/hooks/useGetGuildConfig";
import useGetGuildRoles from "@/hooks/useGetGuildRoles";

import GuildPrefixForm from "@/components/guild/form/GuildPrefixForm";
import GuildDJRoleForm from "@/components/guild/form/GuildDJRoleForm";

export default function Guild() {
    const router = useRouter();

    const config = useGetGuildConfig(router.query.id as string);
    const roles = useGetGuildRoles(router.query.id as string);

    if (config.loading || roles.loading ||
        config.config == null || roles.roles == null) {
        return <Loading />
    }

    return (
        <>
            <Header />
            <GuildMenu>
                <GuildFormItem>
                    <GuildPrefixForm id={router.query.id as string} config={config.config} />
                </GuildFormItem>
                <GuildFormItem>
                    <GuildDJRoleForm id={router.query.id as string} config={config.config} roles={roles.roles!} />
                </GuildFormItem>
            </GuildMenu >
        </>
    )
}