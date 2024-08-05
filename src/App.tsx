import styled, {keyframes} from "styled-components";

const Title = styled.h1`
    color: ${props => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
`;

const Emogi = styled.span`
  font-size: 32px;
`;

const Animations = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${Animations} 1s linear infinite;
  justify-content: center;
  align-items: center;
  display: flex;
  ${Emogi}:hover {
    font-size: 98px;
  }
`;

function App() {
    return (
        <Wrapper>
            <Title>Hello</Title>
        </Wrapper>
    );
}

export default App;