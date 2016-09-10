const React = require('react')
const PropTypes = React.PropTypes
const styles = require('../styles')
const Link = require('react-router').Link
const UserDetailsWrapper = require('./UserDetailsWrapper')
const UserDetails = require('./UserDetails')

function puke (obj) {
  return <pre> {JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle (props) {
  return props.isLoading === true
  ? <p> LOADING </p>
  : <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
    <h1>Confirm Players</h1>
    <div className='col-sm-8 col-sm-offset-2'>
      <UserDetailsWrapper header='Player One'>
        <UserDetails info={props.playersInfo[0]} />
      </UserDetailsWrapper>
      <UserDetailsWrapper header='Player Two'>
        <UserDetails info={props.playersInfo[1]} />
      </UserDetailsWrapper>
    </div>
    <div className='col-sm-8 col-sm-offset-2'>
      <div className='col-sm-12' style={styles.space}>
        <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
          Initiate battle
        </button>
      </div>
      <div className='col-sm-12' style={styles.space}>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-danger'>Reselect players</button>
        </Link>
      </div>
    </div>
  </div>
}

ConfirmBattle.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle
