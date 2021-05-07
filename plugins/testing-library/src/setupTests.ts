// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import nock from "nock";
import dotenv from "dotenv";
<%_ if (features.indexOf("axios") >= 0) { _%>
  import httpAdapter from "axios/lib/adapters/http";
  import axios from "axios";
  <%_ } _%>
dotenv.config({ path: ".env.test" });

<%_ if (features.indexOf("axios") >= 0) { _%>
  axios.defaults.adapter = httpAdapter;
  <%_ } _%>

afterAll(() => {
  nock.cleanAll();
  nock.restore();
});

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

window.scroll = jest.fn();
window.alert = jest.fn();
