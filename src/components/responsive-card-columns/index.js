import React from 'react'
import PropTypes from 'prop-types'
import withScreenWidth from 'enhancers/with-screen-width'
import './index.css'

class ResponsiveCardColumns extends React.PureComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
    screenWidth: PropTypes.number.isRequired,
    forceWidth: PropTypes.string
  }

  render () {
    const { children, screenWidth, forceWidth } = this.props

    let columnCount, columnCountStr
    if (screenWidth > 1100) {
      columnCount = 4
      columnCountStr = 'four'
    } else if (screenWidth > 820) {
      columnCount = 3
      columnCountStr = 'three'
    } else if (screenWidth > 550) {
      columnCount = 2
      columnCountStr = 'two'
    } else {
      columnCount = 1
      columnCountStr = 'one'
    }

    if (forceWidth === 'four' && screenWidth > 1100) {
      columnCount = 4
      columnCountStr = 'four'
    } else if (forceWidth === 'three' && screenWidth > 820) {
      columnCount = 3
      columnCountStr = 'three'
    } else if (forceWidth === 'two' && screenWidth > 550) {
      columnCount = 2
      columnCountStr = 'two'
    } else if (forceWidth === 'one' && screenWidth < 550) {
      columnCount = 1
      columnCountStr = 'one'
    }

    const columns = splitIntoColumns(children, columnCount)

    return <div className='responsive-card-columns'>
      {columns.map((column, i) =>
        <div key={i} className={`${columnCountStr} column`}>
          {column}
        </div>
      )}
    </div>
  }
}

function splitIntoColumns (arr, count) {
  const clone = arr.slice()
  const columns = []

  for (var i = 0; i < count; i++) {
    columns.push([])
  }

  var currentColumn = 0
  while (clone.length) {
    columns[currentColumn].push(clone.shift())
    currentColumn = (currentColumn + 1) % count
  }

  return columns
}

export default withScreenWidth(ResponsiveCardColumns)
