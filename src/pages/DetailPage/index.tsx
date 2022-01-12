import { useParams } from 'react-router-dom';
import { Container } from './styled';
import DetailCoin from '../../components/DetailCoin';
import useDetailCoin from '../../hooks/useDetailCoin';

const DetailPage = () => {
  const { id }: number | string | any = useParams();
  const [ selectedBlog ] = useDetailCoin(id);
  if(!selectedBlog && id) return <div data-testid="detail-coin-by-id">ID: ${id}</div>;
  if(!id) return <div data-testid="detail-coin-without-id">without ID</div>;
  if(!selectedBlog) return null;

  return (
    <Container>
      <DetailCoin {...selectedBlog} />
    </Container>
  )
};

export default DetailPage;