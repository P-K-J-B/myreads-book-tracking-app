import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShelfSelector extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        allBooks: PropTypes.array.isRequired,
        moveToShelf: PropTypes.func.isRequired
    }

    assignNewShelf = (chosenShelf) => {
        this.props.moveToShelf(this.props.book, chosenShelf.target.value);
    }

    render() {
        const { book, allBooks } = this.props;
        let selectedShelf = 'none';
        for (let item of allBooks) {
            if (item.id === book.id) {
                selectedShelf = item.shelf;
            }
        }
        return (
            <div className="book-shelf-changer">
                <select defaultValue={selectedShelf} onChange={this.assignNewShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>                
        )
    }
}

export default ShelfSelector