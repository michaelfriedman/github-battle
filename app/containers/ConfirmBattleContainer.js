const React = require('react')
const ConfirmBattle = require('../components/ConfirmBattle')
const githubHelpers = require('../utils/githubHelpers')

const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: () => {
    console.log('getInitialState')
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentWillMount: function() {
    console.log('componentWillMount')
  },
  componentDidMount: function() {
    const query = this.props.location.query
    console.log('componentDidMount')
    githubHelpers.getPlayersInfo(query.playerOne, query.playerTwo)
  },
  componentWillReceiveProps: function() {
    console.log('componentWillReceiveProps')
  },
  componentWillUnmount: function() {
    console.log('componentWillUnmount')
  },
  render: function() {
    return (
      <ConfirmBattle
      isLoading={this.state.isLoading}
      playersInfo={this.state.playersInfo} />
    )
  }
})

module.exports = ConfirmBattleContainer
