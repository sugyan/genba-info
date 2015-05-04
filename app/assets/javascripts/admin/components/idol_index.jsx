class IdolIndex extends React.Component {
    static get propTypes() {
        return {
            idols: React.PropTypes.array.isRequired
        };
    }
    render() {
        return (
            <IdolIndexTable idols={this.props.idols} />
        );
    }
}
