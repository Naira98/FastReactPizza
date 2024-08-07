import { useRouteError } from 'react-router-dom';
import BackButton from './BackButton';

function Error() {
  const error = useRouteError()

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <BackButton to={-1}>&larr; Go back</BackButton>
    </div>
  );
}

export default Error;
