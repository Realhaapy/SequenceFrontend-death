import styled from 'styled-components'

export const Main = styled.div`
    background-color: #f2f2f2;
    display: flex;
    flex-flow: column;
    height: 90%;

    .insert {
        display: flex;
    }

    .card {
        flex: 1;
        margin: 1% 7.3% 2% 7.3%;
        padding: 1.5% 1.2% 1% 2.5%;
        border-radius: 9px;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.16);
        border: solid 1px #707070;
        background-color: #c9d1d8;
    }
    .box {
        width: 100%;
        height: 3vh;
        font-size: 1.5vh;
        margin: 1.7% 1% 0% 1.4%;
        padding-left: 1%;
        border: solid 1px #707070;
        background-color: #f2f2f2;
        word-wrap: break-word;
    }
    .cardHead {
        font-size: 2.5vh;
        font-weight: bold;
        line-height: 1.14;
        color: #734124;
        margin-bottom: 0.7%;
    }
    .Forward {
        font-size: 1.7vh;
        margin: 2% 1.6% 0% 1.5%;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: left;
        color: #0d0d0d;
    }
    .Reverse {
        font-size: 1.7vh;
        margin: 2% 2% 1.7% 1.5%;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.12;
        letter-spacing: normal;
        text-align: left;
        color: #0d0d0d;
    }

    .button {
        display: flex;
        font-size: 2vh;
        border: none;
        cursor: pointer;
        margin-left: 96.7%;
        background-color: #c9d1d8;
        margin-left: auto;
    }
`
