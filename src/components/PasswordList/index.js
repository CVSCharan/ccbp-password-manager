import './index.css'

const PasswordList = props => {
  const {id, passwordList, showPasswordStatus, onDeletePasswordItem} = props
  const {website, username, password} = passwordList
  const returnPasswordStarsOrChars = showPasswordStatus ? (
    <p className="password-item">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )

  const onDelete = () => {
    onDeletePasswordItem(id)
  }

  return (
    <li className="password-list">
      <div className="details-section">
        <p className="password-item">{website}</p>
        <p className="password-item">{username}</p>
        {returnPasswordStarsOrChars}
      </div>
      <button
        type="button"
        className="delete-btn"
        testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default PasswordList
