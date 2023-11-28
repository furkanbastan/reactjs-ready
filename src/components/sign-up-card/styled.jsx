import styled from "styled-components";

export const SignUpCard = styled.div`
    width: min(400px, 90%);
    min-height: 350px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    padding: var(--space-4);
`;

export const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
    padding-block: var(--space-5);
`;
