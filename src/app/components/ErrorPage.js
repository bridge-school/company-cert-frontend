const ErrorContainer = props => {
  switch (props.errorType) {
    case 'formList':
      return 'Opps... cannot get the form.';
    case 'student':
      return 'Opps... cannot get student info.';
    case 'students':
      return 'Opps... cannot get students list.';
    case 'company':
      return 'Opps... cannot get company info.';
    case 'companies':
      return 'Opps... cannot get companies list.';
    default:
      return 'Opps.. something went wrong.';
  }
};

export default ErrorContainer;
