import _ from 'lodash';

function cleanValidationError(error) {
  return _.map(error.details, i => _.pick(i, ['message', 'type']))
}

export default cleanValidationError;
