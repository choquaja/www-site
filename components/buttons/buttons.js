import React from 'react'
import Button from '../button/button'
import styled from 'styled-components'

const buttonsWrapper = styled.div`display: flex;`

export default class Buttons extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let renderButtons = items => {
      return items.map((item, i) => {
        return <Button item={item} key={i} />
      })
    }
    let classes = ''

    if ('align-end' in this.props) {
      classes += ' layout-align-end'
    }
    if ('align-start' in this.props) {
      classes += ' layout-align-start'
    }
    if ('align-center' in this.props) {
      classes += ' layout-align-center'
    }
    if ('full-width' in this.props) {
      classes += ' full-width'
    }

    if (this.props.className) {
      classes += ' ' + this.props.className
    }
    if (this.props.items) {
      return (
        <div className={'buttons' + classes}>
          <div className="buttons-wrapper">
            {renderButtons(this.props.items)}
          </div>
        </div>
      )
    } else {
      return (
        <div className={'buttons' + classes}>
          <div className="buttons-wrapper">
            {this.props.children}
          </div>
        </div>
      )
    }
  }
}
