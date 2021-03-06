import React from 'react';

const EditButton = props =>
  (
    <div className="edit_button" onClick={props.onClick} >
      <div className="edit-icon">
        <i className="far fa-edit" />
      </div>
    </div>
  );

export default EditButton;
