// Implement the new APIs.

const DECORATORS = [];
const CONTROLS = [];

const registerDecorator = (decorator) => {
    DECORATORS.push(decorator);
    return DECORATORS;
};

const registerControl = (control) => {
    CONTROLS.push(control);
    return CONTROLS;
};

// Override the existing initEditor to hook the new APIs into it.
// This works in Wagtail 2.0 but will definitely break in a future release.
const initEditor = window.draftail.initEditor;

const initEditorOverride = (selector, options, currentScript) => {
    const overrides = {
        decorators: DECORATORS,
        controls: CONTROLS,
    };

    const newOptions = Object.assign({}, options, overrides);

    return initEditor(selector, newOptions, currentScript);
};

window.draftail.registerControl = registerControl;
window.draftail.registerDecorator = registerDecorator;
window.draftail.initEditor = initEditorOverride;
