const React = require('react')
const ReactRouter = require('react-router')
const Link = ReactRouter.Link
const MainContainer = require('./MainContainer')

const Home = React.createClass({
  render: function () {
    return (
      <MainContainer>
        <h1> by Michael Friedman, from ReactJSProgram.com Curriculum </h1>
        <p className='lead'>This fancy placeholder</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </MainContainer>
    )
  }
})

module.exports = Home
