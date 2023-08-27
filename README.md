# Math_Server

This Node.js server allows you to perform mathematical operations via URL and maintains a history of the last 20 operations.

## Getting Started

1. Clone this repository to your local machine.

2. Install dependencies using npm

3. Start the server:

4. Access the server at `http://localhost:3000`.

To perform mathematical operations, you can make GET requests to the server with the following format:
http://localhost:3000/:operations

Replace `:operations` with the mathematical operations you want to perform. You can use operators such as `plus`, `minus`, `into`, and `dividedby`. For example:

- `/5/plus/3/minus/2` will calculate `(5 + 3) - 2`.

### View Operation History

You can view the history of the last 20 operations by making a GET request to:
http://localhost:3000/history

The history will display the operations performed and their results.

## Supported Operators

- `plus`: Addition
- `minus`: Subtraction
- `into`: Multiplication
- `dividedby`: Division

## Error Handling

- If you provide an invalid input format, an error response with status code 400 will be returned.

- If you provide an invalid operand, an error response with status code 400 will be returned.

- If you use an unsupported operator, an error response with status code 400 will be returned.
