import * as S from "./styled";

/**
 *
 * @param {string} size 45(default)
 */

function Loading({ size = 40 }) {
    return (
        <S.LoadingWrapper>
            <S.Loading $size={size} />
        </S.LoadingWrapper>
    );
}

export { Loading };
