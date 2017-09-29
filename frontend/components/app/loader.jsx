import React from 'react';
import { BarLoader } from 'react-spinners';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='loading-bar'>
        <BarLoader
          color={'#50AC54'}
          loading={this.state.loading}
          width={4000}
        />
      </div>
    )
  }
}

export default Loading
