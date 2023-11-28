export const INPUTS = [
    {
        id: 1,
        name: "name",
        label: "Name",
        validations: {
            required: {
                value: true,
                message: "Name Cannot Be Empty!",
            },
            minLength: {
                value: 3,
                message: "Name Min Length Can Be 3",
            },
        },
        rest: {
            placeholder: "John Doe",
        },
    },
    {
        id: 2,
        name: "username",
        label: "Username",
        validations: {
            required: {
                value: true,
                message: "Username Cannot Be Empty!",
            },
            minLength: {
                value: 8,
                message: "Username Min Length Can Be 8",
            },
        },
        rest: {
            placeholder: "john_doe_54",
        },
    },
    {
        id: 3,
        name: "email",
        label: "Email",
        validations: {
            required: {
                value: true,
                message: "Email Cannot Be Empty!",
            },
        },
        rest: {
            placeholder: "johndoe@example.com",
        },
    },
    {
        id: 4,
        name: "phone",
        label: "Phone",
        validations: {
            required: {
                value: true,
                message: "Phone Cannot Be Empty!",
            },
        },
        rest: {
            placeholder: "+0123456789",
        },
    },
    {
        id: 5,
        name: "website",
        label: "Website",
        validations: {
            required: {
                value: true,
                message: "Website Cannot Be Empty!",
            },
        },
        rest: {
            placeholder: "www.example.com",
        },
    },
    {
        id: 6,
        name: "address.city",
        label: "City",
        validations: {
            required: {
                value: true,
                message: "City Cannot Be Empty!",
            },
        },
        rest: {
            placeholder: "Exp: Gwenborough.",
        },
    },
    {
        id: 7,
        name: "address.street",
        label: "Street",
        validations: {
            required: {
                value: true,
                message: "Street Cannot Be Empty!",
            },
        },
        rest: {
            placeholder: "Exp: Kulas Light.",
        },
    },
    {
        id: 8,
        name: "address.suite",
        label: "Street",
        validations: {
            required: {
                value: true,
                message: "Suite Cannot Be Empty!",
            },
        },
        rest: {
            placeholder: "Exp: Apt. 556.",
        },
    },
    {
        id: 9,
        name: "address.zipcode",
        label: "Street",
        validations: {
            required: {
                value: true,
                message: "Zip Code Cannot Be Empty!",
            },
        },
        rest: {
            placeholder: "Exp: 99999-9999",
        },
    },
    {
        id: 10,
        name: "company.name",
        label: "Company Name",
        validations: {
            required: {
                value: true,
                message: "Company Name Cannot Be Empty!",
            },
        },
        rest: {
            placeholder: "Exp: Toyota A.Ş.",
        },
    },
    {
        id: 11,
        name: "company.catchPhrase",
        label: "Company Catch Phrase",
        validations: {
            required: {
                value: true,
                message: "Catch Phrase Cannot Be Empty!",
            },
        },
        rest: {
            placeholder: "Exp: Multi-layered client-server neural-net",
        },
    },
    {
        id: 12,
        name: "company.bs",
        label: "Company Bs",
        validations: {
            required: {
                value: true,
                message: "Bs Cannot Be Empty!",
            },
        },
        rest: {
            placeholder: "Enter the bs.",
        },
    },
    {
        id: 13,
        name: "address.geo.lat",
        label: "GEO LAT",
        validations: {},
        rest: {
            type: "hidden",
            defaultValue: "-37.3159",
        },
    },
    {
        id: 14,
        name: "address.geo.lng",
        label: "GEO LNG",
        validations: {},
        rest: {
            type: "hidden",
            defaultValue: "81.1496",
        },
    },
];
