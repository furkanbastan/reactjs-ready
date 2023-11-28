import * as S from "./styled";

/**
 * @param {string} as h1, h2, h3, h4, h5, h6 değerlerini alır. h1 default değerdir.
 * @param {string} align start, end, center değerlerini alır. start default değerdir.
 * @param {string} weight sm, md, lg, xl değerlerini alır. md default değerdir.
 * @param {boolean} isHoverable true, false değerlerini alır. false default değerdir.
 */

function Title({
    children,
    as = "h1",
    align = "start",
    weight = "md",
    isHoverable = false,
}) {
    return (
        <S.Title
            as={as}
            $as={as}
            $align={align}
            $weight={weight}
            $isHoverable={isHoverable}
        >
            {children}
        </S.Title>
    );
}

export { Title };
