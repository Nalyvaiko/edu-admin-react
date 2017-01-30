import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from '../CourseForm';

function setup(saving) {
    const props = {
        course: {}, saving, errors: {},
        onSave: () => {},
        onChange: () => {}
    };

    const renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm { ...props } />);
    const output = renderer.getRenderOutput();

    return {
        props,
        renderer,
        output
    };
}

describe('CourseForm via React Test Utils', () => {
    it('renders form and h1', () => {
        const { output } = setup();
        expect(output.type).toBe('form');

        const [ h1 ] = output.props.children;
        expect(h1.type).toBe('h1');
    });

    it('save button is labeled "Save" when not saving', () => {
        const { output } = setup(false);
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Save');
    });

    it('save button is labeled "Saving..." when saving', () => {
        const { output } = setup(true);
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Saving...');
    });
});