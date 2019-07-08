import * as React from 'react';
import styled from "styled-components";

const AppStyled = styled.div`
    text-align: center;
    
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
      height: 80px;
    }
    
    .App-header {
      background-color: #222;
      height: 150px;
      padding: 20px;
      color: white;
    }
    
    .App-title {
      font-size: 1.5rem;
    }
    
    .App-intro {
      font-size: 1.6rem;
    }
    
    @keyframes App-logo-spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
`;

class App extends React.Component {
  public render() {
    return (
      <AppStyled>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </AppStyled>
    );
  }
}

export default App;
