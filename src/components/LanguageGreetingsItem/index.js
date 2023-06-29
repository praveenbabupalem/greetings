const LanguageGreetingsItem = props => {
  const {buttonItem, onClickButton} = props

  const changeButton = event => {
    onClickButton(event)
  }
  return (
    <li key={buttonItem.id}>
      <button
        value={buttonItem.buttonText}
        type="button"
        onClick={changeButton}
      >
        {buttonItem.buttonText}
      </button>
    </li>
  )
}
export default LanguageGreetingsItem
