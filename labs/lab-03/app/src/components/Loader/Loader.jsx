import React from 'react';
import './Loader.css';

class Loader extends React.PureComponent {

    render() {
        return (
            <div className="Loader">
                <div className="Loader-icon"></div>
            </div>
        );
    }
}

export default Loader;