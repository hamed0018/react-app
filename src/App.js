import React from 'react';
import Hello from './hello';
import Timer from './timer'
class App extends React.Component {
    render(){
      return (
        
      <div className='main'>
        <Hello/>
        <Timer/>
    </div>
      )
      }
  }
  export default App