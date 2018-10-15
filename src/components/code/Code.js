import React, { Component } from 'react'
import AceEditor from 'react-ace'

import 'brace/mode/javascript';
import 'brace/theme/github';

class Code extends Component {
  state = {
    codeContent: ""
  }

  onChange = (event) => {
    this.setState({
      codeContent: event
    })
  }

  render(){
    return(
      <div className='code'>
        <AceEditor
          mode='javascript'
          theme='github'
          onChange={this.onChange}
          value={this.state.codeContent}
          width='100vw'
          fontSize="16px"
        />
      </div>
    )
  }
}

export default Code
