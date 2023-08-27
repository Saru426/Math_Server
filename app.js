const express = require('express');
const app = express();

const history = [];

app.use(express.urlencoded({ extended: false }));

app.get('/:operands/:operator/:operands2', (req, res) => {
  const { operands, operator, operands2 } = req.params;
  const question = `${operands}/${operator}/${operands2}`;
  const answer = calculate(operands, operator, operands2);
  
  addToHistory(question, answer);

  res.json({ question, answer });
});

app.get('/:operands/:operator/:operands2/:operator2/:operands3', (req, res) => {
    const { operands, operator, operands2, operator2, operands3 } = req.params;
    const question = `${operands}/${operator}/${operands2}/${operator2}/${operands3}`;
    const panswer = calculate(operands, operator, operands2);
    const answer = calculate(panswer, operator2, operands3);
    
    addToHistory(question, answer);
  
    res.json({ question, answer });
});

app.get('/:operands/:operator/:operands2/:operator2/:operands3/:operator3/:operands4', (req, res) => {
    const { operands, operator, operands2, operator2, operands3, operator3, operands4 } = req.params;
    const question = `${operands}/${operator}/${operands2}/${operator2}/${operands3}/${operator3}/${operands4}`;
    const answer1 = calculate(operands, operator, operands2);
    const answer2 = calculate(answer1, operator2, operands3);
    const answer = calculate(answer2, operator3, operands4);
    
    addToHistory(question, answer);
  
    res.json({ question, answer });
});


app.get('/history', (req, res) => {
  res.json(history);
});

function calculate(operands, operator, operands2) {
  operands = parseFloat(operands);
  operands2 = parseFloat(operands2);

  switch (operator) {
    case 'plus':
      return operands + operands2;
    case 'minus':
      return operands - operands2;
    case 'into':
      return operands * operands2;
    case 'dividedby':
      return operands / operands2;
    default:
      return NaN;
  }
}

function addToHistory(question, answer) {
  history.unshift({ question, answer });
  if (history.length > 20) {
    history.pop();
  }
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
