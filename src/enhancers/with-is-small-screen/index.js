import React from 'react'
import { throttle } from 'lodash'
import hoistStatics from 'hoist-non-react-statics'
import getDisplayName from 'enhancers/get-display-name'

const SMALL_SCREEN_WIDTH = 550

function withIsSmallScreen (WrappedComponent) {
  class WithIsSmallScreen extends React.PureComponent {
    constructor () {
      super()
      this.isSmallScreen = () => {
        return window.innerWidth <= SMALL_SCREEN_WIDTH
      }
      this.state = {
        isSmallScreen: this.isSmallScreen()
      }
    }

    componentWillMount () {
      if (!this.onResize) {
        this.onResize = throttle(() => {
          this.setState({
            isSmallScreen: this.isSmallScreen()
          })
        }, 16)
      }
    }

    componentDidMount () {
      window.addEventListener('resize', this.onResize)
    }

    componentWillUnmount () {
      window.removeEventListener('resize', this.onResize)
    }

    render () {
      return <WrappedComponent {...this.props} isSmallScreen={this.state.isSmallScreen} />
    }
  }

  WithIsSmallScreen.displayName = `withIsSmallScreen(${getDisplayName(WrappedComponent)})`

  return hoistStatics(WithIsSmallScreen, WrappedComponent)
}

export default withIsSmallScreen
