import { Field } from "formik"

import useMutatePrefix from "@/hooks/mutation/useMutatePrefix"
import GuildForm, { GuildFormProps } from "./GuildForm"

export default function GuildPrefixForm(props: GuildFormProps) {
    return (
        <>
            <GuildForm
                title="Prefix"
                defaultValues={{ prefix: props.config.prefix }}
                onSubmit={async (values) => {
                    await useMutatePrefix(props.id, values.prefix)
                }}
            >
                <Field name="prefix" className="bg-gray-900 rounded-lg outline-none p-2 m-2" />
            </GuildForm>
        </>
    )
}