import styled, { css } from "styled-components";

export const Paragraph = styled.p`
    line-height: 1.3;

    ${(props) =>
        props.$clamp &&
        css`
            display: -webkit-box;
            -webkit-line-clamp: ${props.$clamp};
            -webkit-box-orient: vertical;
            overflow: hidden;
        `}
`;
