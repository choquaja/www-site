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

const Item = styled.div`
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

const People = styled.div`
  margin-top: ${props => props.theme.units.gutter * 4}px;
`

const PersonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${props => props.theme.units.gutter * 2};
`

const PersonAvatar = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: white;
  margin-bottom: ${props => props.theme.units.gutter};
  box-shadow: ${props => props.theme.animations.dropShadowShallow};
  overflow: hidden;
`

const PersonDetailsName = styled.div`
  font-size: 2rem;
  font-family: ${props => props.theme.fonts.headings};
  color: ${props => props.theme.colors.graphitebase};
  font-weight: 100;
`

const PersonDetailsTitle = styled.div`
  padding-top: ${props => props.theme.units.unit}px;
  padding-bottom: ${props => props.theme.units.unit}px;
  color: rgba(${props => props.theme.colors.graphitebase}, 0.75);
`

const PersonDetailsBio = styled.div`
  max-width: 80%;
  font-weight: 300;
  opacity: 0.75;
  ${centerContent};
`

export class GridItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let classes = 'grid-item'

    if (this.props.className) {
      classes += ' ' + this.props.className
    }

    let columnWidth = '33%'

    let gridItemStyles = {}

    if ('columns' in this.props) {
      columnWidth = 100 / parseInt(this.props.columns)
      columnWidth = columnWidth + '%'

      if (this.props.style) {
        gridItemStyles = this.props.style
        gridItemStyles.maxWidth = columnWidth
      } else {
        gridItemStyles = {
          maxWidth: columnWidth,
          width: columnWidth,
        }
      }
    }
    return (
      <div className={classes} style={gridItemStyles}>
        <ItemWrapper>
          {this.props.children}
        </ItemWrapper>
      </div>
    )
  }
}

export class Grid extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let classes = 'grid'

    if ('align-end' in this.props) {
      classes += ' layout-align-end'
    }
    if ('align-start' in this.props) {
      classes += ' layout-align-start'
    }
    if ('align-center' in this.props) {
      classes += ' layout-align-center'
    }

    if (this.props.className) {
      classes += ' ' + this.props.className
    }

    if (this.props.className) {
      classes += ' ' + this.props.className
    }

    return (
      <div className={classes}>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <GridWrapper>
          {React.Children.map(this.props.children, child =>
            React.cloneElement(child, {
              columns: this.props.columns,
              style: this.props.itemStyle,
            })
          )}
        </GridWrapper>
      </div>
    )
  }
}
