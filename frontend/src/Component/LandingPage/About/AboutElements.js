import styled from "styled-components";

export const AboutContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;

    @media screen and (max-width: 1000px){
        height: 1200px;
    }
`

export const AboutWrapper1 = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
    }

`
export const AboutWrapper2 = styled.div`
    max-width: 1000px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1fr ;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
    }
`

export const AboutCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 350px;
    max-width: 600px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer
    }
`

export const AboutIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const AboutH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const AboutH2 = styled.h1`
    font-size: 1rem;
    margin-bottom: 2px;
`

export const AboutP = styled.p`
    font-size: 0.9rem;
    text-align: center;
`