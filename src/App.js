import React from 'react';
import defaultDataset from './dataset';
import { AnswersList } from './components';
import './assets/styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: 'init',
      dataset: defaultDataset,
      open: false,
    };
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <AnswersList />
        </div>
      </section>
    );
  }
}

export default App;
