import {styled} from 'styled-components';

export const AppButton = styled.TouchableOpacity`
  height: 40px;
  width: 80%;
  border-radius: 10px;
  border-width: 2px;
  justify-content: center;
  align-items: center;
  border-color: ${props => props.theme.TITLE_COLOR};
`;
