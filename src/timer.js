import React from 'react';
class Timer extends React.Component {
    constructor(){
      super();
      this.state ={
        time : new Date().toLocaleTimeString()
      }
    }
    render(){
      setInterval(() => {
        this.setState({time : new Date().toLocaleTimeString()})
      }, 1000);
      return (
        
      <div>
      
      <h2 className='timer' >
        it is {
          this.state.time
        }
      </h2>
    </div>
      )
      }
  }
  export default Timer