import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import Publications from "@/pages/Publications";
import Projects from "@/pages/Projects";
import CV from "@/pages/CV";
import NotFound from "@/pages/not-found";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/lib/theme-provider";
import { useEffect } from "react";

function Router() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // Handle initial navigation
    if (location === "/") {
      setLocation("/RyuKakuta.github.io/");
    }
  }, [location, setLocation]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <Switch>
          <Route path="/RyuKakuta.github.io/" component={Home} />
          <Route path="/RyuKakuta.github.io/publications" component={Publications} />
          <Route path="/RyuKakuta.github.io/projects" component={Projects} />
          <Route path="/RyuKakuta.github.io/cv" component={CV} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
