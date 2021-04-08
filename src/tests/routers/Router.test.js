import {mount} from "enzyme";
import {AppRouter} from "../../routers/AppRouter";
import {AuthContext} from "../../auth/AuthContext";


describe('Tests in <AppRouter/>', function () {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    test('should render <LoginScreen/> if the user is not authenticated', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        //console.log(wrapper.html());

        expect(wrapper).toMatchSnapshot();
    })

    test('should render <MarvelScreen/> if it is authenticated', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'alex'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        //console.log(wrapper.html());

        expect(wrapper.find('.navbar').exists()).toBe(true);

    })

});