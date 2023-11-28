import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ProfileDetail = styled.div`
    display: flex;
    justify-content: space-between;
    gap: var(--space-10);
`;

export const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
`;

export const PostListSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-4);
`;

export const UserAvatar = styled.img`
    width: 45px;
    height: 45px;
`;

export const NameSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
`;

export const Name = styled.p`
    font-weight: var(--fw-xl);
`;

export const UserName = styled.p`
    font-size: var(--fs-sm);

    &::before {
        content: "＠";
    }
`;

export const InfoSection = styled.div`
    font-size: var(--fs-sm);
    display: flex;
    align-items: flex-end;
    gap: var(--space-1);
`;

export const Icon = styled.img`
    width: 16px;
    height: 16px;
`;

export const Info = styled.p``;

export const Link = styled(NavLink)`
    & > * {
        width: 100%;
    }
`;
