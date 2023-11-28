import { Title } from "@/components-core/title";
import { ProfileForm } from "@/components/profile-form";
import { FormProvider, useForm } from "react-hook-form";

const init = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496",
        },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
    },
};

function ProfileEditPage() {
    const methods = useForm();

    const handleOnSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="profile-edit-page">
            <Title as="h1" weight="lg">
                Profile Edit Page
            </Title>
            <FormProvider {...methods}>
                <ProfileForm
                    user={init}
                    onSubmit={methods.handleSubmit(handleOnSubmit)}
                />
            </FormProvider>
        </div>
    );
}

export { ProfileEditPage };
