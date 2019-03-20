const ErrorContainer = (props) => {
  switch (props.errorType) {
    case 'formList':
      return 'Opps... cannot get form list';
    case 'student':
      return 'Opps... cannot get student info';
    case 'company':
      return 'Opps... cannot get company info';
    default:
      return 'Opps.. something went wrong.';
  }
};

export default ErrorContainer;
