const React = require('react')
const ReactDOM = require('react-dom')

const USER_DATA = {
  name: 'Michael Friedman',
  username: 'michaelfriedman',
  image: 'https://avatars2.githubusercontent.com/u/17555926?v=3&s=400'
}

const ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, widdth: 100}} />
  }
})

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
})

const ProfileName = React.createClass({
  render: function () {
    return (
      <div>{this.props.name}</div>
    )
  }
})

const Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})

ReactDOM.render(
  <Avatar username={USER_DATA} />,
  document.getElementById('app')
)
