import React from 'react';
import { connect } from 'react-redux';
import { getFriend, putFriend } from './actions';
import Form from './Form';

class Edit extends React.Component {
  componentDidMount() {
    const {
      getFriend,
      friend,
      match: {
        params: { id },
      },
    } = this.props;
    if (!friend) {
      getFriend(id);
    }
  }

  render() {
    const { friend, putFriend } = this.props;
    return friend ? (
      <div>
        <h2>Edit</h2>
        <Form {...friend} onSubmit={putFriend} />
      </div>
    ) : (
      <h4>Loading...</h4>
    );
  }
}

export default connect(
  (state, ownProps) => {
    const {
      friends: { [ownProps.match.params.id]: friend },
    } = state;
    return { friend };
  },
  {
    getFriend,
    putFriend,
  },
)(Edit);
