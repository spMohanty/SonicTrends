import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, InputGroup } from 'react-bootstrap';
import { WithContext as ReactTags } from 'react-tag-input';
import './STSearchBar.css';

class STSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tags: [{ id: 1, text: "Thailand" }, { id: 2, text: "India" }],
        suggestions: ['Indonesia', 'Canada', 'USA'],
        placeholder: "Add a new search term"
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleDelete(i) {
      let tags = this.state.tags;
      tags.splice(i, 1);
      this.setState({tags: tags});
  }

  handleAddition(tag) {
      let tags = this.state.tags;
      tags.push({
          id: tags.length + 1,
          text: tag
      });
      this.setState({tags: tags});
  }

  handleDrag(tag, currPos, newPos) {
      let tags = this.state.tags;

      // mutate array
      tags.splice(currPos, 1);
      tags.splice(newPos, 0, tag);

      // re-render
      this.setState({ tags: tags });
  }

  handleInputChange(e){
    // console.log(e);
  }

  render() {
      const { tags, suggestions } = this.state;
      return (
          <div>
            <ReactTags tags={tags}
              classNames = {{
                tagInputField: 'form-control form-control-lg STSearchBarInputField ',
                tag: 'btn btn-primary btn-sm STSearchBarTag'
              }}
              placeholder={this.state.placeholder}
              suggestions={suggestions}
              handleDelete={this.handleDelete}
              handleAddition={this.handleAddition}
              handleDrag={this.handleDrag}
              handleInputChange={this.handleInputChange}
              allowDeleteFromEmptyInput={true}

            />
          </div>
      )
  }
}

export default STSearchBar;
