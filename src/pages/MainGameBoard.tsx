import { Container } from "@mui/material";
import { Game } from "../components/Game";

const MainGameBoard = () => {
  return (
    <Container style={{ height: "100vh" }}>
      <Game />
    </Container>
  );
};

export default MainGameBoard;
