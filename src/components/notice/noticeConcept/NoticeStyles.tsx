import styled from 'styled-components'

export const NoticeMain = styled.div`
    background-color: #f2f2f2;
    display: flex;
    height: 120vh;

    a {
        text-decoration: none;
        color: #0d0d0d;
    }

    .frame {
        margin: 0 7.4% 5% 7.4%;

        flex: 1;
        display: flex;
        flex-flow: column;
    }

    li {
        list-style-type: none;
    }

    .Introduce {
        flex: 10;
        display: flex;
        font-weight: bold;
        text-align: center;
        align-items: center;
        color: #0d0d0d;
        font-size: 4vh;
        padding-bottom: 16px;
        border-bottom: solid 4px #8e8e8e;
    }

    .photoNotice {
        flex: 40;
        display: flex;
        margin-bottom: 40px;
    }
    .photoNotice li {
        flex: 1;
        display: flex;
        flex-flow: column;
        margin: 16px 32px 0 0;
    }

    .title {
        flex: 1;
        font-size: 2.5vh;
        font-weight: bold;
        margin-bottom: 50px;
        cursor: pointer;
    }

    .image {
        flex: 3;
        display: flex;
        cursor: pointer;
    }

    .image img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }

    .notice {
        flex: 45;
        display: flex;
        flex-flow: column;
    }

    .notice li {
        flex: 1;
        display: flex;
        border-top: solid 2px #e4e4e4;
        padding: 1.3%;
    }

    .date {
        flex: 1;
        font-weight: bold;
        text-align: left;
        color: #0d0d0d;
        font-size: 2vh;
    }

    .text {
        flex: 8;
        font-weight: bold;
        text-align: left;
        color: #0d0d0d;
        font-size: 2vh;
        cursor: pointer;
    }

    .menu {
        flex: 10;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .space {
        flex: 10;
    }

    .menu li {
        flex: 1;

        margin-left: 4px;
        border-radius: 16px;
        text-align: center;
        border: outset 2px #707070;
        font-size: 1.6vh;
        font-weight: bold;
        cursor: pointer;
    }

    .number {
        flex: 10;
        display: flex;
        cursor: pointer;
        font-size: 1.6vh;
        font-weight: bold;
    }
    .number li {
        flex: 1;
        text-align: center;
    }
    .left {
        flex: 18;
        text-align: end;
        align-self: flex-start;
    }
    .right {
        flex: 18;
        text-align: start;
        align-self: baseline;
    }

    button {
        border: 0;
        outline: 0;
        cursor: pointer;
    }
    #aa {
        font-size: 1.8vh;
        font-weight: bold;
    }
`

export const NoticeExaple = styled.div`
    background-color: #f2f2f2;
    display: flex;
    height: 120vh;

    .frame {
        margin: 0 7.4% 5% 7.4%;

        flex: 1;
        display: flex;
        flex-flow: column;
    }

    li {
        list-style-type: none;
    }

    .Introduce {
        flex: 2;
        display: flex;
        font-weight: bold;
        text-align: center;
        align-items: center;
        color: #0d0d0d;
        font-size: 4vh;
        padding-bottom: 16px;
        border-bottom: solid 4px #8e8e8e;
    }

    .writer {
        color: #f25c5c;
        font-weight: bold;
        text-align: right;
        margin: 2% 0 2% 0;
        font-size: 1.8vh;
    }
    .box {
        display: flex;
    }

    .image {
        /* width: 4vw; */
        flex: 1;
    }

    .image img {
        width: 100%;
    }
    .text {
        margin-left: 1%;
        flex: 3;
    }
    .big {
        text-align: left;
        font-weight: bold;
        font-size: 1.8vh;
        margin-bottom: 2%;
    }

    .small {
        text-align: left;
        font-size: 1.6vh;
        margin-bottom: 2%;
        color: #707070;
    }

    .title {
        font-size: 2.6vh;
        font-weight: bold;
        margin: 1% 0 1% 0;
    }
    .notice {
        flex: 26;
        border-bottom: solid 4px #8e8e8e;
    }

    .menu {
        flex: 1;
        display: flex;
        align-items: center;
    }
    .menu li {
        flex: 1;
        margin-left: 4px;
        border-radius: 16px;
        text-align: center;
        border: outset 2px #707070;
        font-size: 1.6vh;
        font-weight: bold;
        cursor: pointer;
    }
    .space {
        flex: 16;
    }
    .list {
        flex: 1;
        display: flex;
        align-items: center;
    }
    #list {
        flex: 1;
        border-radius: 16px;
        text-align: center;
        border: outset 2px #707070;
        font-size: 1.6vh;
        font-weight: bold;
        cursor: pointer;
    }
    button {
        border: 0;
        outline: 0;
        cursor: pointer;
    }

    textarea {
        width: 70vw;
        height: 10vh;
        resize: none;
    }
`

export const AddNoticeMain = styled.div`
    background-color: #f2f2f2;
    display: flex;
    height: 90vh;

    .frame {
        margin: 0 7.4% 5% 7.4%;
        flex: 1;
        display: flex;
        flex-flow: column;
    }

    li {
        list-style-type: none;
    }

    .Introduce {
        flex: 2;
        display: flex;
        font-weight: bold;
        text-align: center;
        align-items: center;
        color: #0d0d0d;
        font-size: 4vh;
        padding-bottom: 16px;
        border-bottom: solid 4px #8e8e8e;
    }
    .noticeboard {
        flex: 16;
        display: flex;
        flex-flow: column;
        padding-top: 50px;
        padding-bottom: 64px;
        border-bottom: solid 4px #8e8e8e;
    }
    .noticeboard li {
        margin-bottom: 16px;
    }

    .inputWriter {
        flex: 1;
        display: flex;
    }

    .inputImg {
        flex: 1;
        display: flex;
    }

    .inputContents {
        flex: 16;
        display: flex;
        font-size: 2vh;
    }

    .inputMenu {
        flex: 2;
        font-size: 2vh;
        font-weight: bold;
    }

    .inputContents {
        flex: 16;
        display: flex;
    }
    .Writer textarea {
        width: 16vw;
        height: 3vh;
        resize: none;
    }
    .contents textarea {
        width: 70vw;
        height: 10vh;
        resize: none;
    }

    .menu {
        flex: 1;
        text-align: right;
    }

    .list {
        flex: 1;
        display: flex;
    }
    #update {
        border-radius: 16px;
        text-align: center;
        border: outset 2px #707070;
        font-size: 1.6vh;
        font-weight: bold;
        padding: 2px;
        cursor: pointer;
    }
    #list {
        flex: 1;
        border-radius: 16px;
        text-align: center;
        border: outset 2px #707070;
        font-size: 1.6vh;
        font-weight: bold;
        cursor: pointer;
    }
    .space {
        flex: 13;
    }
`
