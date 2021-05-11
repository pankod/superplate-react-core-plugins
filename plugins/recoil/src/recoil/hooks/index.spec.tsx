<%_ if (testing === 'testing-library') { _%>
import { renderHook, act } from "testing-library/react-hooks";
<%_ } _%>

<%_ if (testing === 'testing-library') { _%>
import { AllTheProviders } from "test";
<%_ } _%>

import { useCounter } from "./useCounter";

/**
 * This test is provided as an example.
 * You can test your custom recoil hooks and their behaviors,
 * also you can create snapshot tests for your selectors.
 */

<%_ if (testing === 'testing-library') { _%>

describe("Recoil useCounter Hook", () => {
  it("should set initial value to 0", async () => {
    const { result } = renderHook(() => useCounter(), {
      wrapper: AllTheProviders,
    });
    const [count] = result.current;

    expect(count).toEqual(0);
  });

  it("should increment counter by 1", async () => {
    const { result } = renderHook(() => useCounter(), {
      wrapper: AllTheProviders,
    });
    const [_, { increase }] = result.current;

    act(() => {
      increase();
    });

    const [count] = result.current;

    expect(count).toBe(1);
  });

  it("should decrement counter by 1", async () => {
    const { result } = renderHook(() => useCounter(), {
      wrapper: AllTheProviders,
    });
    const [_, { decrease }] = result.current;

    act(() => {
      decrease();
    });

    const [count] = result.current;

    expect(count).toBe(-1);
  });
});  

<%_ } _%>