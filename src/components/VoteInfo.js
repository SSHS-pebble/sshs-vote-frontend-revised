import React, { Component } from 'react';

class VoteInfo extends Component {
  static defaultProps = {
    information: {
      code: '',
      candidate: '',
      id: ''
    },
  }

 
  // input 에서 onChange 이벤트가 발생 될 때
  // 호출되는 함수입니다
  handleChange = (e) => {
    const { code, value } = e.target;
    this.setState({
      [code]: value
    });
  }

   
  render() {
    console.log('render VoteInfo ' + this.props.information);
    const style = {
      border: '1px solid blue',
      padding: '8px',
      margin: '8px',
      width: '300px'
    };

  
    // 일반모드
    const {
      code, candidate, id
    } = this.props.information;
    
    return (
      <div style={style}>
        <div><b>{id}</b></div>
        <div><b>{code}</b></div>
        <div><b>{candidate}</b></div>
      </div> 
    );
  }
}

export default VoteInfo;