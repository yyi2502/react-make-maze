import { ThemeProvider, Container } from "@mui/material";
import theme from "./theme/theme";
import Header from "./components/Header";
import Description from "./components/Description";
import MazeContent from "./components/MazeContent";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container sx={{ paddingBottom: "50px" }}>
        <MazeContent />
        <Description />
      </Container>
    </ThemeProvider>
  );
}
