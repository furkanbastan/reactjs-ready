import { Loading } from "../loading";
import * as S from "./styled";

/**
 *
 * @param {string} variant primary, success, danger, warning değerlerini alabilir. primary default değerdir.
 * @param {string} size md, sm, lg, warning değerlerini alabilir. md default değerdir.
 * @param {boolean} isLoading false, true warning değerlerini alabilir. false default değerdir.
 */

function Button({
    children,
    variant = "primary",
    size = "md",
    isLoading = false,
    ...rest
}) {
    return (
        <S.Button
            $variant={variant}
            $size={size}
            $isLoading={isLoading}
            disabled={isLoading}
            {...rest}
        >
            {isLoading ? <Loading size={20} /> : children}
        </S.Button>
    );
}

export { Button };
