import {styled} from 'styled-components';

export const Container = styled.View`
  flex-grow: 1;
  background-color: ${props => props.theme.BACKGROUND_COLOR};
  align-items: center;
  justify-content: center;
`;
