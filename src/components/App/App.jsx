import React from 'react';
import { nanoid } from 'nanoid';

import {Container} from './App.styled';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export class App extends React.Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const localStorageContacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(localStorageContacts);
    if (localStorageContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  formAddContact = data => {
    console.log('formAddContact')
    data.id = nanoid();

    const { contacts } = this.state;
    console.log('contacts',{ contacts })
    const isExistContact = contacts.find(contact => contact.name === data.name);

    isExistContact
    ? alert(`${data.name} is already in contacts`)
    : this.setState(prevState => ({
          contacts: [...prevState.contacts, data],
        }))
  }

  onInputChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };


  filtrFormChange = () => {
    const { contacts, filter } = this.state;
    const filtrToLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtrToLowerCase)
    );
      
  }

  onDeleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => idContact !== contact.id),
    }));
    }
  

  render() {
  const { filter } = this.state;
  const filteredContacts = this.filtrFormChange();

  return (

    <Container>

      <Section title="Phonebook">
        <ContactForm onSubmit = {this.formAddContact}  />
      </Section>

      <Section title="Contacts">
        <Filter filter={filter} onChange={this.onInputChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </Section>

    </Container>

    )
}}