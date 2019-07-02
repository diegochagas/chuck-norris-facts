import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadCategories } from '../actions';
import './Categories.scss';

class Categories extends React.Component {
    componentDidMount () {
        this.props.loadCategories();
    }

    render () {
        return (
            <div className="categories" data-test="categories">
                <ol className="categories__list">
                    {this.props.categories.length > 0 ? this.renderCategories() : null}
                </ol>
            </div>
        );
    }

    renderCategories() {
        return this.props.categories.map(categorie => {
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
        });
    }
}

const mapStateToProps = ({ categories, isLoadingCategories, errorCategories }) => ({
    categories, isLoadingCategories, errorCategories    
});

const mapDispatchToProps = dispatch => ({
    loadCategories: () => dispatch(loadCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);