import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PasswordGenerator from "../PasswordGenerator";

describe("PasswordGenerator", () => {
  test("shows loading state while generating", async () => {
    render(<PasswordGenerator />);
    const button = screen.getByRole("button", { name: /generate/i });

    fireEvent.click(button);
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument();
    });
  });

  test("handles keyboard shortcuts", async () => {
    render(<PasswordGenerator />);

    fireEvent.keyDown(window, { key: "Enter", ctrlKey: true });
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument();
    });
  });
});
