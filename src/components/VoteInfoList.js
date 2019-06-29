import React, { Component } from 'react';
import VoteInfo from './VoteInfo';

class VoteInfoList extends Component {
  static defaultProps = {
    list: []
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.data !== this.props.data;
  }
  
  render() {
    const { data } = this.props;
    const list = data.map(
      info => (
        <VoteInfo
          key={info.id}
          information={info}
        />)
    );

    return (
      <div>
        {list}    
      </div>
    );
  }
}

export default VoteInfoList;