import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';


describe('tests in auth Reducer', () => {


    test('should return state by default', () => {

        const state = authReducer({logged: false}, {})
        expect(state).toEqual({logged:false})

    });

    test('should authenticate and set the name of the user', () => {

        const action = {
            type: types.login,
            payload: {name:'Alex'}
        }

        const state = authReducer({logged: false}, action);

        expect(state).toEqual({logged: true, name: 'Alex'})
        

    });

    test('should delete the name of the user and logged on false', () => {

        const action = {
            type: types.logout,
        }

        const state = authReducer({logged: true, name:'Alex'}, action);

        expect(state).toEqual({logged: false})

    })
    


});
