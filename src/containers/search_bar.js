import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }

    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(e) {
    e.preventDefault()
    // console.log(this.state.term)
    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }

  render() {
    const { term } = this.state

    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
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

// function mapStateToProps(state) {
  
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

// export default SearchBar
export default connect(null, mapDispatchToProps)(SearchBar)

