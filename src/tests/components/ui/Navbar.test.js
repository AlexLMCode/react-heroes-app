import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

describe('Tests in <Navbar/>', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {}, 
        listen: jest.fn(),
        createHref: jest.fn(),
    };

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Alex'
        }
    };

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    });


    test('should render the component', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text()).toBe(contextValue.user.name);

    });

    test('should call the loggedOut() and use history()', () => {

        wrapper.find('.btn').prop('onClick')();//We use the parentheses to execute the function that gets called when we click the button

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout,
            // payload: {
            //     ...contextValue.user
            // }
        });

        expect(historyMock.replace).toHaveBeenCalledWith('/login')

    });


});
