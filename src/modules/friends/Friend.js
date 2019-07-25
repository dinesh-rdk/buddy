import React from 'react';
import { Link } from 'react-router-dom';

export default ({ id, data, starFriend, deleteFriend }) => {
  return (
    <tr>
      <td>
        <Link to={`/friends/${id}/edit`}>{data.name}</Link>
      </td>
      <td>{data.phone}</td>
      <td>{data.email}</td>
      <td>
        {data.starred ? (
          'Starred!'
        ) : (
          <button className="btn btn-success" onClick={() => starFriend(id)}>
            Star
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-success" onClick={() => deleteFriend(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
