import React from 'react';
import TextButton from '../TextButton';
import {
  Container,
  Wrapper,
  ContainerNotFound
} from './styled';
import ImageBlogFemale from '../../assets/images/not-found.png';
import { INotFoundProps } from '../../identity';

const NotFound: React.FC<INotFoundProps> = ({ onChangeQuery, typeQuery }) => (
  <Container data-testid="notfound-container">
    <Wrapper>
      <ContainerNotFound image={ImageBlogFemale}>
        <div className="description">
          <span>Uh oh.</span>
          <p>We don't have coins yet, register and add new coins.</p>
          <TextButton width="9.563" type="button" text="Back to safety" onClick={() => onChangeQuery('', typeQuery)} />
        </div>
        <div className="image" />
      </ContainerNotFound>
    </Wrapper>
  </Container>
);

export default NotFound;
