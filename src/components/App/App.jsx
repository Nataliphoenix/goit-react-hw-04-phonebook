import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const formAddContact = data => {
    data.id = nanoid();

    const isExistContact = contacts.find(contact => contact.name === data.name);

    isExistContact
      ? alert(`${data.name} is already in contacts`)
      : setContacts([...contacts, data]);
  };

  const onInputChange = e => {
    setFilter(e.currentTarget.value);
  };

  const filtrFormChange = () => {
    const filtrToLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtrToLowerCase)
    );
  };

  const onDeleteContact = idContact => {
    setContacts(contacts =>
      contacts.filter(contact => idContact !== contact.id)
    );
  };

  const filteredContacts = filtrFormChange();

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={formAddContact} />
      </Section>

      <Section title="Contacts">
        <Filter filter={filter} onChange={onInputChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={onDeleteContact}
        />
      </Section>
    </Container>
  );
};
