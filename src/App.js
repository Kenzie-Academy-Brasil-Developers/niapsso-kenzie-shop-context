import { ThemeProvider } from "styled-components";
import { themes } from "./styles/themes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Routes from "./routes";
import { useTheme } from "./providers/theme";

function App() {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={themes[theme]}>
      <Header />
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
