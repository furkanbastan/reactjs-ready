import { SignInCard } from "@/components/sign-in-card";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

function SignInPage() {
    const methods = useForm();

    const handleOnSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="sign-in-page">
            <FormProvider {...methods}>
                <SignInCard onSubmit={methods.handleSubmit(handleOnSubmit)} />
            </FormProvider>
        </div>
    );
}

export { SignInPage };
