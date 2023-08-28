import P from 'prop-types';
import * as Styled from './styles';
import { Brand } from '../Brand';
import { ButtonTable } from '../ButtonTable';

export const Row = ({ dataRow }) => {
    return (
        <Styled.Container>
            <Styled.Cell>
                <Brand brand={dataRow.brand} />
                <p className="column-title">{dataRow.title}</p>
                {dataRow.description && (
                    <p className="columnDescription">{dataRow.description}</p>
                )}
            </Styled.Cell>
            <Styled.Cell className="column-sub">{dataRow.status}</Styled.Cell>
            <Styled.Cell className="column-sub">{dataRow.type}</Styled.Cell>
            <Styled.Cell className="column-sub">
                {dataRow.initial_date}
            </Styled.Cell>
            <Styled.Cell className="column-sub">
                {dataRow.final_date}
            </Styled.Cell>
            <Styled.Cell>
                <ButtonTable link={dataRow.link}>Github</ButtonTable>
            </Styled.Cell>
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
        link: P.string.isRequired,
        brand: P.string.isRequired,
    }).isRequired,
};
