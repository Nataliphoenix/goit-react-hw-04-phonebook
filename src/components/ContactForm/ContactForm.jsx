import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsJournalPlus } from 'react-icons/bs';
import { BsTelephone } from 'react-icons/bs';
import { nanoid } from 'nanoid';
import {
  Form,
  ContactFormInput,
  ContactFormLabel,
  ContactFormButton,
} from 'components/ContactForm/ContactForm.styled';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleAddContacts = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  return (
    <Form onSubmit={handleAddContacts}>
      <ContactFormLabel htmlFor="name">
        Name <BsJournalPlus />
        <ContactFormInput
          type="text"
          name="name"
          id={nameId}
          value={name}
          onChange={handleChangeName}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </ContactFormLabel>
      <ContactFormLabel htmlFor="number">
        Number <BsTelephone />
        <ContactFormInput
          type="tel"
          name="number"
          id={numberId}
          value={number}
          onChange={handleChangeNumber}
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </ContactFormLabel>
      <ContactFormButton type="submit">Add contact</ContactFormButton>
    </Form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
