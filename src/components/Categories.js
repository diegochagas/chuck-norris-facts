import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadCategories } from '../actions';
import './Categories.scss';
import ProgressBar from './ProgressBar';
import ErrorMessage from './ErrorMessage';

class Categories extends React.Component {
    componentDidMount () {
        this.props.loadCategories();
    }

    render () {
        const { categories, isLoadingCategories, errorCategories } = this.props;
        return (
            <div className="categories" data-test="categories">
                <div className="box-title">
                    <h2>Categories</h2>
                </div>
                { categories.length > 0 ? this.renderCategories(): null }
                { isLoadingCategories ? (<ProgressBar/>) : null }
                { errorCategories !== null ? (<ErrorMessage message={errorCategories} />) : null }
            </div>
        );
    }

    renderCategories() {
        return (
            <ol className="categories__list">
                {this.props.categories.map(categorie => {
                    return (
                        <li key={categorie}>
                            <Link 
                                className="categories__list__item" 
                                to={`/jokes/${categorie}`}
                            >
                                {categorie}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        );
    }
}

const mapStateToProps = ({ categories, isLoadingCategories, errorCategories }) => ({
    categories, isLoadingCategories, errorCategories    
});

const mapDispatchToProps = dispatch => ({
    loadCategories: () => dispatch(loadCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);