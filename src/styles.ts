import styled from "styled-components";


export const DivContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: #171333;
`

export const StyledForm = styled.form`
    background-color: white;
    padding: 32px 32px;
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    height: 300px;
`

export const StyledName = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    
`

export const StyledDiv = styled.div`
    padding: 24px;
    background: linear-gradient(90deg, rgba(146,230,219,1) 0%, rgba(146,212,144,1) 49%, rgba(105,134,200,1) 100%);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 12px;
    height: 300px;

    h2 {
        text-align: center;
        font-size: 32px;
        color: #242424;
        font-weight: 600;
    }

    p {
        color: #616161;
        max-width: 300px;
    }

    span {
        font-weight: 700;
        font-size: 32px;
        text-align: start;
        color: #3e3e3e;
    }
`