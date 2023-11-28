import styled from "styled-components";

export const FormText = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    ${(props) => (props.$hidden ? "display: none;" : "")}
`;

export const Label = styled.label`
    font-size: var(--fs-lg);
    font-weight: var(--fw-lg);
    text-transform: uppercase;
`;

export const ErrorMessage = styled.p`
    position: absolute;
    top: 0;
    right: 0;
    font-size: var(--fs-xs);
    font-weight: var(--fw-lg);
    text-transform: uppercase;
    color: red;
`;

export const ErrorIcon = styled.img`
    position: absolute;
    right: 1%;
    top: 47%;
    width: 20px;
    height: 20px;
`;

export const Input = styled.input`
    outline: none;
    font-size: inherit;
    font-family: inherit;
    padding-left: var(--space-4);
    padding-block: var(--space-2);
    border: 1px solid;
    border-radius: var(--space-1);
    border-color: ${(props) =>
        props.$hasError ? "red" : "rgba(0, 0, 0, 0.5)"};
`;
