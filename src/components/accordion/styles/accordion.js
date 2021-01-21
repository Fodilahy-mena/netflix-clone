import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    border-bottom: 8px solid #222;
`;

export const Frame = styled.div`
    max-width: 1200px;
    margin-bottom: 10px;
`;

export const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`;

export const Item = styled.div`
    color: white;
    margin-bottom: 10px;
    &:first-of-type {
        margin-top: 3rem;
    }
`;
export const Title = styled.h1`
    font-size: 50px;
    line-heigt: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: white;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;
export const Header = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 26px;
    font-weight: normal;
    background: #303030;
    padding: .8em 1.2em .8em 1.2em;
    user-select: none;
    align-items: center;
    width: 100%;

    img {
        filter: brightness(0) invert(1);
        width: 24px;
        @media (max-width: 600px) {
            width: 16px;
        }
    }
    @media (max-width: 600px) {
        font-size: 16px;
    }

`;
export const Body = styled.div`
    box-sizing: border-box;
    font-size: 26px;
    transition: max-height .25es cubic-bezier(.5, 0, 0, .1, 1);
    font-weight: normal;
    line-height: normal;
    background: #303030;
    padding: .8em 1.2em .8em 1.2em;
    user-select: none;
    align-items: center;
    width: 100%;

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`;