import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'> Proposal App</h1>
  </header>
)

const Main = (props) => (
  <div className='game'>

    

  </div>
)

const Side = () => (
  <div className='score'>

      

  </div>
)

class ProposalApp extends Component {
  
  state = {
    
  }



  componentDidMount() {
    
  

  }


      render () {
    return (
      <div className='App-container'>

        <Side />
        <Main />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <ProposalApp />

  </div>
)

export default App

