import React from 'react';
import Definition from './Definition';
class DefinitionsList extends React.Component {
    render() {
        const { data } = this.props;

        return (
            <dl>
                {data.map((item) => (
                    <Definition key={item.id} dt={item.dt} dd={item.dd} />
                ))}
            </dl>
        );
    }
}

export default DefinitionsList;