import React from 'react';
import PropTypes from 'prop-types';

function PlayerPreview (props) {
  return (
    <div>
      <div className="column">
        <img
          className='avatar'
          src={ props.avatar }
          alt={ `Avatar for ${props.username}` } />

        <h2 className='username'>@{ props.username }</h2>
      </div>

      <button
        onClick={ props.onReset.bind(null, props.id) }
        className="reset">
        Reset
      </button>
    </div>
  );
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

class PlayerInput extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const { value: username } = event.target;

    this.setState(() => {
      return { username }
    });
  }

  handleSubmit (event) {
    event.preventDefault();

    this.props.onSubmit(
      this.props.id,
      this.state.username
    );
  }

  render () {
    return (
      <form className='column' onSubmit={ this.handleSubmit }>
        <label htmlFor="username" className="header">
          {this.props.label}
        </label>

        <input
          id='username'
          placeholder='github username'
          autoComplete='off'
          value={ this.state.username }
          onChange={ this.handleChange }
          type="text"/>

        <button
          type='submit'
          disabled={ !this.state.username }
          className="button">
          Submit
        </button>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default class extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (id, username) {
    this.setState(() => {
      const newState = {};
      newState[`${id}Name`] = username;
      newState[`${id}Image`] = `https://github.com/${username}.png?size=200`;
      return newState;
    });
  }
  render () {
    const { playerOneName, playerTwoName } = this.state;
    return (
      <div>
        <div className="row">
          {!playerOneName &&
            <PlayerInput
              id='playerOne'
              label='Player One'
              onSubmit={ this.handleSubmit } />
          }

          {!playerTwoName &&
            <PlayerInput
              id='playerTwo'
              label='Player Two'
              onSubmit={ this.handleSubmit } />
          }
        </div>
      </div>
    );
  }
}
