import React from 'react';
import PropTypes from 'prop-types';
import {BsJournalPlus} from "react-icons/bs";
import {BsTelephone} from "react-icons/bs";
import { nanoid } from 'nanoid';
import { Form, ContactFormInput, ContactFormLabel, ContactFormButton } from 'components/ContactForm/ContactForm.styled';

export class ContactForm extends React.Component {

    state = {
        name: '',
        number: ''
      }

      nameId = nanoid();
      numberId = nanoid();

      handleChange = (e) => {
        const {name, value} = e.currentTarget;

        this.setState({
          [name]: value
        })
       
      } 
      
      handleAddContacts = e => {
        e.preventDefault()
        this.props.onSubmit(this.state);
        this.reset()
    }

      reset =() =>{
        this.setState({
          name: '',
          number: ''
        })
      }

    render () {
      const {name, number} = this.state;

        return (
            <Form
            onSubmit={ this.handleAddContacts }
          >
                <ContactFormLabel htmlFor="name">
                  Name <BsJournalPlus/>
                  <ContactFormInput
                    type="text"
                    name="name"
                    id={this.nameId}
                    value={name}
                    onChange={this.handleChange}
                    placeholder='Enter name'
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                  />
                </ContactFormLabel>
                <ContactFormLabel htmlFor="number">
                  Number <BsTelephone/>
                  <ContactFormInput
                    type="tel"
                    name="number"
                    id={this.numberId}
                    value={number}
                    onChange={this.handleChange}
                    placeholder='Enter number'
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                  />
                </ContactFormLabel>
                <ContactFormButton type="submit">Add contact</ContactFormButton>
            </Form>
        )
}
} 

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
};