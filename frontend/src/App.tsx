import React from 'react';
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
import { ThemeProvider } from "./lib/theme-provider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { routes } from './routes';

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router basename="/RyuKakuta.github.io">
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Header />
          <main className="container mx-auto px-4 py-8 flex-1">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
