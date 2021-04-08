import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router';
import { HeroeScreen } from '../../../components/heroes/HeroeScreen';

describe('Tests in <HeroScreen/>', () => {

    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    };

    test('should render the component redirect if there is no args in the URL', () => {

        const wrapper = mount(
            <MemoryRouter>
                <HeroeScreen history={historyMock} />
            </MemoryRouter>
        );

        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('should show a hero if the param is present', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-captain']}>
                <Route path="/heroe/:heroeId" component={HeroeScreen} />
            </MemoryRouter>
        );

        expect(wrapper.find('h3').text()).toBe('Captain America');

    });

    test('should return to the previous page with PUSH', () => {

        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-captain']}>
                <Route path="/heroe/:heroeId" component={(props) => <HeroeScreen history={historyMock} />} />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(historyMock.push).toHaveBeenCalledWith('/');
        expect(historyMock.goBack).toHaveBeenCalledTimes(0);

    });

    test('should go to the previous page GOBACK', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-captain']}>
                <Route path="/heroe/:heroeId" component={(props) => <HeroeScreen history={historyMock} />} />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        expect(historyMock.push).toHaveBeenCalledTimes(0);
        expect(historyMock.goBack).toHaveBeenCalled();

    })

    test('should render redirect if the heroId is wrong', () => {
    
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-captainslkenf']}>
                <Route path="/heroe/:heroeId" component={(props) => <HeroeScreen history={historyMock} />} />
            </MemoryRouter>
        );

        expect(wrapper.text()).toBe('');

    })

});
