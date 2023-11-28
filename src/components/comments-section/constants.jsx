export const INPUTS = [
    {
        id: 1,
        name: "name",
        label: "Comment Title",
        validations: {
            required: {
                value: true,
                message: "Title Cannot Be Empty!",
            },
            minLength: {
                value: 5,
                message: "Title Min Length Can Be 5",
            },
        },
        rest: {
            //type: 'number'
            placeholder: "Enter the comment title.",
        },
    },
    {
        id: 2,
        name: "email",
        label: "Email",
        validations: {
            required: {
                value: true,
                message: "Email Cannot Be Empty!",
            },
            validate: (value) => {
                return isEmail(value) || "Look like this not an email!";
            },
        },
        rest: {
            //type: 'number'
            placeholder: "exampla@example.com",
        },
    },
    {
        id: 3,
        name: "body",
        label: "Comment Content",
        validations: {
            required: {
                value: true,
                message: "Content Cannot Be Empty!",
            },
            minLength: {
                value: 10,
                message: "Content Min Length Can Be 10",
            },
        },
        rest: {
            //type: 'number'
            placeholder: "Enter the comment content.",
        },
    },
];

const isEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
};
