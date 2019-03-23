import React from 'react';
import PropTypes from 'prop-types';

const EditExpensePage = props => (
  <div>Editing expense {props.match.params.id}</div>
);

EditExpensePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }),
};

export default EditExpensePage;
