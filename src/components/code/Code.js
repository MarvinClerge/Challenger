import React, { Component } from 'react'
import AceEditor from 'react-ace'

import 'brace/mode/javascript';
import 'brace/theme/github';
import './code.css'

import CodeController from './CodeController'

class Code extends Component {
  state = {
    content: this.props.challenge.content
  }

  onChange = (input) => {
    this.setState({
      content: input
    })
  }

  render(){
    return(
      <div className='code'>
        <AceEditor
          mode='javascript'
          theme='github'
          onChange={this.onChange}
          value={this.state.content}
          width='100vw'
          fontSize="16px"
          focus={true}
          wrapEnabled={true}
          editorProps={{$blockScrolling: Infinity}}
        />

        <CodeController
          code={this.state.content}
          challenge={this.props.challenge}
          challengeId={this.props.challengeId}
        />
      </div>
    )
  }
}

export default Code
