class LocationIndex extends React.Component {
    static get propTypes() {
        return {
            locations: React.PropTypes.array.isRequired
        };
    }
    render() {
        return (
            <LocationIndexTable locations={this.props.locations} />
        );
    }
}
