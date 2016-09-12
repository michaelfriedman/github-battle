import React from 'react'
import Results from '../components/Results'
import { battle } from '../utils/githubHelpers'

const ResultsContainer = React.createClass({
  getInitialState () {
    return {
      isLoading: true,
      scores: []
    }
  },
  async componentDidMount () {
    const scores = await battle(this.props.location.state.playersInfo)
    try {
      this.setState({
        scores,
        isLoading: false
      })
    } catch (error) {
      console.warn(`There was an error in ResultsContainer, ${error}`)
    }
  },
  render () {
    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores}
      />
    )
  }
})

export default ResultsContainer
