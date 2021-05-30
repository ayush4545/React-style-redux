import styled from 'styled-components'
import Btn from './Btn'
export const Button = styled(Btn)`
    width:200px;
    height:50px;
    background-color:${(props) => props.color};
    color:white;
    border-radius:12px;
    margin-left:15px;
    transition:background-color 0.5s ease-in;

    &:hover{
        & label{
            color:violet;
            font-size:12px;
        }

        color:white;
        background-color:black;


    }
`

export const Btnlabel = styled.label`
  font-size:18px;
  color:red;

`



    // export const OrangeButton = styled(Button)`
    //     background-color:orange;
    // `

    // export const RedButton = styled(Button)`
    //     background-color:red;
    // `