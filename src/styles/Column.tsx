import styled from "styled-components";

interface Props {
  readonly size: number;
}

const Column = styled.div<Props>`
  width: ${(props: Props) => `calc(${props.size} * 10%)`};
  padding: 20px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export default Column;
