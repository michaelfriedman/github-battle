const React = require('react')
const Prompt = require('../components/Prompt.js')

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
    const username = this.state.username
    this.setState({
      username: ''
    })
    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
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

module.exports = PromptContainer
