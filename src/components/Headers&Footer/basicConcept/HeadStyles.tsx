import styled from 'styled-components'

export const Head = styled.div`
    display: flex;

    .header {
        background-color: #f2f2f2;
        display: flex;
        padding: 1.6% 9% 1.3% 7.3%;
        align-items: center;
        flex: 1;
    }
    #Sequence {
        flex: 1;
        width: 100%;
        cursor: pointer;
    }
    #noting {
        flex: 2 15 auto;
    }
    .menu {
        flex: 1;
        font-size: 2.5vh;
        font-weight: bold;
        text-align: center;
        align-items: center;
        text-shadow: 1.2px 1.2px #5f5f5f;
        cursor: pointer;
        color: #0d0d0d;
        text-decoration: none;
        margin: 16px;
    }
    @media only screen and (max-width: 600px) {
        .menu {
            font-size: 1.5vh;
        }
        #Sequence {
            margin-top: 8px;
        }
    }
`

export const Headhomapage = styled.div`
    .header {
        display: flex;
        padding: 1.6% 9% 1.3% 7.3%;
        align-items: center;
        z-index: 5;
    }

    #homepage {
        z-index: -5;
        position: fixed;
        width: 100%;
        height: 100%;
    }
    #Sequence {
        flex: 1.3;
        width: 40%;

        cursor: pointer;
    }
    #noting {
        flex: 2 15 auto;
    }
    #Login {
        flex: 1;
        font-size: 2.5vh;
        font-weight: bold;
        text-align: left;
        align-items: center;
        text-decoration: none;

        cursor: pointer;
        color: #f2f2f2;
    }
    #Introduce {
        flex: 1;
        font-size: 2.5vh;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
        color: #f2f2f2;
        text-decoration: none;
    }
    #Ask {
        flex: 1;
        font-size: 2.5vh;
        font-weight: bold;
        text-align: right;
        cursor: pointer;
        color: #f2f2f2;
        text-decoration: none;
    }
`
