import React from 'react'
import Typing from 'react-typing-animation'
import './Home.css'

const Home = () => {

  return (
    <div className="animation-title">
      <Typing> 
        <div>  
          <Typing.Delay ms={700} />
          <span className="title-span">WELCOME TO FULL STACK</span> <br/>
          <Typing.Delay ms={1100}/>
          <span className="title-span gql">GraphQL API </span> 
          <Typing.Backspace count={12} />
          <Typing.Delay ms={900} />
          <span className="title-span node">Node.js </span>  
          <Typing.Backspace count={8} />
          <Typing.Delay ms={900} />
          <span className="title-span apollo">Apollo </span>  
          <Typing.Backspace count={7} /> 
          <Typing.Delay ms={900} />
          <span className="title-span mongodb">MongoDB </span> 
          <Typing.Backspace count={8} />
          <Typing.Delay ms={900} />
          <span className="title-span react">React.js</span> 
        </div>
      </Typing>
    </div>
  )
}


export default Home
