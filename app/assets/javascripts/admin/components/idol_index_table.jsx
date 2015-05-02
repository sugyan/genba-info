class IdolIndexTable extends React.Component {
    static get propTypes() {
        return {
            idols: React.PropTypes.array.isRequired
        };
    }
    render() {
        var rows = this.props.idols.map((idol) => <IdolIndexTableRow key={idol.id} {...idol} />)
        return (
            <table className="table table-hover">
              <thead>
                <th>ID</th>
                <th>名前</th>
                <th colSpan="3"></th>
              </thead>
              {rows}
            </table>
        );
    }
}

class IdolIndexTableRow extends React.Component {
    static get propTypes() {
        return {
            id: React.PropTypes.number.isRequired,
            name: React.PropTypes.string.isRequired,
            links: React.PropTypes.object.isRequired
        };
    }
    render() {
        return (
            <tr>
              <td>{this.props.id}</td>
              <td>{this.props.name}</td>
              <td><a href={this.props.links.show}>詳細</a></td>
              <td><a href={this.props.links.edit}>編集</a></td>
              <td><a href="">削除</a></td>
            </tr>
        );
    }
}
