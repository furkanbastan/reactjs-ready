import * as S from "./styled";

/**
 *
 * @param {string} clamp false, 1, 2, 3,.. değerlerini alır. false default değerdir.
 */

function Paragraph({ children, clamp = false }) {
    return <S.Paragraph $clamp={clamp}>{children}</S.Paragraph>;
}

export { Paragraph };
