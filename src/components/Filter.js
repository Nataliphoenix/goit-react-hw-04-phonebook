import PropTypes from 'prop-types';
import {ContactFormInput} from 'components/ContactForm/ContactForm.styled'

export const Filter = ({ filter, onChange }) => {
            return (
              <ContactFormInput
                type="text"
                name="filter"
                value={filter}
                onChange={onChange}
                placeholder="Enter name for Search"
              />
            );
          }; 


  Filter.propTypes = {
    onChange: PropTypes.func,
    filter: PropTypes.string.isRequired,
  };
    
