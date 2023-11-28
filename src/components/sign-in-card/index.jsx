import { Title } from "@/components-core/title";
import * as S from "./styled";
import { FormText } from "@/components-core/form-text";
import { Button } from "@/components-core/button";
import { useState } from "react";

function SignInCard({ onSubmit }) {
    const [eyeOpen, setEyeOpen] = useState(false);

    const handleOnClickEyeOpen = () => setEyeOpen(!eyeOpen);

    return (
        <S.SignInCard>
            <Title as="h2" weight="lg" align="center">
                Sign In
            </Title>

            <S.SignInForm onSubmit={onSubmit}>
                <FormText
                    item={{
                        name: "username",
                        label: "username",
                        validations: {
                            required: {
                                value: true,
                                message: "Username Cannot Be Empty!",
                            },
                        },
                        rest: {
                            placeholder: "Enter the username.",
                        },
                    }}
                />

                <S.PasswordWrapper>
                    <S.EyeIcon
                        src={`/assets/icons/eye-${
                            eyeOpen ? "open" : "close"
                        }.svg`}
                        onClick={handleOnClickEyeOpen}
                    />
                    <FormText
                        item={{
                            name: "password",
                            label: "password",
                            validations: {
                                required: {
                                    value: true,
                                    message: "Password Cannot Be Empty!",
                                },
                            },
                            rest: {
                                placeholder: "Enter the password.",
                                type: eyeOpen ? "text" : "password",
                            },
                        }}
                    />
                </S.PasswordWrapper>

                <Button type="submit">Sign In</Button>
            </S.SignInForm>
        </S.SignInCard>
    );
}

export { SignInCard };
