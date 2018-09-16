import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
// import axios from 'axios';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component{
        state = {
            error: null,
        }
        componentDidMount () {
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({error});
            });
        }
        errorConfirmedHandler = () => {
            this.setState({error: null});
        }
        render = () => {
            return (
                <React.Fragment>
                    <Modal 
                        show={this.state.error}
                        clicked={this.errorConfirmedHandler}>
                        {this.state.error?this.state.error.message: null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            );
        }
    }
}

export default withErrorHandler;