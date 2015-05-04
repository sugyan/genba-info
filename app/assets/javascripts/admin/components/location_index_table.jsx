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
                <th>ID</th>
                <th>名前</th>
                <th>住所</th>
                <th colSpan="3"></th>
              </thead>
              {rows}
            </table>
        );
    }
}

class LocationIndexTableRow extends React.Component {
    static get propTypes() {
        return {
            id: React.PropTypes.number.isRequired,
            name: React.PropTypes.string.isRequired,
            address: React.PropTypes.string.isRequired,
            links: React.PropTypes.object.isRequired
        };
    }
    render() {
        return (
            <tr>
              <td>{this.props.id}</td>
              <td>{this.props.name}</td>
              <td>{this.props.address}</td>
              <td><Link href={this.props.links.show} text="詳細" classes={[]} /></td>
              <td><Link href={this.props.links.edit} text="編集" classes={[]} /></td>
              <td><Link href={this.props.links.delete} text="削除" classes={[]} method="delete" confirm="削除しますか？" /></td>
            </tr>
        );
    }
}
