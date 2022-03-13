import { ThemeProvider } from "styled-components";
import { themes } from "./styles/themes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Routes from "./routes";
import { useTheme } from "./providers/theme";
import { useEffect } from "react";

function App() {
  const { theme } = useTheme();
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeProvider theme={themes[theme]}>
      <Header />
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
