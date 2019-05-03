import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '' }
    }

    onSubmit(event) {
        event.preventDefault();


    }

    render() {
        return (
            <div>
                <h3>Create a new song.</h3>
                <form onSubmit={this.this.onSubmit.bind(this)}>
                    <label>Song title:</label>
                    <input
                        onChange={event => this.setState({ title: event.target.value })}
                        value={this.state.value}
                    />
                </form>
            </div>
         );
    }
}

const mutation = gql`
mutation {
    addSong(title: ) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);