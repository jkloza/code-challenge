import React, { Component } from 'react'
import Card from './card'
import ResponsiveCardColumns from './responsive-card-columns'

const DEFAULT_STATE = {
  firstName: '',
  lastName: '',
  cards: []
}

class App extends Component {
  constructor () {
      super()
      this.state = DEFAULT_STATE
    }

  handleSubmit (event) {
    event && event.preventDefault()

    // CODE GOES HERE
  }

  handleClose (card) {
    // CODE GOES HERE
  }

  setInputFocus () {
    this.textInput.focus()
  }

  render() {
    const {
      firstName,
      lastName,
      cards
    } = this.state

    return (
      <div className='App'>
        <div className='input-field'>
          <Card title='Name Input' fullWidth>
            <form
              className='simple-form'
              onSubmit={this.handleSubmit.bind(this)}
            >
              <div className='input-icon-wrapper'>
                {firstName ? <label>First Name</label> : null}
                <input
                  ref={input => { this.textInput = input }}
                  type='text'
                  placeholder='First Name'
                  value={firstName || ''}
                  onChange={event => {
                    this.setState({
                      firstName: event.target.value
                    })
                  }} />
              </div>
              <div className='input-icon-wrapper'>
                {lastName ? <label>Last Name</label> : null}
                <input
                  type='text'
                  placeholder='Last Name'
                  value={lastName || ''}
                  onChange={event => {
                    this.setState({
                      lastName: event.target.value
                    })
                  }} />
              </div>
              <input
                className='btn-pill'
                type='submit'
                value={'submit'}
              />
              <div className='clearfix' />
            </form>
          </Card>
        </div>
        <div className='card-field'>
          {cards ? (
            <ResponsiveCardColumns forceWidth='three'>
              {cards.map(card => {
                return (
                  <Card title='full name'
                    fullWidth
                    key={card.id}
                    topRightCorner={<button className='btn-plain' onClick={() => this.handleClose(card)}>close</button>}
                  >
                    <ul>
                      <li>First Name: {card.firstName}</li>
                      <li>Last Name: {card.lastName}</li>
                    </ul>
                  </Card>
                )
              })}
            </ResponsiveCardColumns>
          ) : null}
        </div>
      </div>
    )
  }
}

export default App
