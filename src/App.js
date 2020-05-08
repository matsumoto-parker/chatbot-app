import React from 'react';
import defaultDataset from './dataset';
import { AnswersList, Chats } from './components';
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

  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats;
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question',
    });

    this.setState({
      chats: chats,
      currentId: nextQuestionId,
      answers: this.state.dataset[nextQuestionId].answers,
    });
  };

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === 'init':
        this.displayNextQuestion(nextQuestionId);
        break;
      default:
        const chats = this.state.chats;
        chats.push({
          text: selectedAnswer,
          type: 'answer',
        });

        this.setState({ chats: chats });

        this.displayNextQuestion(nextQuestionId);
        break;
    }
  };

  componentDidMount() {
    const initAnswer = '';
    this.selectAnswer(initAnswer, this.state.currentId);
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} />
        </div>
      </section>
    );
  }
}

export default App;
