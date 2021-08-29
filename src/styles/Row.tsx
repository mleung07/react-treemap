import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export default Row;
