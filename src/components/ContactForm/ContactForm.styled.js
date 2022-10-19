import styled from 'styled-components';

export const Form = styled.form`
display:flex;
flex-direction: column;

margin-left: auto;
margin-right: auto;
`;

export const ContactFormLabel = styled.label`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 25px;

`;

export const ContactFormInput = styled.input`
padding: 1px 5px;

width: 300px;
height: 30px;
font-size: 14px;

border: 1px solid #EDC7B7;
border-radius: 5px;
outline: none;

transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
    border-color: #2196f3;
    }

`;

export const ContactFormButton = styled.button`
margin-left: auto;
margin-right: auto;
padding: 10px;
width:140px;
border-radius: 8px;
border: 1px solid #EDC7B7;
cursor: pointer;
background-color:  #EEE2DC;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        background-color: #BAB2B5;
    }
`;