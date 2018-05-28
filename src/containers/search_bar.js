import React, { PureComponent } from 'react'

class SearchBar extends PureComponent {
  constructor(props) {

    super(props)

    this.state = {
      term: ''
    }
  }

  onInputChange(event) {
    console.log(event.target.value)
  }

  onFormSubmit(event) {
    event.preventDefault()
  }

  render() {
    const { term } = this.state

    return (
      <form onSubmit={(event) => this.onFormSubmit(event)} className='input-group'>
        <input
          className='form-control'
          placeholder='Get a five day forecast in your favourite cities'
          value={term}
          onChange={(event) => this.onInputChange(event)}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Search</button>
        </span>
      </form>
    )
  }
}

export default SearchBar
