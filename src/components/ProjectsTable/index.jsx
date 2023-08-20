/* eslint-disable no-unused-vars */
import P from "prop-types";
import * as Styled from "./styles";
import { Row } from "../Row";
import projetos from "./projetos";

export const ProjectsTable = ({ children }) => {
  return (
    <Styled.Container>
      <Styled.Heading>
        <Styled.Column className="first-column">Projeto</Styled.Column>
        <Styled.Column>Status</Styled.Column>
        <Styled.Column>Tipo</Styled.Column>
        <Styled.Column>Data Inicial</Styled.Column>
        <Styled.Column>Data termino</Styled.Column>
        <Styled.Column></Styled.Column>
      </Styled.Heading>
      <Styled.Content>
        {projetos.map((projeto, index) => {
          return <Row key={index} dataRow={projeto} />;
        })}
      </Styled.Content>
    </Styled.Container>
  );
};

ProjectsTable.propTypes = {
  children: P.node.isRequired,
};
