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
	
	//checks to see if first and last name fields are populated
	if(this.state.firstName && this.state.lastName){

	//update the state of the 'cards' array

	// 1 -- create a variable to store the card title from the form
	var cardTitle = 'Juli Kloza';
	// 2 -- add a new card to the array
	this.setState({ cards: this.state.cards.concat([new Card({title: 'Juli kloza'})])
	});
	//this.setState = ({ firstName: '', lastName: ''});

	//clear inputs after a successful entry
	this.state.firstName = '';
	this.state.lastName = '';

	//set input focus back to 'First Name' input
	this.setInputFocus();

	}
	else{
	console.log('name fields not filled');


	 }
 
/*
-   It should only update the state when text has been entered in __both__ inputs (first name and last name)
-   This should be setting the state of the `cards` array to _add_ a new card to the screen when submitted. Make sure not to overwrite the current array.
-   It should clear the inputs after a successful entry using `DEFAULT_STATE`
-   It should set the input focus back to the `First Name` input after successful entry
*/
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
                  }} 
		  emptyMessage = 'First name is required.'
		/>
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
                  }}
		  emptyMessage = 'Last name is required' 
		/>
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
