import {Component} from 'react'
import LanguageGreetingsItem from '../LanguageGreetingsItem'
import './index.css'

class Home extends Component {
  state = {activeLanguage: 'English'}

  onClickButton = event => {
    this.setState({activeLanguage: event.target.value})
  }

  render() {
    const {languageGreetingsList} = this.props
    const {activeLanguage} = this.state
    return (
      <div>
        <h1>Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(each => (
            <LanguageGreetingsItem
              buttonItem={each}
              key={each.id}
              onClickButton={this.onClickButton}
            />
          ))}
        </ul>
        {languageGreetingsList.map(each => (
          <>
            {each.buttonText === activeLanguage && (
              <li key={each.id}>
                <img
                  src={each.imageUrl}
                  alt={each.imageAltText}
                  className="image"
                />
              </li>
            )}
          </>
        ))}
      </div>
    )
  }
}

export default Home
