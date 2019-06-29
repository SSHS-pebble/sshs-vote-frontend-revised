// src/component/App.js

import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Home from './Home';
import VoteForm from './VoteForm';
import VoteInfoList from './VoteInfoList';
import logo from './img/logo.png'
import mypic1 from './img/one.jpg'
import mypic2 from './img/two.jpg'

class App extends Component {
  
  state = {
    information: [
      {
        id: [],
        code: '',
        candidate: ''
      }
    ]
  }
  
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  render() {
    return ( 
       <BrowserRouter>
        <div align="center">
         <p>
          <img src={logo} alt="로고" width="" height=""></img>
          <Link to="/"><font size="5" color="navy"><b>2019-2020 서울과고 회장단 선거</b></font></Link>
         </p>

          <font size="3" color="gray"><b>기호 1번 이영민, 김하늘, 강태연</b></font>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <font size="3" color="gray"><b>기호 2번 양승혁, 안채환, 박범희</b></font>
          <br></br><br></br>
          <img src={mypic1} alt="기호 1번" border="1" width="400" height=""></img><span>&nbsp;&nbsp;&nbsp;</span><img src={mypic2} alt="기호 2번" border="1" width="400" height=""></img>
          <Route exact path="/" component={Home} />
         
         <p>     
          <VoteForm onCreate={this.handleCreate} />  
          <VoteInfoList data={this.state.information}/>
         </p>
        </div>
      </BrowserRouter>
         )
  }
}

export default App;