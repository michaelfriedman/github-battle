import React from 'react'
import Prompt from '../components/Prompt.js'

const PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      username: ''
    }
  },
  handleSubmitUser: function (e) {
    e.preventDefault()
    const { username } = this.state
    this.setState({
      username: ''
    })

    const { playerOne } = this.props.routeParams
    if (playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne,
          playerTwo: username
        }
      })
    } else {
      this.context.router.push(`/playerTwo/${username}`)
    }
  },
  handleUpdateUser: function (event) {
    this.setState({
      username: event.target.value
    })
  },
  render: function () {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}
      />
    )
  }
})

export default PromptContainer
