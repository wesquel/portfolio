import P from 'prop-types';
import * as Styled from './styles';
export const ImageUser = ({ text, srcImg = 'assets/images/perfil.svg' }) => {
    return (
        <Styled.Container>
            <img className="title" src={srcImg} alt={text} />
        </Styled.Container>
    );
};

ImageUser.propTypes = {
    text: P.string.isRequired,
    srcImg: P.string,
};
