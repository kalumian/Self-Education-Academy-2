import styled from "styled-components";
import { Link } from "react-router-dom";

// Start Fields Component
export const Button_Card = styled(Link)`
  border: 2px solid ${(props) => (props.color ? props.color : "#53a1eb")};
  color: white;
  background-color: ${(props) => (props.color ? props.color : "#53a1eb")};
  font-weight: 600;

  &:hover {
    background-color: #00000000;
    color: ${(props) => (props.color ? props.color : "#000")};
  }
`;
export const Button_Card_Href = styled.a`
  border: 2px solid ${(props) => (props.color ? props.color : "#53a1eb")};
  color: white;
  background-color: ${(props) => (props.color ? props.color : "#53a1eb")};
  font-weight: 600;

  &:hover {
    background-color: #00000000;
    color: ${(props) => (props.color ? props.color : "#000")};
  }
`;

export const Title_field = styled.h5`
  text-decoration: underline ${(props) => (props.color ? props.color : "#53a1eb")};
`; 

export const Border_Card = styled.div`
  border: ${(props) => (props.color ? props.color + '1px solid' : "")};
`;
// End Fields Componen


