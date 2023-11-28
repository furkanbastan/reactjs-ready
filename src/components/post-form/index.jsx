import { FormText } from "@/components-core/form-text";
import * as S from "./styled";
import React from "react";
import { INPUTS } from "./constants";
import { Button } from "@/components-core/button";
import { useFormContext } from "react-hook-form";

// burada userId context ten okunacak !!!
function PostForm({ post, onSubmit, isLoading }) {
    const methods = useFormContext();

    return (
        <S.PostForm as="form" onSubmit={methods.handleSubmit(onSubmit)}>
            {post && (
                <input
                    type="hidden"
                    {...methods.register("id")}
                    defaultValue={post.id}
                />
            )}

            <input
                type="hidden"
                {...methods.register("userId")}
                defaultValue="54"
            />

            {INPUTS.map((item) => (
                <FormText
                    key={item.id}
                    item={item}
                    defaultValue={post ? post[item.name] : ""}
                />
            ))}

            <Button
                type="submit"
                variant="success"
                isLoading={isLoading}
            >
                SAVE CHANGES
            </Button>
        </S.PostForm>
    );
}

export { PostForm };
