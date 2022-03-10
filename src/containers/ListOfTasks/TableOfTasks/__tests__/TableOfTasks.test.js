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
  const mainElement = screen.getByTestId(`table`);
  expect(mainElement).toBeInTheDocument();
});
