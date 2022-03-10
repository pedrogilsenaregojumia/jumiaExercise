import TableOfTasks from "..";
import { render as rtlRender, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../../redux/createStore";

const render = (component) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

test("should render Table component", () => {
  const history = createMemoryHistory();
  const setEndpoint = jest.fn();

  render(
    <Router history={history}>
      <TableOfTasks setEndpoint={setEndpoint} />
    </Router>
  );

  const mainTable = screen.getByTestId(`table`);
  expect(mainTable).toBeInTheDocument();

  const header = screen.getByTestId("header");
  expect(header).toBeInTheDocument();

  const headerElements = screen.getAllByTestId("head-cell");
  expect(headerElements).toHaveLength(3);
  expect(headerElements[0]).toHaveAttribute("title", "Tasks");
  expect(headerElements[1]).toHaveAttribute("title", "Details");
  expect(headerElements[2]).toHaveAttribute("title", "Category");
});
