import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends Component {

    onSongDelete(id) {
        console.log(id);
        this.props.mutate({ variables: { id } });
            // .then(() => this.props.data.refetch());
    }

    onLike(id) {
        console.log(id);
    }

    renderLyrics() {
        const lyrics = this.props.lyrics;
        return lyrics.map(({ id, content }) => {
            console.log(lyrics);
           return (
               <li key={id} className="collection-item">
                    {content}
                    <i className="material-icons" onClick={() => this.onLike(id)}>thumps_up</i>
                    <i className="material-icons" onClick={() => this.onSongDelete(id)}>delete</i>
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="collection">
                {this.renderLyrics()}
            </ul>
        );
    }
}

const mutation = gql`
mutation DeleteLyric($id: ID) {
    deleteLyric(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(LyricList);