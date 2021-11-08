import { Component } from 'react';
import Section from './components/Section/Section.jsx';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Notification from './components/Notification/Notification.jsx';
import s from './App.css';
import 'modern-normalize/modern-normalize.css';
import './App.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = value => () => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const positiveFeedbackPercentage = Math.round((good / totalFeedback) * 100);
    const options = Object.keys(this.state);

    return (
      <div className={s.container}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.increment}
          ></FeedbackOptions>
        </Section>

        {totalFeedback > 0 ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            ></Statistics>
          </Section>
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </div>
    );
  }
}
