import React from 'react';
import Input from './Input';

export default class Form extends React.Component {
  state = {
    name: this.props.name || '',
    phone: this.props.phone || '',
    email: this.props.email || '',
    work: this.props.work || '',
    city: this.props.city || '',
  };

  onChange = (title, value) => {
    this.setState({ [title]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { name, phone, email, work, city } = this.state;
    return (
      <form onSubmit={event => this.onSubmit(event)}>
        <Input title="name" value={name} onChange={this.onChange} />
        <Input title="phone" value={phone} onChange={this.onChange} />
        <Input title="email" value={email} onChange={this.onChange} />
        <Input title="work" value={work} onChange={this.onChange} />
        <Input title="city" value={city} onChange={this.onChange} />
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
