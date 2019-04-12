# Easy as Pie-thon

An application for learning the Python Programming language using the Spaced Repetition Algorithm

## About

"Easy as Python is an easy to use app for memorizing some Python code. Users can read simple facts about the Python programming language. Registering for the App allows the user to login to store their progress and get a score depending on how many questions they have answered correctly. There's also a trial mode for learning with having to create an account, but progress tracking is disabled."

### Links

[Github repo for server: https://github.com/thinkful-ei26/Spaced-Repetition-Bryan-James-server](https://github.com/thinkful-ei26/Spaced-Repetition-Bryan-James-server)

[Github repo for client: https://github.com/thinkful-ei26/Spaced-Repetition-Bryan-James-Client](https://github.com/thinkful-ei26/Spaced-Repetition-Bryan-James-Client)

[Live deploy at: https://bryan-james-learn-python.herokuapp.com](https://bryan-james-learn-python.herokuapp.com)

#### Demo Credentials:

- UN: TrialAccount
- PW: password123

## Tech Stack:

- React for the frontend
- Redux for state management
- Node for the backend
- Express backend framework
- MongoDB for the database
- JWTs for authentication
- Mocha and Chai for endpoint testing
- Enzyme for React component testing

## Schema

### User

```js
{
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  questions: [
    { _id: mongoose.Schema.Types.ObjectId,
       Question: String,
        Answer: String,
        m : Number,
        next : Number,
        id: Number
    }],
  head: {
         type : Number,
         default: 0
       },
  levelTwoQuestionPool: [
    {
      question: { type: mongoose.Schema.Types.String, ref: 'Question' },
      timesCorrect: Number,
      timesWrong: Number,
    },
  ],
}
```

### QuestionData

```js
{
  Question: { type: String, required: true },
  Answer: { type: String, required: true },
}
```

## API Overview

```text

/api
├── /auth
│   └── POST
│       ├── /login
│       └── /refresh
│   └── DELETE
│       └── /:id
├── /data
│   └── POST
│       └── /
├── /next
│   └── POST
│       └── /
├── /all
│   └── POST
│       └── /
├── /reset
│   └── GET
│       └── /
```
