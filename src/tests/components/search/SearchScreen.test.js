import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Tests in <SearchScreen/>', () => {

    const historyMock = {
        push: jest.fn()
    };

    test('should render with the default values', () => {

        const wrapper = mount(
            <MemoryRouter>
                <Route to="/search" component={SearchScreen} />
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-primary').text()).toBe('Search a Hero');

    });

    test('should show Batman and the input with the value of the query string', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=Batman']}>
                <Route to="/search" component={SearchScreen} />
            </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('Batman');
        expect(wrapper).toMatchSnapshot();

    });

    test('should show an error if there is no hero with that query', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=Batmankjefe']}>
                <Route to="/search" component={SearchScreen} />
            </MemoryRouter>
        );

        expect(wrapper.find('.alert-danger').text()).toBe("There is no a hero with Batmankjefe");

    });

    test('should call the push of history', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=Batmankjefe']}>
                <Route to="/search" component={() => <SearchScreen history={historyMock} />} />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect(historyMock.push).toHaveBeenCalledWith(`?q=batman`)

    });

});
