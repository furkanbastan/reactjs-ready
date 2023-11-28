import styled from "styled-components";

const handleButtonVariant = (variant) => {
    return `
        background-color: var(--${variant});
        color: white;

        &:hover{
            background-color: var(--${variant}-opacity);
        }
    `;
};

const handleButtonSize = (size) => {
    switch (size) {
        case "md":
            return `
                font-size: var(--fs-md);
                padding-block: calc(var(--space-1) * 1.5);
                padding-inline: var(--space-3);
            `;
        case "sm":
            return `
                font-size: var(--fs-sm);
                padding-inline: calc(var(--space-1) * 1.5);
                padding-block: var(--space-1);
            `;
        case "lg":
            return `
                font-size: var(--fs-lg);
                padding-block: var(--space-2);
                padding-inline: var(--space-3);
            `;
    }
};

const handleIsLoading = (isLoading, variant) => {
    if (isLoading)
        return `
            cursor: not-allowed;
            background-color: var(--${variant}-opacity);
        `;
};

export const Button = styled.button`
    ${(props) => handleButtonVariant(props.$variant)}
    ${(props) => handleButtonSize(props.$size)}
    ${(props) => handleIsLoading(props.$isLoading, props.$variant)}
    border-radius: var(--space-2);
    transition: all 200ms ease;
`;
