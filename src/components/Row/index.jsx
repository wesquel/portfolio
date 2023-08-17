import P from "prop-types";
import * as Styled from "./styles";
import { Brand } from "../Brand";

export const Row = ({ dataRow }) => {
  return (
    <Styled.Container>
      <Styled.Cell>
        <Brand brand="assets/images/logoJava.svg" />
        <p>{dataRow.title}</p>
        {dataRow.description && <p className="columnDescription">{dataRow.description}</p>}
      </Styled.Cell>
      <Styled.Cell>{dataRow.status}</Styled.Cell>
      <Styled.Cell>{dataRow.type}</Styled.Cell>
      <Styled.Cell>{dataRow.initial_date}</Styled.Cell>
      <Styled.Cell>{dataRow.final_date}</Styled.Cell>
      <Styled.Cell></Styled.Cell>
    </Styled.Container>
  );
};

Row.propTypes = {
  dataRow: P.objectOf({
    title: P.string.isRequired,
    description: P.string,
    status: P.string.isRequired,
    type: P.string.isRequired,
    initial_date: P.string.isRequired,
    final_date: P.string.isRequired,
  }).isRequired,
};
