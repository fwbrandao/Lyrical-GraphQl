import React, { Component } from 'react';

class LyricList extends Component {
    renderLyrics() {
        const lyrics = this.props.lyrics;
        return lyrics.map(({ id, content }) => {
            console.log(lyrics);
           return (
               <li key={id} className="collection-item">
                    {content}
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

export default LyricList;