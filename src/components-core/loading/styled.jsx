import styled from "styled-components";

export const LoadingWrapper = styled.div`
    min-height: 100%;
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Loading = styled.div`
    display: inline-block;
    width: ${(props) => `${props.$size}px`};
    height: ${(props) => `${props.$size}px`};
    border: 2px solid rgba(0, 0, 0, 0.4);
    border-top: white;
    border-radius: 50%;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;

    @keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }

    @-webkit-keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
`;
