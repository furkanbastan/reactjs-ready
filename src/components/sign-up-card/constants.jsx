export const INPUTS = [
    {
        id: 1,
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
    },
    {
        id: 2,
        name: "password",
        label: "password",
        validations: {
            required: {
                value: true,
                message: "Password Cannot Be Empty!",
            },
        },
        rest: {
            placeholder: "Enter the password",
            type: "password",
        },
    }
];
