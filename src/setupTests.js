// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

// jest polyfill for createRange
if (window.document) {
    window.document.createRange = () => ({
        setStart: () => {},
        setEnd: () => {},
        commonAncestorContainer: {
            nodeName: 'BODY',
            ownerDocument: document,
        },
    });
}