export const INPUTS = [
    {
        id: 1,
        name: "title",
        label: "Post Title",
        validations: {
            required: {
                value: true,
                message: "Post Title Cannot Be Empty!",
            },
            minLength: {
                value: 5,
                message: "Post Title Min Length Can Be 5",
            },
        },
        rest: {
            //type: 'number'
            placeholder: "Enter the post title.",
        },
    },
    {
        id: 2,
        name: "body",
        label: "Content",
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
            as: "textarea",
            rows: "20",
            placeholder: "Enter the post content.",
        },
    },
];
