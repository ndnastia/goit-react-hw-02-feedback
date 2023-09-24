

const Statistics = ({good, bad, neutral, totalFeedback, positivePercentage}) => {
   return (<ul>
      <li>Good: {good}</li>
      <li>Neautral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive Feedback: {positivePercentage}</li>
   </ul>)
}

export default Statistics;