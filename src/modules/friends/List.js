import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Friend from './Friend';
import { getAllFriends, starFriend, deleteFriend } from './actions';

class List extends Component {
  componentDidMount() {
    this.props.getAllFriends();
  }

  render() {
    const { friends, starFriend, deleteFriend } = this.props;
    return (
      <Fragment>
        <h1>Friends</h1>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Star</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(friends).map(key => (
                <Friend
                  key={key}
                  id={key}
                  data={friends[key]}
                  starFriend={starFriend}
                  deleteFriend={deleteFriend}
                />
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/friends/new">
          <button className="btn btn-info">Add Friend</button>
        </Link>
      </Fragment>
    );
  }
}

export default connect(
  state => {
    const { friends } = state;
    return { friends };
  },
  {
    starFriend: starFriend,
    deleteFriend: deleteFriend,
    getAllFriends,
  },
)(List);
