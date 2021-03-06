import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import initialState from '../../reducers/initialState';
import * as courseActions from '../../actions/courseActions';

describe('Store', () => {
    it('should handle creating courses', () => {
        // arrange
        const store = createStore(rootReducer, initialState);
        const course = { title: 'Clean Code' };

        // act
        const action = courseActions.createCourseSuccess(course);
        /* here we can test updates, etc... */
        store.dispatch(action);

        // assert
        const actual = store.getState().courses[0];
        expect(course).toEqual(actual);
    });
});
