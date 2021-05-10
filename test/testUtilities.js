// import { ShallowWrapper } from "enzyme";

/**
 * Return  node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} value - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttribute = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
}