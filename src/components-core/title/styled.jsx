import styled, { css } from "styled-components";

const handleTitleSize = (component) => {
    switch (component) {
        case "h1":
            return "3em";
        case "h2":
            return "2em;";
        case "h3":
            return "1.5em;";
        case "h4":
            return "1.2em;";
        case "h5":
            return "1em;";
        case "h6":
            return ".8em;";
    }
};

export const Title = styled.h1`
    font-weight: ${(props) => `var(--fw-${props.$weight})`};
    font-size: ${(props) => handleTitleSize(props.$as)};
    text-align: ${(props) => props.$align};
    text-transform: uppercase;

    ${(props) => props.$isHoverable && css`
        &:hover{
            color: var(--dark-opacity);
        }
    `}
`;
