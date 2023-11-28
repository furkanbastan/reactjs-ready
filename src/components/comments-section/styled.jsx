import styled from "styled-components";

export const CommentsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
    width: min(90%, 900px);
    padding: var(--space-4);
`;

export const CommentItem = styled.div``;

export const CommentHeader = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: var(--space-2);
`;

export const UserEmail = styled.p`
    font-weight: var(--fw-lg);
    font-size: var(--fs-xs);
    color: var(--muted);
`;

export const CommentBody = styled.p``;

export const NewComment = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: var(--space-5);
    width: min(550px, 100%);
    padding: var(--space-4);
`;
