import PropTypes from 'prop-types';

import { SectionTitle, SectionTitleText } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionTitle>
      <SectionTitleText>{title}</SectionTitleText>
      {children}
    </SectionTitle>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};