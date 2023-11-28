import styled from "styled-components";

export const PostItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    padding: var(--space-3);
    border: 1px solid;
    border-color: var(--dark-opacity);
    max-width: 80ch;
`;