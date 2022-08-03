import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Pruebas en el useCounter", () => {
  test("Debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, sustract, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(sustract).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("Debe de generar el counter con el valor inicial de 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test("Debe de incrementar el contador", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(13);
  });

  test("Debe de restar el contador", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, sustract } = result.current;

    act(() => {
      sustract();
      sustract(2);
    });

    expect(result.current.counter).toBe(7);
  });

  test("Debe de reestablecer el contador", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, reset } = result.current;

    act(() => {
      reset();
    });

    expect(result.current.counter).toBe(10);
  });
});
