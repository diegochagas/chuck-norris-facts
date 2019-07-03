import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadJoke, resetJoke } from '../actions';
import ProgressBar from './ProgressBar';
import ErrorMessage from './ErrorMessage';
import './Jokes.scss';
import WarningMessage from './WarningMessage';

const Jokes = class Jokes extends React.Component {
    constructor(props) {
        super(props);
        this.onLoadJoke = this.onLoadJoke.bind(this);
        this.numberOfCallsToTheSameJoke = 0;
    }

    componentDidMount() {
        this.onLoadJoke();
    }

    componentWillUnmount() {
        this.props.resetJoke();
    }

    componentWillReceiveProps(nextProps) {
        if(this.isSameJoke(nextProps)) {
            this.numberOfCallsToTheSameJoke++;
            if (this.numberOfCallsToTheSameJoke <= 10) {
                this.onLoadJoke();
            }
        }
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
                { this.numberOfCallsToTheSameJoke > 10 ? (
                    <WarningMessage
                        title={"Sorry!"}
                        message={"We probably don't have more jokes about this category."} 
                    />
                ) : null }
                { jokes.length > 0 ? this.renderButtons() : null }
            </div>
        );
    }

    renderJoke() {
        return (
            <ul className="joke">
                {this.props.jokes.map(joke => {
                    const { icon_url, id, updated_at, value } = joke;
                    return (
                        <li className="joke__item" key={id} data-test="joke">
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
                <button onClick={this.onLoadJoke} className="btn">
                    Load another joke
                </button>
                <Link 
                    to="/" 
                    className="btn btn-secondary"
                >
                    Back
                </Link>
            </div>
        );
    }

    onLoadJoke() {
        const { category } = getCategoryProp(this.props.match);
        this.props.loadJoke(category);
    }

    formatDate(dateText) {
        const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const date = new Date(dateText);
        if (Object.prototype.toString.call(date) !== "[object Date]" || isNaN(date.getTime())) {
            return "";
        }
        const day = `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`;
        const hour = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        return `${day} ${hour}`;
    }

    isSameJoke (nextProps) {
        const noErrors = nextProps.errorJokes === null;
        const notAreLoading  = nextProps.isLoadingJokes === false;
        const sameJokes = nextProps.jokes.length === this.props.jokes.length;
        return noErrors && notAreLoading && sameJokes;
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