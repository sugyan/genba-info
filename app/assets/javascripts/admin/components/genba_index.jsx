class GenbaIndex extends React.Component {
    static get propTypes() {
        return {
            genbas: React.PropTypes.array.isRequired
        };
    }
    render() {
        return (
            <GenbaIndexTable genbas={this.props.genbas} />
        );
    }
}
