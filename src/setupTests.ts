import "jest-dom/extend-expect";
import "jest-styled-components";
import { cleanup } from "@testing-library/react/";

// localStorageMock
const localStorageMock = (() => {
    let store: any = {};

    return {
        getItem: (key: string) => {
            return store[key] || null;
        },
        setItem: (key: string, value: string) => {
            store[key] = value.toString();
        },
        clear: () => {
            store = {};
        }
    };

})();

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
});


// solution for slick dependencies
// https://stackoverflow.com/questions/41366380/matchmedia-not-present-when-testing-create-react-app-component-which-contain-rea
window.matchMedia = window.matchMedia || (() => {
    return {
        matches : false,
        addListener : () => {
            // add listener
        },
        removeListener: () => {
            // remove listener
        }
    };
});

// https://github.com/facebook/react/releases
// https://github.com/testing-library/react-testing-library/issues/281
// this is just a little hack to silence a warning that we'll get until react
// fixes this: https://github.com/facebook/react/pull/14853
const originalError = console.error;

beforeAll(() => {
    console.error = (...args: any) => {
        if (/Warning.*not wrapped in act/.test(args[0])) {
            return;
        }
        originalError.call(console, ...args);
    };
});

afterAll(() => {
    console.error = originalError;
});

afterEach(cleanup);
