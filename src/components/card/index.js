import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import {
  ChildrenShape
} from 'shapes'
import './index.css'

class Card extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    children: ChildrenShape,
    footer: ChildrenShape,
    topRightCorner: ChildrenShape,
    fullWidth: PropTypes.bool
  }

  formatTitle (title) {
    const words = title.split(' ')
    const firstWord = words[0]
    const theRest = words.slice(1).join(' ')

    return <span><b>{firstWord}</b> {theRest}</span>
  }

  render () {
    const { title, children, footer, topRightCorner, fullWidth } = this.props

    const classes = ClassNames({
      card: true,
      'box-with-shadow': true,
      small: !fullWidth,
      'full-width': fullWidth
    })

    return (
      <div className={classes}>
        {title && (
          <h3 className='card-heading'>{this.formatTitle(title)}</h3>
        )}
        {topRightCorner && <div className='card-top-right-corner'>{topRightCorner}</div>}
        {children}
        {footer && (
          <div className='card-footer'>{footer}</div>
        )}
      </div>
    )
  }
}

export default Card
