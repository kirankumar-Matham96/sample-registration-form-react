import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameErrorMessage: '',
    lastNameErrorMessage: '',
    firstNameInputClassName: 'initial-input-field',
    lastNameInputClassName: 'initial-input-field',
    isFormSubmitted: false,
  }

  onFirstNameChange = event => {
    this.setState({firstName: event.target.value})
  }

  onLastNameChange = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstNameField = event => {
    if (event.target.value === '') {
      this.setState(prevState => ({
        firstNameErrorMessage: 'Required',
        firstNameInputClassName: `${prevState.firstNameInputClassName} error-input-field`,
      }))
    } else {
      this.setState({
        firstNameErrorMessage: '',
        firstNameInputClassName: 'initial-input-field',
      })
    }
  }

  onBlurLastNameField = event => {
    if (event.target.value === '') {
      this.setState(prevState => ({
        lastNameErrorMessage: 'Required',
        lastNameInputClassName: `${prevState.lastNameInputClassName} error-input-field`,
      }))
    } else {
      this.setState({
        lastNameErrorMessage: '',
        lastNameInputClassName: 'initial-input-field',
      })
    }
  }

  isFormValid = () => {
    const {firstName, lastName} = this.state

    if (firstName === '' && lastName === '') {
      this.setState(prevState => ({
        firstNameErrorMessage: 'Required',
        lastNameErrorMessage: 'Required',
        firstNameInputClassName: `${prevState.firstNameInputClassName} error-input-field`,
        lastNameInputClassName: `${prevState.lastNameInputClassName} error-input-field`,
      }))
    } else if (firstName === '') {
      this.setState(prevState => ({
        firstNameErrorMessage: 'Required',
        firstNameInputClassName: `${prevState.firstNameInputClassName} error-input-field`,
      }))
    } else if (lastName === '') {
      this.setState(prevState => ({
        lastNameErrorMessage: 'Required',
        lastNameInputClassName: `${prevState.lastNameInputClassName} error-input-field`,
      }))
    } else {
      this.setState({
        firstName: '',
        lastName: '',
        firstNameErrorMessage: '',
        lastNameErrorMessage: '',
        firstNameInputClassName: 'initial-input-field',
        lastNameInputClassName: 'initial-input-field',
        isFormSubmitted: true,
      })
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.isFormValid()
  }

  onRequestNewForm = () => {
    this.setState({isFormSubmitted: false})
  }

  renderForm = () => {
    const {
      firstName,
      lastName,
      firstNameErrorMessage,
      lastNameErrorMessage,
      firstNameInputClassName,
      lastNameInputClassName,
    } = this.state
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <label className="label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          name="firstName"
          className={firstNameInputClassName}
          placeholder="First name"
          onChange={this.onFirstNameChange}
          onBlur={this.onBlurFirstNameField}
        />
        <p className="error-message">{firstNameErrorMessage}</p>
        <label className="label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          name="lastName"
          className={lastNameInputClassName}
          placeholder="Last name"
          onChange={this.onLastNameChange}
          onBlur={this.onBlurLastNameField}
        />
        <p className="error-message">{lastNameErrorMessage}</p>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    )
  }

  renderSuccessCard = () => (
    <div className="success-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="tick-img"
      />
      <p className="success-card-description">Submitted Successfully</p>
      <button
        type="button"
        className="button request-btn"
        onClick={this.onRequestNewForm}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="registration-container">
        <h1 className="main-heading">Registration</h1>
        {!isFormSubmitted ? <this.renderForm /> : <this.renderSuccessCard />}
      </div>
    )
  }
}

export default RegistrationForm
