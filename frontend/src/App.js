import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import ChatBot from "react-simple-chatbot";
import { script } from "./chatbot";
import { stepifyScript } from "./utils";
import SimpleForm from './components/chatbot/SimpleForm'

const Main = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150
  };

  return (
    <div className="App">
      <div style={style}>
        <Main>
          <SimpleForm />
          <ChatBot
                bubbleOptionStyle={{ backgroundColor: "white", color: "black" }}
                steps={stepifyScript(script)}
              />
        </Main>
      </div>
    </div>
  );
}

export default App;