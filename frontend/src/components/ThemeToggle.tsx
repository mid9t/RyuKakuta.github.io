import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="relative text-foreground hover:text-primary"
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <div className="relative w-5 h-5">
        <SunIcon 
          className={`absolute h-5 w-5 text-amber-400 transition-all duration-300 ${
            isDark 
              ? "rotate-0 scale-100 opacity-100" 
              : "rotate-90 scale-0 opacity-0"
          }`} 
        />
        <MoonIcon 
          className={`absolute h-5 w-5 text-slate-900 dark:text-slate-100 transition-all duration-300 ${
            isDark 
              ? "-rotate-90 scale-0 opacity-0" 
              : "rotate-0 scale-100 opacity-100"
          }`} 
        />
      </div>
    </Button>
  );
}
