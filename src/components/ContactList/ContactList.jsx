import {ContactListItems, ContactListItem, ContactListButton} from './ContactList.styled';
import PropTypes from 'prop-types';
import {BsTelephone} from "react-icons/bs";

export const ContactList = ({ contacts, onDeleteContact }) => {
        return(
            <ContactListItems>
              {contacts.length === 0 ? null : (
          <>
            {contacts.map(contact => {
              return (
                <ContactListItem key={contact.id}>
                  <p>
                    <span>{contact.name} : &ensp; <BsTelephone/></span>&ensp;
                    {contact.number}
                  </p>
                  <ContactListButton type="button"
                    onClick={() => {
                        onDeleteContact(contact.id);
                    }}
                  >
                    Delete
                  </ContactListButton>
                </ContactListItem>
              );
            })}
          </>
        )}
            </ContactListItems>
        )
    }

    ContactList.propTypes = {
      onDeleteContact: PropTypes.func,
      contacts: PropTypes.array.isRequired,
    };