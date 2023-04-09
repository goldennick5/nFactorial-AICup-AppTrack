import "./App.scss";
import Container from "./components/container/Container";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <div className="content">
          <Intro />
          <Chat />
        </div>
      </Container>
    </>
  );
}

export default App;
