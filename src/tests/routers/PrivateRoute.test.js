import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from '../../routers/PrivateRoute';

describe('Tests in <PrivateRoute/>', () => {

    const props = {
        location: {
            pathname: '/marvel',
            search: ''
        }
    };

    Storage.prototype.setItem = jest.fn();

    test('should render the component if it is authenticated and save local storage', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => (<span>Listo</span>)}
                    {...props} 
                />
            </MemoryRouter>
        );
        
        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')

    });

    test('should not render the component if is not authenticated', () => {
    
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={false}
                    component={() => (<span>Listo</span>)}
                    {...props} 
                />
            </MemoryRouter>
        );
        
        expect(wrapper.find('span').exists()).toBe(false);

    })
    

});
