import { ReactNode } from "react";
import { Formik, Form } from "formik";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { GuildConfig } from "@/hooks/useGetGuildConfig";

import GuildFormTitle from "./GuildFormTitle";

export type GuildFormProps = {
    config: GuildConfig,
    id: string
}

export default function GuildForm(props: {
    title: string,
    defaultValues: any,
    onSubmit: (values: any) => void,
    children: ReactNode
}) {
    return (
        <>
            <GuildFormTitle text={props.title} />

            <Formik
                initialValues={props.defaultValues}
                onSubmit={(values, { setSubmitting }) => {
                    props.onSubmit(values)
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        {props.children}

                        <button type="submit" disabled={isSubmitting} className="bg-indigo-700 p-2 rounded-lg m-2">
                            {!isSubmitting ? null :
                                <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2 text-white" />
                            }
                            Update
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}