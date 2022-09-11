import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./tools/store";
import App from "./App";

test("Renders Application", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getAllByText(/Lab/i)).toBeDefined();
});
