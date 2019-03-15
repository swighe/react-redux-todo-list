import FilterLink from '../components/FilterLink';
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => {
    return {
        isCurrent: state.visibilityFilter === props.filter,
        label: props.label
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: () => dispatch({type: 'SET_VISIBILITY_FILTER', filter: props.filter})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)