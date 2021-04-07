import { CardList } from './components/card-list/card-list.component';
import {Component} from 'react';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

  }

  componentDidMount() { // Grab dummy data for monsters rolodex
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => { // Update searchField with value of event target
    this.setState({searchField: e.target.value})
  }

  render() {
    // Begin render by preparing a filtered list of monsters based on searchField
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    // Build rolodex with header, search-box and card-list populated with filtered list
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;
