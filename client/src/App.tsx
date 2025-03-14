import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import Publications from "@/pages/Publications";
import Projects from "@/pages/Projects";
import CV from "@/pages/CV";
import NotFound from "@/pages/not-found";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/lib/theme-provider";

function Router() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/publications" component={Publications} />
          <Route path="/projects" component={Projects} />
          <Route path="/cv" component={CV} />
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
