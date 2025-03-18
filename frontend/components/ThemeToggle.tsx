import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="text-foreground hover:text-primary"
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5 text-amber-300" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </Button>
  );
}
