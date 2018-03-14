import React from 'react';

const EditButton = props =>
  (
    <div className="delete_button" onClick={props.onClick}>
      <div className="edit-icon">
        <i className="fas fa-times" />
      </div>
    </div>
  );

export default EditButton;
