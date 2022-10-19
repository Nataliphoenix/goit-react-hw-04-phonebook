import {ContactListItems, ContactListItem, ContactListButton} from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
        return(
            <ContactListItems>
              {contacts.length ? (
          <>
            {contacts.map(contact => {
              return (
                <ContactListItem key={contact.id}>
                  <p>
                    <span>{contact.name} :</span>
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
        ) :null }
            </ContactListItems>
        )
    }

    ContactList.propTypes = {
      onDeleteContact: PropTypes.func,
      contacts: PropTypes.arrayOf( PropTypes.shape({
        number: PropTypes.string,
        name: PropTypes.string,
        id: PropTypes.string,
      })).isRequired,
    };