import React from 'react';

class Joke extends React.Component {
    constructor(props) {
        super(props);
        this.onClickLoadJoke = this.onClickLoadJoke.bind(this);
    }

    render() {
        return (
            <div className="joke" data-test="joke">
                Joke
                <button onClick={this.onClickLoadJoke}>Carregar outra</button>
            </div>
        );
    }

    onClickLoadJoke() {
        const { category } = this.props.match.params;
        console.log(category);
    }
}

export default Joke;