import styled from "styled-components";

export const TopBox = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
`

export const HeroesMap = styled.div`
    background-color: yellow;
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;

`
export const HeroCard = styled.div`
    background-color: blue;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
/* 
    @keyframes example {
    from {
        height: 250px;
        width: 200px;
    }
    to {
        height: 350px;
        width: 300px;
    } */
    /* } */
`

export const HeroImage = styled.div`
    background-color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 100%;
    }
`

export const HeroName = styled.div`
    background-color: red;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img{ 
        width: 20px;
    }
`
