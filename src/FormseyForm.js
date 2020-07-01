import React from 'react';
import '@formsey/core';
import '@formsey/fields-native';

export class FormseyForm extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return <formsey-form ref="form" src="https://cdn.formsey.com/Ib3epFwXQ6Fn0pdZ5VVK/A7I059xGHZCfrLdi0CPH"></formsey-form>;
  }

  componentDidMount() {
    this.refs.form.addEventListener('change', e => { 
      if (this.props.onChange) {
        this.props.onChange(e.detail);
      }
    });
  }
}
