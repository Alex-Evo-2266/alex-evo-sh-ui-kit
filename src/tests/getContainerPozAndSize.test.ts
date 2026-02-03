import { describe, it, expect, vi, beforeEach } from "vitest";
import { getContainerData, getModalWindowCord } from "../lib/helpers/getContainerPozAndSize";

describe("getContainerData", () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement("div");

    document.body.appendChild(element);

    vi.spyOn(window, "getComputedStyle").mockImplementation(() => {
      return {
        getPropertyValue: (prop: string) => {
          if (prop === "height") return "100px";
          if (prop === "width") return "200px";
          return "0px";
        }
      } as any;
    });

    element.getBoundingClientRect = vi.fn(() => ({
      left: 50,
      top: 80,
      right: 0,
      bottom: 0,
      width: 200,
      height: 100,
      x: 0,
      y: 0,
      toJSON: () => {}
    })) as any;
  });

  it("возвращает undefined, если container=null", () => {
    expect(getContainerData(null)).toBeUndefined();
  });

  it("возвращает объект с правильно рассчитанными значениями", () => {
    const data = getContainerData(element);

    expect(data).toEqual({
      height: 100,
      width: 200,
      left: 50,
      top: 80
    });
  });

  it("корректно парсит px значения", () => {
    const data = getContainerData(element);
    expect(typeof data!.height).toBe("number");
    expect(typeof data!.width).toBe("number");
  });

  it("вызывает window.getComputedStyle ровно один раз", () => {
    vi.clearAllMocks();
    getContainerData(element);
    expect(window.getComputedStyle).toHaveBeenCalledTimes(1);
  });

  it("вызывает getBoundingClientRect у элемента", () => {
    vi.clearAllMocks();
    getContainerData(element);
    expect(element.getBoundingClientRect).toHaveBeenCalledTimes(1);
  });
});


describe("getModalWindowCord", () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

    // mock viewport
    Object.defineProperty(document.documentElement, "clientHeight", {
      value: 600,
      configurable: true
    });

    Object.defineProperty(document.documentElement, "clientWidth", {
      value: 800,
      configurable: true
    });

    // mock computed styles
    vi.spyOn(window, "getComputedStyle").mockImplementation(() => {
      return {
        getPropertyValue: (prop: string) => {
          if (prop === "height") return "200px";
          if (prop === "width") return "300px";
          return "0px";
        }
      } as any;
    });
  });

  it("возвращает исходные координаты, если container = null", () => {
    const result = getModalWindowCord(100, 100, null);

    expect(result).toEqual({ x: 100, y: 100 });
  });

  it("не изменяет координаты, если модалка помещается в viewport", () => {
    const result = getModalWindowCord(100, 100, container);

    expect(result).toEqual({
      x: 100,
      y: 100
    });
  });

  it("корректно сдвигает Y, если окно выходит за нижнюю границу", () => {
    // y + height = 500 + 200 = 700 > 600
    const result = getModalWindowCord(100, 500, container);

    expect(result).toEqual({
      x: 100,
      y: 400 // 500 - (700 - 600)
    });
  });

  it("корректно сдвигает X, если окно выходит за правую границу", () => {
    // x + width = 600 + 300 = 900 > 800
    const result = getModalWindowCord(600, 100, container);

    expect(result).toEqual({
      x: 500, // 600 - (900 - 800)
      y: 100
    });
  });

  it("учитывает marginBottom и marginRight из options", () => {
    const result = getModalWindowCord(600, 500, container, {
      marginBottom: 10,
      marginRight: 20
    });

    // height overflow: 500 + 200 - 600 = 100
    // width overflow: 600 + 300 - 800 = 100

    expect(result).toEqual({
      x: 480, // 600 - 100 - 20
      y: 390  // 500 - 100 - 10
    });
  });

  it("вызывает window.getComputedStyle ровно один раз", () => {
    vi.clearAllMocks();

    getModalWindowCord(100, 100, container);

    expect(window.getComputedStyle).toHaveBeenCalledTimes(1);
  });

  it("корректно парсит px значения в числа", () => {
    const result = getModalWindowCord(100, 100, container);

    expect(typeof result.x).toBe("number");
    expect(typeof result.y).toBe("number");
  });
});