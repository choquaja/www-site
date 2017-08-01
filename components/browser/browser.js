import React from 'react'
import styled, { css } from 'styled-components'
import { centerContent } from '../../styles/helpers'

const BrowserHeaderButton = css`
width: 11px;
height: 11px;
border: 1px solid whitesmoke;
border-radius: 50%;
background: whitesmoke;
margin-left: ${props => props.theme.units.unit / 2}px;
`

const BrowserButton1 = styled.div`
  ${BrowserHeaderButton} border: 1px solid darken(#FE645E, 7%);
  background: #fe645e;
`

const BrowserButton2 = styled.div`
  ${BrowserHeaderButton} border: 1px solid darken(#FEBE40, 7%);
  background: #febe40;
`

const BrowserButton3 = styled.div`
  ${BrowserHeaderButton} border: 1px solid darken(#2FC847, 7%);
  background: #2fc847;
`

const BrowserHeaderButtons = styled.div`display: flex;`

const BrowserHeaderWrapper = styled.div`
  padding: 8px ${props => props.theme.units.unit}px;
  display: flex;
`

const BrowserHeader = styled.div`
  background: whitesmoke;
  border-bottom: ${props => props.theme.borders.border};
`

const BrowserWrapper = styled.div`
  box-shadow: ${props => props.theme.animations.dropShadowlLight};
`

const BrowserMain = styled.div`
  ${centerContent} border: ${props => props.theme.borders.border};
  border-radius: 6px;
  background: white;
  overflow: hidden;
`

export class Browser extends React.Component {
  render() {
    return (
      <BrowserMain>
        <BrowserWrapper>
          <BrowserHeader>
            <BrowserHeaderWrapper>
              <BrowserHeaderButtons>
                <BrowserButton1 />
                <BrowserButton2 />
                <BrowserButton3 />
              </BrowserHeaderButtons>
            </BrowserHeaderWrapper>
          </BrowserHeader>
          <div>
            {this.props.children}
          </div>
        </BrowserWrapper>
      </BrowserMain>
    )
  }
}
