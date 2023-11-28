import styled, { css } from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--dark-opacity);
`;

export const HeaderIcon = styled.img`
    width: 35px;
    height: 35px;
`;

export const HeaderNav = styled.nav`
    display: flex;
    gap: var(--space-5);
`;

export const NavItem = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    
    ${(props) =>
        props.$active &&
        css`
            font-weight: var(--fw-lg);
            border-bottom: 1px solid black;
        `}
`;
