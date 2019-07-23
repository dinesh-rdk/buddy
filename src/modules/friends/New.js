import React, { Fragment, PureComponent } from 'react';
import { friendDummy } from '../../data/dummy';
import { connect } from 'react-redux';
import { putFriend } from './actions';
import Form from './Form';

class New extends PureComponent {
  render() {
    return (
      <Fragment>
        <h2>New Friend</h2>
        <Form {...friendDummy} onSubmit={this.props.putFriend} />
      </Fragment>
    );
  }
}

export default connect(
  state => ({}),
  {
    putFriend,
  },
)(New);
