import useTheme from "../../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-card hover:opacity-80 transition"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
