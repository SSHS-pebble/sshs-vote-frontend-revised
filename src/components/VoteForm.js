import React, { Component } from 'react';

class VoteForm extends Component {
  state = {
    id: '',
    code: '',
    candidate: ''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    // submit 버튼은 기본적으로 페이지를 새로 불러오게됨
    // 그렇게 되면 유저 인터랙션을 모두 놓쳐버리니까 이 함수를 사용하여
    // 원래해야 하는 작업을 방지함
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      code: '',
      candidate: ''
    })
  }
  
  render() {
     return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="본인코드"
          value={this.state.code}
          onChange={this.handleChange}
          name="code"
        />
        <span>&nbsp;</span>
        <select value={this.state.candidate} onChange={this.handleChange} name="candidate">
            <option value="">후보자 선택</option>
            <option value="1">기호 1번</option>
            <option value="2">기호 2번</option>
        </select>        
        <span>&nbsp;</span>
        <button type="submit">투표</button>
       </form>
    );
  }
}

export default VoteForm;