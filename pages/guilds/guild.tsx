import { useRouter } from "next/router";

import { Field, Form, Formik } from "formik";

import Loading from "@/components/Loading";
import Header from "@/components/header/Header";
import GuildMenu from "@/components/guild/GuildMenu";
import GuildFormItem from "@/components/guild/form/GuildFormItem";

import useGetGuildConfig from "@/hooks/useGetGuildConfig";
import useGetGuildRoles from "@/hooks/useGetGuildRoles";

import useMutatePrefix from "@/hooks/mutation/useMutatePrefix";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Guild() {
    const router = useRouter();

    const guildConfig = useGetGuildConfig(router.query.id as string);
    const guildRoles = useGetGuildRoles(router.query.id as string);

    if (guildConfig.loading || guildRoles.loading ||
        guildConfig.config == null || guildRoles.roles == null) {
        return <Loading />
    }

    return (
        <>
            <Header />
            <GuildMenu>
                <GuildFormItem>
                    <h1 className="text-lg font-medium p-2">Guild Prefix</h1>

                    <Formik
                        initialValues={{ prefix: guildConfig.config.prefix }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(async () => { // Wrap inside timeout to give loading spinner effect, so user knows that the data has been mutated
                                const { success } = await useMutatePrefix(router.query.id as string, values.prefix);

                                console.log(success);

                                setSubmitting(false);
                            }, 1000)
                        }}>
                        {({ isSubmitting }) => (
                            <Form className="p-2">
                                <Field name="prefix" className="bg-gray-900 rounded-lg outline-none p-2 m-2" />
                                <button type="submit" disabled={isSubmitting} className="bg-indigo-700 p-2 rounded-lg m-2">
                                    {!isSubmitting ? null :
                                        <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2 text-white" />
                                    }
                                    Update
                                </button>
                            </Form>
                        )}
                    </Formik>
                </GuildFormItem>
                <GuildFormItem>
                    <h1 className="text-lg font-medium p-2">DJ Role</h1>

                    <Formik
                        initialValues={{ djRole: guildConfig.config.dj_role }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                const { djRole } = values;

                                console.log(djRole)

                                setSubmitting(false);
                            }, 1000)
                        }}>
                        {({ isSubmitting }) => (
                            <Form className="p-2">
                                <Field name="djRole" as="select" className="bg-gray-900 rounded-lg outline-none p-2 m-2">
                                    <option value={-1}>None</option>

                                    {guildRoles.roles?.map(role => (
                                        <option value={role.id} key={role.id}>{role.name}</option>
                                    ))}
                                </Field>

                                <button type="submit" disabled={isSubmitting} className="bg-indigo-700 p-2 rounded-lg m-2">
                                    {!isSubmitting ? null :
                                        <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2 text-white" />
                                    }
                                    Update
                                </button>
                            </Form>
                        )}
                    </Formik>
                </GuildFormItem>
            </GuildMenu >
        </>
    )
}