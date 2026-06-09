import { UserProvider } from "./UserContext";
import { ThemeProvider } from "./ThemeContext";

export default function AppProviders({ children }) {
  return (
    <UserProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </UserProvider>
  );
}