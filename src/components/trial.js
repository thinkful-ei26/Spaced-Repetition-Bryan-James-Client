import React, { Component } from 'react'
export default class Trial extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLesson: 0,
      maxLessons: 10,
    }
  }
  nextLesson() {
    let nextL = this.state.currentLesson + 1
    if (nextL === this.state.maxLessons) {
      nextL = 0
    }
    this.setState({
      currentLesson: nextL,
    })
  }
  render() {
    let lessons = [
      'A Python data type that holds an ordered collection of values, which can be of any type. This is equivalant to an array in many other languages. Python lists are mutable, implying that they can be changed once created.',
      'Variables are assigned values using the = operator, which is not to be confused with the == sign used for testing equality. A variable can hold almost any type of value such as lists, dictionaries, functions.',
      <div>
        Python builds functions using the syntax:<code className=''> def function_name(variable): </code>Functions can
        be stand-alone or can return values. Functions can also contain other functions.
      </div>,
      'Strings store characters and have many built-in convenience methods that let you modify their content.',
      'Using len() returns the number of _top-level_ items contained in the object being queried. Length of string',
      'Print is a function to display the output of a program. Using the parenthesized version is arguably more consistent.',
      'The range function returns a list of integers, the sequence of which is defined by the arguments passed to it. Often used in for loops.',
      'A while loop permits code to execute repeatedly until a certain condition is met. This is useful if the number of iterations required to complete a task is unknown prior to flow entering the loop.',
      'Using the str() function allows you to represent the content of a variable as a string, provided that the data type of the variable provides a neat way to do so. str() does not change the variable in place, it returns a stringified version of it.',
      'Superclass is a name given to the class that is being inherited from.',
    ]
    return (
      <div className='trial container'>
        {/* <div className="center">
          Here learning happens
        </div> */}
        <div className='lessonsText card'>
          <div className='center flow-text'>{lessons[this.state.currentLesson]}</div>
          <div className='center'>
            <a
              href='#next'
              className='waves-effect waves-teal lighten-2 btn-flat center'
              onClick={() => {
                this.nextLesson()
              }}>
              Next Lesson
            </a>
          </div>
          {/* <button onClick={() => { this.nextLesson() }}>Next Lesson</button> */}
          {/* <Link to='/'>Back to Home!</Link> */}
        </div>
      </div>
    )
  }
}
