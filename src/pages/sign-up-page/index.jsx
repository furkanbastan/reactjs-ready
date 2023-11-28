import { SignUpCard } from "@/components/sign-up-card";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

function SignUpPage() {
    const methods = useForm();

    const handleOnSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="sign-up-page">
            <FormProvider {...methods}>
                <SignUpCard onSubmit={methods.handleSubmit(handleOnSubmit)} />
            </FormProvider>
        </div>
    );
}

export { SignUpPage };
