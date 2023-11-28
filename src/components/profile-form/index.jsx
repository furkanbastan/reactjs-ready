import { useParams } from "react-router-dom";
import * as S from "./styled";
import { FormText } from "@/components-core/form-text";
import { INPUTS } from "./constants";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components-core/button";
import { getValueOfNaming } from "@/utils/get-value-of-naming";

function ProfileForm({ onSubmit, user }) {
    const { userId } = useParams();
    const methods = useFormContext();

    return (
        <S.ProfileForm as="form" onSubmit={onSubmit}>
            <input
                type="hidden"
                defaultValue={userId}
                {...methods.register("id")}
            />

            {INPUTS.map((item) => (
                <FormText
                    key={item.id}
                    item={item}
                    defaultValue={
                        getValueOfNaming(user, item.name) || ""
                    }
                />
            ))}

            <Button size="md" variant="success" type="submit">
                KAYDET
            </Button>
        </S.ProfileForm>
    );
}

export { ProfileForm };
