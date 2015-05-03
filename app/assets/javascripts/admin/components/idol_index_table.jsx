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
              <td><Link href={this.props.links.show} text="詳細" classes={[]} /></td>
              <td><Link href={this.props.links.edit} text="編集" classes={[]} /></td>
              <td><a href="">削除</a></td>
            </tr>
        );
    }
}
