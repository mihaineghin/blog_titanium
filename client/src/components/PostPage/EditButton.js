import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditButton extends Component {
  render() {
    return (
      <Link to="/" className="edit_button" >
        <div className="edit-icon">
          <i className="far fa-edit" />
        </div>
      </Link>
    );
  }
}

export default EditButton;
