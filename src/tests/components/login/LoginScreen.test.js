import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';

describe('Tests in <LoginScreen/>', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Alex'
        }
    };

    const historyMock = {
        replace: jest.fn()
    };

    test('should render the component', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <LoginScreen history={historyMock}/>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();

    });

    test('should make the dispatch and the navigation to / when login', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <LoginScreen history={historyMock} />
            </AuthContext.Provider>
        );

        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();

        expect(contextValue.dispatch).toHaveBeenCalled();
        expect(historyMock.replace).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath', '/dc');

        handleClick();
        // Checking if the localStorage was called
        expect(historyMock.replace).toHaveBeenCalledWith('/dc');

    });

});
