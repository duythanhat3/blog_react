import {connect} from 'react-redux';
import Home from './components/';

const mapStateToProps = (state) => {
    return {
        //object using into component
    };
};

const mapDispatchToProps = (dispatch) => {
    // dispatch action
    return {
        // action arrow function
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)