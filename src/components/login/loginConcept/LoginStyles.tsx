import styled from 'styled-components'

export const LoginMain = styled.div`
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row;
    height: 86%;

    .card {
        font-size: 2vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        width: 40.9%;
        height: 83%;
        margin: 1% 1% 2% 0%;
        padding: 1.5% 1.2% 1% 2.5%;
        border-radius: 9px;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.16);
        border: solid 1px #707070;
        background-color: #c9d1d8;
    }

    .box {
        flex: 1;
        height: 40%;
        width: 100%;
        margin: 5% 40% 14% 0%;
        padding: 4% 6.7% 4% 4%;
        border-radius: 7px;
        border: solid 1px #707070;
        background-color: #f2f2f2;
        font-size: 1.6vh;
    }

    #email {
        margin-top: 11%;
        margin-right: 52.5%;
    }

    #passward {
        margin-right: 47%;
    }
    #sequence {
        width: 55%;
        margin-bottom: 5%;
    }
    .button {
        width: 60%;
        height: 6.5%;
        border-radius: 7px;
        border: solid 1px #707070;
        background-color: #f25c5c;
        font-size: 1.8vh;
        font-weight: bold;
        color: #f2f2f2;
        margin-top: 4.5%;
        cursor: pointer;
    }

    .cardImage {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
        width: 40.9%;
        height: 87%;
        margin: 1% 1% 2% 0%;
        border-radius: 9px;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.16);
        border: solid 1px #707070;
        background-color: #c9d1d8;
    }

    #menusForgot {
        font-size: 2vh;
        font-weight: bold;
        margin: 3% 0% 2% 23%;
        line-height: 1.12;
        color: #734124;
    }
    #menusCreate {
        font-size: 2vh;
        font-weight: bold;
        margin: 1% 1% 2% 31%;
        line-height: 1.12;
        color: #734124;
    }
    @media only screen and (max-width: 600px) {
        .cardImage {
            display: none;
        }
        .card {
            width: 80vw;
        }
    }
`

export const CreateMain = styled.div`
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 86%;

    .card {
        display: flex;
        flex-shrink: 0;
        flex: 0.5;
        flex-flow: column;
        width: 37%;
        height: 81.5%;
        margin: 1%;
        padding: 1%;
        border-radius: 9px;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.16);
        border: solid 1px #707070;
        background-color: #c9d1d8;
    }
    .part1 {
        flex: 1;
        font-size: 2vh;
        flex-flow: row;
        align-items: center;
        margin-left: 29%;
    }
    .box {
        font-size: 1.5vh;
        width: 57%;
        height: 3vh;
        border: solid 1px #707070;
        background-color: #f2f2f2;
        padding: 1%;
        border-radius: 7px;
    }
    .button {
        flex: 0.5;
        margin: 5% 30% 10% 30%;
        background-color: #7f7f7f;
        color: #f2f2f2;
        border-radius: 3%;
        cursor: pointer;
    }
    #create {
        font-size: 5vh;
        margin-top: 5%;
        margin-left: 0%;
        text-align: center;
    }
    @media only screen and (max-width: 600px) {
        .card {
            flex: 1;
        }
    }
`

export const ForgotMain = styled.div`
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 86%;

    .card {
        display: flex;
        flex-shrink: 0;
        flex: 0.5;
        flex-flow: column;
        width: 37%;
        height: 90%;
        margin: 1%;
        padding: 1%;
        border-radius: 9px;
        box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.16);
        border: solid 1px #707070;
        background-color: #c9d1d8;
    }
    .part1 {
        flex: 0.5;
        font-size: 2vh;
        flex-flow: row;
        align-items: center;
        margin-left: 29%;
    }
    .box {
        border-radius: 7px;
        font-size: 1.5vh;
        width: 57%;
        height: 3vh;
        border: solid 1px #707070;
        background-color: #f2f2f2;
        padding: 1%;
    }
    .button {
        flex: 0.3;
        margin: 0% 30% 0 30%;
        background-color: #7f7f7f;
        color: #f2f2f2;
        border-radius: 3%;
        cursor: pointer;
    }
    #create {
        font-size: 5vh;
        margin-top: 5%;
        margin-left: 0%;
        text-align: center;
    }
    #forgot {
        flex: 0.5;
        margin: 0% 15% 0% 15%;
    }

    #changepassword {
        margin: 32px;
    }
    #deleteID {
        margin: 32px;
    }

    @media only screen and (max-width: 600px) {
        .card {
            width: 80vw;
        }
    }
`
