import React from "react";
import PasswordGenerator from "./components/PasswordGenerator";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
        <main
          className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center pb-16 p-4"
          role="main">
          <article className="w-full max-w-md space-y-4">
            <h1 className="text-2xl text-slate-200 text-center mb-8">
              Password Generator
            </h1>
            <p className="text-lg text-slate-200 text-center mb-8">
              You'll{" "}
              <strong className="underline underline-offset-4">never</strong>{" "}
              have to use the same password again.
            </p>
            <PasswordGenerator />
          </article>
        </main>
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;
