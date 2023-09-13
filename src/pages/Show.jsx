import { useParams } from 'react-router-dom';

const Show = () => {
  const { showId } = useParams();

  return <div>Show page for {showId}</div>;
};
export default Show;
