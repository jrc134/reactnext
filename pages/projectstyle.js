import styled from "styled-components";

export const Title = styled.section`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;

  @media (min-width: 1024px) {
    font-size: 3em;
  }
`;

export const Wrapper = styled.section`
  padding: 4em;
  background: black;
  width: 90%;
  margin: auto;
  @media (min-width: 320px) {
    padding: 2em;
  }
  @media ${(props) => props.th }
`;
