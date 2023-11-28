import { Title } from "@/components-core/title";
import * as S from "./styled";
import { INPUTS } from "./constants";
import { FormText } from "@/components-core/form-text";
import { Button } from "@/components-core/button";
import { useFormContext } from "react-hook-form";

function SignUpCard({ onSubmit }) {
    const methods = useFormContext();
    const password = methods.watch("password", "");

    const validatePasswordAgain = (value) => {
        return password === value || "Passwords Must Be The Same ";
    };

    return (
        <S.SignUpCard>
            <S.SignUpForm onSubmit={onSubmit}>
                <Title as="h2" weight="lg" align="center">
                    Sign Up
                </Title>

                {INPUTS.map((item) => (
                    <FormText key={item.id} item={item} />
                ))}

                <FormText
                    item={{
                        name: "passwordAgain",
                        label: "password again",
                        validations: {
                            required: {
                                value: true,
                                message: "Password Cannot Be Empty!",
                            },
                            validate: validatePasswordAgain,
                        },
                        rest: {
                            placeholder: "Enter the password again.",
                            type: "password",
                        },
                    }}
                />

                <Button type="submit">Sign Up</Button>
            </S.SignUpForm>
        </S.SignUpCard>
    );
}

export { SignUpCard };
