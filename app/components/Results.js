const React = require('react')
const PropTypes = React.PropTypes
const styles = require('../styles')
const UserDetails = require('./UserDetails')
const UserDetailsWrapper = require('./UserDetailsWrapper')


function Results (props) {
  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1
  const losingIndex = winningIndex === 0 ? 1 : 0
  return (
    <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
      <h1> Results </h1>
      <div className='sol-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
    </div>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results
