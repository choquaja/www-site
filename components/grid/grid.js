import React from 'react'
import styles from './grid.styles.scss'
import styled from 'styled-components'
import { centerContent, media } from '../../styles/helpers'

const GridMain = styled.div`width: 100%;`

const GridWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  ${props => props.center && 'justify-content:center align-items:center'};
`

const ItemMain = styled.div`
  margin-bottom: ${props => props.theme.units.unit * 2}px;
  ${media.tablet`width: 50% !important max-width:50% !important`};
`

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ItemGraphic = styled.div`width: 90px;`

const ItemLabel = styled.div`
  padding-top: ${props => props.theme.units.unit}px;
  font-size: 1rem;
  text-align: center;
`

const GridItemAvatar = styled.div`
  min-width: 120px;
  max-width: 140px;
`

export class GridItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ItemMain>
        <ItemWrapper>
          {this.props.children}
        </ItemWrapper>
      </ItemMain>
    )
  }
}

export function Grid({ columns, itemStyle, children, ...rest }) {
  return (
    <GridMain {...rest}>
      <GridWrapper>
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            columns,
            style: itemStyle,
          })
        )}
      </GridWrapper>
    </GridMain>
  )
}
