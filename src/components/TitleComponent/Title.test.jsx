import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TitleComponent } from '.';

describe('<TitleComponent />', () => {
    it('should render', () => {
        renderTheme(<TitleComponent>Children</TitleComponent>);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    });
});
