import { mount } from 'enzyme';
import DashboardRoutes from "../../routers/DashboardRoutes";
import { AuthContext } from "../../auth/AuthContext";
import { MemoryRouter } from "react-router-dom";


describe('Tests in <DashboardRoutes/>', function () {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    };

    test('Shoud render correctly', function () {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();

    });

});