import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

const Text = styled.p`
  padding: 10px;
  border-bottom: 1px solid dodgerblue;
`;

const Line = styled.hr`
  width: 90%;
  margin-bottom: 40px;
`;

const Header = styled.h1`
  width: 100%;
  text-align: center;
  padding: 30px;
`;

const ContainerApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  flex-direction: column;
`;

const MyButton = styled(Button)`
  margin-top: 10px;
`;

const InnerContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px gray;
  &:hover {
    box-shadow: 3px 3px 30px gray;
    cursor: pointer;
  }
`;

function App() {
  const [isReady, setIsReady] = useState(false);
  const [text, setText] = useState("");
  const [name, setName] = useState("get joke");

  const loadData = () => {
    fetch("https://api.icndb.com/jokes/random")
      .then((res) => res.json())
      .then((data) => setText(data.value.joke));
    setIsReady(true);
    setName("next joke");
  };

  return (
    <ContainerApp>
      <Header>Simple joke generator connected to an API</Header>
      <Line />
      <InnerContainer>
        {isReady ? (
          <Text>{text}</Text>
        ) : (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <MyButton onClick={loadData}>{name}</MyButton>
      </InnerContainer>
    </ContainerApp>
  );
}

export default App;
