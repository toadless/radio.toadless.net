import { Field } from "formik"

import useMutateDJRole from "@/hooks/mutation/useMutateDJRole"
import GuildForm, { GuildFormProps } from "./GuildForm"
import { Role } from "@/hooks/useGetGuildRoles"

export default function GuildDJRoleForm(props: GuildFormProps & { roles: Role[] }) {
    return (
        <>
            <GuildForm
                title="DJ Role"
                defaultValues={{ prefix: props.config.prefix }}
                onSubmit={async (values) => {
                    await useMutateDJRole(props.id, String(values.djRole))
                }}
            >
                <Field name="djRole" as="select" className="bg-gray-900 rounded-lg outline-none p-2 m-2">
                    <option value={-1}>None</option>

                    {props.roles.map(role => (
                        <option value={role.id} key={role.id}>{role.name}</option>
                    ))}
                </Field>
            </GuildForm>
        </>
    )
}