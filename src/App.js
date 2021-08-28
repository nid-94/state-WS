import './App.css';
import myimg from "./nid.jpg"
import React, { Component } from 'react'
import { Card,ListGroup,ListGroupItem,Button } from 'react-bootstrap';

export class App extends Component {
  
  state={
    status:false,
    fullName:"ARFAoui Nidhal",
    bio:"Hard-worker , Well motivated",
    imgSrc:myimg, 
    profession:"Engineer",
    count:0
  };
  

  buttonShow=()=>{
    this.setState({status:true});
  }
  render() {
    
    return (
      <div className="App">
        <b><h1>Press this button to know who am i !</h1></b>
        
        <Button variant="primary" size="lg" onClick={this.buttonShow}>Show</Button>
        <p/>
        {(this.state.status===true) ?(
          <div className="cart">
          <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={this.state.imgSrc} style={{width:300,heigth:400,margin:"10px", borderRadius:"10%"}} />
  
  <ListGroup className="list-group-flush">
  <ListGroupItem><b><p>TIMER</p></b>{this.state.count}</ListGroupItem>
    <ListGroupItem><b><p>NAME </p></b>{this.state.fullName}</ListGroupItem>
    <ListGroupItem><b><p> BIO</p></b>{this.state.bio}</ListGroupItem>
    <ListGroupItem><b><p>PROFESSION</p></b>{this.state.profession}</ListGroupItem>
   
  </ListGroup>

</Card>
          </div>
          
        ):""}
      </div>
    )
  }
  componentDidMount () {
    this.myinterval =setInterval( () =>{
      this.setState({
        count:this.state.count+1
      })
    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.myinterval)
  }
}



export default App
