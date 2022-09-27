import PropTypes from 'prop-types';

export const Notification = ({ text }) => {
  return <p>{text}</p>;
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
