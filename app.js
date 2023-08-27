const express = require('express');
const app = express();

// Initialize the history array
const history = [];

// Middleware to parse URL parameters
app.use(express.urlencoded({ extended: false }));

// Endpoint to handle mathematical operations
app.get('/:operands/:operator/:operands2', (req, res) => {
  const { operands, operator, operands2 } = req.params;
  const question = `${operands}/${operator}/${operands2}`;
  const answer = calculate(operands, operator, operands2);
  
  // Add this operation to the history
  addToHistory(question, answer);

  // Send JSON response
  res.json({ question, answer });
});

app.get('/:operands/:operator/:operands2/:operator2/:operands3', (req, res) => {
    const { operands, operator, operands2, operator2, operands3 } = req.params;
    const question = `${operands}/${operator}/${operands2}/${operator2}/${operands3}`;
    const panswer = calculate(operands, operator, operands2);
    const answer = calculate(panswer, operator2, operands3);
    
    // Add this operation to the history
    addToHistory(question, answer);
  
    // Send JSON response
    res.json({ question, answer });
  });

// Endpoint to view the history
app.get('/history', (req, res) => {
  res.json(history);
});

// Function to calculate mathematical operations
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
    // Add more operators as needed
    default:
      return NaN;
  }
}

// Function to add an operation to the history (max 20 entries)
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
