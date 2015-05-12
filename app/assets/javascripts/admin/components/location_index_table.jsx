class LocationIndexTable extends React.Component {
    static get propTypes() {
        return {
            locations: React.PropTypes.array.isRequired
        };
    }
    render() {
        var rows = this.props.locations.map((location) => <LocationIndexTableRow key={location.id} {...location} />)
        return (
            <table className="table table-hover">
              <thead>
                <th>名前</th>
                <th>住所</th>
              </thead>
              {rows}
            </table>
        );
    }
}

class LocationIndexTableRow extends React.Component {
    static get propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            address: React.PropTypes.string.isRequired,
            link: React.PropTypes.string.isRequired
        };
    }
    render() {
        return (
            <tr>
              <td><a href={this.props.link}>{this.props.name}</a></td>
              <td>{this.props.address}</td>
            </tr>
        );
    }
}
