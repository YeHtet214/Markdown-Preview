import React, { useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const defaultMark = `
  # Default Markdown
  ## My Free Code Camp Front End Libraries Project
  ** bold ** text 
  \`<div></div>\`
  \`\`\`
   function blockCode() {
     return 'a string is returned in a block code'
   }
  \`\`\`

  - A list of item
    - Random Quote Generator
      - Markdown Preview
        - and so on

        There's also [links](https://www.freecodecamp.org)
        > Block Quotes!


        ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)


`


class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {content: defaultMark};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      content: e.target.value
    });
  }

  render() {
    return (
      <div className="container py-3">
        <h1 className="my-3 text-warning h2 text-center">Convert Your Markdown to HTML</h1>
        <div className="row gx-3">
          <div className="col-md-6">
           <div className='bg-white shadow py-3 px-2'>
           <header className='border-bottom mb-2 border-warning'><h2 className="h5 text-secondary">Editor</h2></header>
            <textarea className='form-control fs-4 mb-3 ' id="editor" value={this.state.content} onChange={this.handleChange}></textarea>
           </div>
          </div>

          <div className="col-md-6 " id="preview">
            <div className='shadow-lg bg-white mt-3 mt-md-0 rounded p-3'>
            <header className='border-bottom border-warning mb-2'>
            <h2 className='h5 text-secondary'>Previewer</h2>
            </header>
            <ReactMarkdown>
              {this.state.content}
            </ReactMarkdown>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default App;