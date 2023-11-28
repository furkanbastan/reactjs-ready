import { useFormContext } from "react-hook-form";
import * as S from "./styled";
import { getValueOfNaming } from "@/utils/get-value-of-naming";

function FormText({ item, ...rest }) {
    const methods = useFormContext();

    return (
        <S.FormText $hidden={item.rest.type === "hidden"}>
            <S.Label>{item.label}</S.Label>
            <S.Input
                type="text"
                $hasError={
                    getValueOfNaming(methods.formState.errors, item.name) ||
                    false
                }
                {...methods.register(item.name, item.validations)}
                {...item.rest}
                {...rest}
            />
            {getValueOfNaming(methods.formState.errors, item.name) && (
                <>
                    <S.ErrorMessage>
                        {
                            getValueOfNaming(
                                methods.formState.errors,
                                item.name
                            ).message
                        }
                    </S.ErrorMessage>
                    <S.ErrorIcon src="/assets/icons/error-icon.svg" />
                </>
            )}
        </S.FormText>
    );
}

export { FormText };
