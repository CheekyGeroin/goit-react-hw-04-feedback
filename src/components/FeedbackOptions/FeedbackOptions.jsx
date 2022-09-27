import PropTypes from 'prop-types';
import { List, Item, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <List>
        {options.map(option => {
          return (
            <Item key={option}>
              <Button
                type="module"
                onClick={() => {
                  onLeaveFeedback(option);
                }}
              >
                {option}
              </Button>
            </Item>
          );
        })}
      </List>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
