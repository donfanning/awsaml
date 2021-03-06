const React = require('react');

const propTypes = {
  msg: React.PropTypes.string.isRequired
};

const Error = function render(props) {
  return (
    <div className='alert alert-danger' role='alert'>
      <span className='glyphicon glyphicon-exclamation-sign' />
      &nbsp; {props.msg}
    </div>
  );
};

Error.propTypes = propTypes;
Error.displayName = 'Error';

module.exports = Error;
