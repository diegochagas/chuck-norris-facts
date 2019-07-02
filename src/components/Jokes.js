import React from 'react';
import { connect } from 'react-redux';
import { loadJoke } from '../actions';
import './Jokes.scss';

class Jokes extends React.Component {
    constructor(props) {
        super(props);
        this.onClickLoadJoke = this.onClickLoadJoke.bind(this);
        this.state = { jokes: [] };
    }

    componentDidMount() {
        this.props.loadJoke(this.props.match.params.category);
    }

    render() {
        return (
            <div className="jokes" data-test="joke">
                <div className="category-title">
                    <h2>
                        <span>Category: </span>
                        <span className="category-title__name">
                            { this.props.jokes.length > 0 ? this.props.jokes[0].categories : null }
                        </span>
                    </h2>
                </div>
                <ul className="joke">
                    { this.props.jokes.length > 0 ? this.renderJoke() : null }
                </ul>
                <button 
                    onClick={this.onClickLoadJoke}
                    className="btn"
                >
                    Load another joke
                </button>
            </div>
        );
    }

    renderJoke() {
        return this.props.jokes.map((joke, index) => {
            const { icon_url, value, updated_at } = joke;
            return (
                <li className="joke__item" key={index}>
                    <div className="category-content">
                        <span className="category-content__date">{this.formatDate(updated_at)}</span>
                        <img src={icon_url} alt="icon url" className="category-content__icon" />
                        <span className="category-content__description">
                            {value}
                        </span>
                    </div>
                </li>
            );
        });
    }

    onClickLoadJoke() {
        const { category } = this.props.match.params;
        this.props.loadJoke(category);
    }

    formatDate(dateText) {
        const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const date = new Date(dateText);
        const day = `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`;
        const hour = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        return `${day} ${hour}`;
    }
}

const mapStateToProps = ({ jokes, isLoadingJokes, errorJokes }) => ({
    jokes, isLoadingJokes, errorJokes
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadJoke: () => dispatch(loadJoke(ownProps.match.params.category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);