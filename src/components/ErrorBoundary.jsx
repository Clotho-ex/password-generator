import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="bg-red-500/10 p-4 rounded-lg">
          <h2 className="text-red-500">Something went wrong</h2>
          <button
            onClick={() => window.location.reload()}
            className="text-slate-200 underline mt-2">
            Reload page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
