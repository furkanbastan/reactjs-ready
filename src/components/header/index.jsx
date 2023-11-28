import React from "react";
import * as S from "./styled";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "./constants";

function Header() {
    const location = useLocation();

    return (
        <S.Header>
            <Link to="/">
                <S.HeaderIcon src="/assets/icons/header-icon.svg" />
            </Link>
            <S.HeaderNav>
                {NAV_ITEMS.map((item) => (
                    <Link key={item.id} to={item.href}>
                        <S.NavItem $active={location.pathname === item.href}>
                            {item.title}
                        </S.NavItem>
                    </Link>
                ))}
            </S.HeaderNav>
        </S.Header>
    );
}

export { Header };
