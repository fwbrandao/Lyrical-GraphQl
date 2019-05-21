import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends Component {

    onLyricDelete(id) {
        console.log(id);
        this.props.mutate({
            variables: { id },
            refetchQueries: [ this.props.lyrics ]
        });
    }

    onLike(id) {
        console.log(id);
        this.props.mutate({ variables: { id } });
    }

    renderLyrics() {
        const lyrics = this.props.lyrics;
        return lyrics.map(({ id, content, likes }) => {
            console.log(lyrics);
           return (
               <li key={id} className="collection-item">
                    {content}
                    <i className="material-icons" onClick={() => this.onLike(id)}>thumb_up</i>
                    {likes}
                    <i className="material-icons" onClick={() => this.onLyricDelete(id)}>delete</i>
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

// const mutation = gql`
// mutation LikeLyric($id: ID) {
//     likeLyric(id: $id) {
//       id
//       likes
//     }
//   }
// `;

export default graphql(mutation)(LyricList);