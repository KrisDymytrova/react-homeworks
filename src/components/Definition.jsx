import React from 'react';
class Definition extends React.Component {
    render() {
        const { dt, dd } = this.props;

        return (
            <React.Fragment>
                <dt>{dt}</dt>
                <dd>{dd}</dd>
            </React.Fragment>
        );
    }
}

Definition.defaultProps = {
    dt: '',
    dd: '',
};

export default Definition;