import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends Component {

    onLyricDelete(id) {
        console.log(id);
        this.props.mutate({
            variables: {
                id
            }
        })
    }

    onLike(id, likes) {
        console.log(id);
        this.props.mutate({
            variables: { id },
            optimisticResponce: {
                __typename: 'Mutation',
                likeLyric: {
                    id,
                    __typename: 'LyricType',
                    likes: likes + 1
                }
            }
         });
    }

    renderLyrics() {
        const lyrics = this.props.lyrics;
        return lyrics.map(({ id, content, likes }) => {
           return (
               <li key={id} className="collection-item">
                    {content}
                    <div className="vote-box">
                        {likes}
                        <i className="material-icons" onClick={() => this.onLike(id, likes)}>thumb_up</i>
                        <i className="material-icons" onClick={() => this.onLyricDelete(id)}>delete</i>
                    </div>
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

const mutationDelete = gql`
mutation DeleteLyric($id: ID) {
    deleteLyric(id: $id) {
      id
    }
  }
`;

const mutationLike = gql`
mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutationLike)(LyricList);