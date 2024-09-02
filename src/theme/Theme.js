import { createContext, useState } from "react";

export const ThemeContext = createContext('dark'); // Create the context

export function ThemeProvider({ children }) { // Use function declaration with curly braces
  const [theme, setTheme] = useState('light'); // Use state hook

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
