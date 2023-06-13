import {styled} from 'styled-components';

export const Amount = styled.Text`
  color: ${props => props.theme.BUTTON_COLOR};
  line-height: 20;
  text-align: left;
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft : 0)}px;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.BUTTON_COLOR};
  line-height: 20;
  text-align: left;
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft : 0)}px;
`;
