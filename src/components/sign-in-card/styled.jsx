import styled from "styled-components";

export const SignInCard = styled.div`
    width: min(350px, 90%);
    min-height: 400px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    padding: var(--space-4);
`;

export const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
    padding-block: var(--space-5);
`;

export const PasswordWrapper = styled.div`
    position: relative;
`;

export const EyeIcon = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 40%;
    right: 3%;
    cursor: pointer;
    z-index: 10;
`;
