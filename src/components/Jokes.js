import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadJoke, resetJoke } from '../actions';
import ProgressBar from './ProgressBar';
import ErrorMessage from './ErrorMessage';
import './Jokes.scss';

const Jokes = class Jokes extends React.Component {
    constructor(props) {
        super(props);
        this.onClickLoadJoke = this.onClickLoadJoke.bind(this);
    }

    componentDidMount() {
        const category = getCategoryProp(this.props.match);
        this.props.loadJoke(category);
    }

    render() {
        const { jokes, isLoadingJokes, errorJokes } = this.props;
        const category = getCategoryProp(this.props.match);
        return (
            <div className="jokes" data-test="jokes">
                <div className="box-title">
                    <h2>
                        <span>Jokes category: </span>
                        <span className="box-title__name">{ category }</span>
                    </h2>
                </div>
                { jokes.length > 0 ? this.renderJoke() : null }
                { isLoadingJokes ? (<ProgressBar />) : null }
                { errorJokes !== null ? (<ErrorMessage message={errorJokes} />) : null }
                { jokes.length > 0 ? this.renderButtons() : null }
            </div>
        );
    }

    renderJoke() {
        return (
            <ul className="joke">
                {this.props.jokes.map((joke, index) => {
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
                })}
            </ul>
        );
    }

    renderButtons () {
        return (
            <div className="buttons">
                <button onClick={this.onClickLoadJoke} className="btn">
                    Load another joke
                </button>
                <Link 
                    to="/" 
                    className="btn btn-secondary" 
                    onClick={this.props.resetJoke}
                >
                    Back
                </Link>
            </div>
        );
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

const getCategoryProp = match => match === undefined ? "" : match.params.category;

const mapStateToProps = ({ jokes, isLoadingJokes, errorJokes }) => ({
    jokes, isLoadingJokes, errorJokes
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    loadJoke: () => dispatch(loadJoke(getCategoryProp(ownProps.match))),
    resetJoke: () => dispatch(resetJoke())
});

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);