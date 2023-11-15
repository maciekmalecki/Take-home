# Event Parser

## Overview
Welcome to the Event Parser project! This TypeScript-based solution parses sporting event data into a more readable format. It's designed for ease of use and quick integration into your local development environment.

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository:
   git clone [repository-url]

2. Install dependencies:
   npm i

3. Compile TypeScript to JavaScript:
   npx tsc

### Running the Application
To run the application, execute:
node dist/app.js

## Running Tests

### Unit Tests
To run unit tests and ensure the Event Parser is functioning as expected, execute:
npm test

### Test Coverage
For test coverage analysis, execute:
jest --coverage

## Project Structure

- src/: Contains the TypeScript source files.
- parsers/: Contains the EventParser class.
- data/: Contains the matches data file.
- types/: Contains type definitions.
- interfaces/: Contains TypeScript interfaces used in the project.
- tests/: Contains the Jest test files for the project.
- dist/: Contains the compiled JavaScript files (generated after building).

## Built With

- TypeScript - The primary language used.
- Jest - The testing framework.

## Authors

- Maciej Malecki

Instructions:
- You have to refactor code in app.js file. Change it, split it, improve it, do it your own way!
- You can use version of node you prefer
- Code was tested in node 6, 10, 12, 14, 16, so it should be quite version agnostic at this stage
- Application should print out the array of parsed events:

[
  { 
    name: 'Chelsea - Arsenal',
    score: '2:1' 
  },
  {
    name: 'Germany - France',
    score: 'Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)'
  },
  { 
    name: 'Pogoń Szczeciń vs Azoty Puławy',
    score: '34:26'
  },
  { 
    name: 'GKS Tychy - GKS Katowice',
    score: '9:7,2:1,5:3,9:9' 
  },
  {
    name: 'Maria Sharapova vs Serena Williams',
    score: 'Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)'
  }
]

- Structure of matches data should stay intact (that doesn't mean you can't move it around tho!)
- You can stick to JS, or use TypeScript as well (it is event better, because we mostly work with TS)
- We strongly recommend to write some unit tests!

Good luck!


