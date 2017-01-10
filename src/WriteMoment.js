import React from 'react';
import TextField from 'material-ui/TextField';

const WriteMoment = () => (
  <div>
    <TextField
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
      fullWidth={true}
    /><br />
    <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
      rows={2}
      fullWidth={true}
    /><br />
  </div>
);

export default WriteMoment;