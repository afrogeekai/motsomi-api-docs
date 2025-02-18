/**
 * @jest-environment jsdom
 */
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, expect, test, afterEach } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import HelloWorld from "../pages/HelloWorld";

describe("Hello world page test", () => {
  afterEach(() => cleanup());

  test("Hello world text exists", () => {
    const router = createMemoryRouter([{ path: "", element: <HelloWorld /> }]);
    render(<RouterProvider router={router} />);

    const paraText = screen.findByTestId("para-text");
    expect(paraText).toBeTruthy();
  });
});
