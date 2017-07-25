// import React, { Component } from 'react'
import styled from 'styled-components'

const Code = styled.pre`
  margin: 0;
  padding: 1rem;
  line-height: 1.6;
  background-color: #1c1d21;
  color: #cbcdd2;
  overflow-x: auto;
  white-space: pre-wrap;
`

export const CodeComment = styled.div`color: #686b78;`
export const CodeInput = styled.div`color: #78bd65;`
export const CodeOutput = styled.div``

export default Code

// export default class Console extends Component {
//   state = {
//     maxWidth: '0px'
//   }
//
//   constructor(props) {
//     super(props)
//   }
//
//   componentDidMount = () => {
//     // this.onResize()
//     // this.startListening()
//   }
//
//   componentWillUnmount = () => {
//     // this.stopListening()
//   }
//
//   startListening = () => {
//     window.addEventListener('resize', this.onResize)
//   }
//
//   stopListening = () => {
//     window.removeEventListener('resize', this.onResize)
//   }
//
//   onResize = () => {
//     const box = this.pre.parentNode.getBoundingClientRect();
//     console.log('onResize', box);
//     this.setState({maxWidth: box.width})
//   }
//
//   setRef = ref => {
//     this.pre = ref
//   }
//
//   render() {
//     const { maxWidth } = this.state
//     return (
//       <Code /*style={{maxWidth}}*/ innerRef={this.setRef}>
//         {this.props.children}
//       </Code>
//     )
//   }
// }
