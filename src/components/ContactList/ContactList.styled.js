import styled from 'styled-components';

export const ContactListItems = styled.ul`
`;

export const ContactListItem = styled.li`
display: flex;
justify-content: space-between;
list-style: none;

    :first-child {
        margin-top:25px;
    }

    :not(:last-child) {
        margin-bottom:15px;
    }
    
`;

export const ContactListButton = styled.button`
padding: 4px 5px;
width: 80px;
border-radius: 4px;
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