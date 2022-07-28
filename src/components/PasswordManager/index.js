import {Component} from 'react'

import {v4} from 'uuid'

import PasswordList from '../PasswordList'

import './index.css'

class PasswordManager extends Component {
  state = {
    passwordLists: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    searchInput: '',
    showPassword: false,
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onCheckedPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const newPasswordItem = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      passwordLists: [...prevState.passwordLists, newPasswordItem],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  onDeletePasswordItem = id => {
    const {passwordLists} = this.state
    const newPasswordList = passwordLists.filter(each => each.id !== id)

    this.setState({passwordLists: newPasswordList})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onFilterSearchInput = search => {
    const {passwordLists} = this.state
    const filteredSearchList = passwordLists.filter(
      eachItem => eachItem.website === search,
    )

    return filteredSearchList
  }

  render() {
    const {
      passwordLists,
      websiteInput,
      usernameInput,
      passwordInput,
      showPassword,
      searchInput,
    } = this.state
    const passwordsCount = passwordLists.length
    console.log(passwordLists)
    console.log(websiteInput, usernameInput, passwordInput)
    const isPasswordPresent =
      passwordLists.length !== 0 ? (
        <ul className="display-section1">
          {passwordLists.map(eachPasswordItem => (
            <PasswordList
              key={eachPasswordItem.id}
              passwordList={eachPasswordItem}
              showPasswordStatus={showPassword}
              onDeletePasswordItem={this.onDeletePasswordItem}
            />
          ))}
        </ul>
      ) : (
        <div className="display-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="no-passwords-img"
          />
          <p className="para1">No Passwords</p>
        </div>
      )
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="container1">
          <form className="card1">
            <h1 className="heading">Add New Password</h1>
            <div className="website-section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="container-logo"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="container-input"
                onChange={this.onChangeWebsiteInput}
                value={websiteInput}
              />
            </div>
            <div className="username-section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="container-logo"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="container-input"
                onChange={this.onChangeUsernameInput}
                value={usernameInput}
              />
            </div>
            <div className="password-section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="container-logo"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="container-input"
                onChange={this.onChangePasswordInput}
                value={passwordInput}
              />
            </div>
            <button
              type="submit"
              className="button"
              onClick={this.onClickAddButton}
            >
              Add
            </button>
          </form>
          <div className="card2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager"
            />
          </div>
        </div>
        <div className="container2">
          <div className="password-display-section">
            <div className="password-heading-section">
              <h1 className="password-heading">Your Passwords</h1>
              <p className="passwords-count">{passwordsCount}</p>
            </div>
            <div className="search-section">
              <img
                className="search-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                type="search"
                placeholder="Search"
                className="search-input"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <p className="line"> </p>
          <div className="checkbox-section">
            <input
              id="checkbox"
              type="checkbox"
              onClick={this.onCheckedPassword}
              className="checkbox"
            />
            <label className="label" htmlFor="checkbox">
              Show Passwords
            </label>
          </div>
          {isPasswordPresent}
        </div>
      </div>
    )
  }
}

export default PasswordManager
