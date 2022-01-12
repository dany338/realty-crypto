import styled from 'styled-components';
import Colors from '../../styleguide/colors';

export const Container = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0rem 0rem 4.438rem 0rem;
  position: relative;
  bottom: 0px;

  span {
    color: ${Colors.colorTextTitleBlog};
    font-size: 1.0625rem;
    font-weight: normal;
    text-align: center;
    font-family: Roboto, "Helvetica Neue", sans-serif;
  }
`;