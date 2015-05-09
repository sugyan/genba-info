class GenbaIndexTable extends React.Component {
    static get propTypes() {
        return {
            genbas: React.PropTypes.array.isRequired
        };
    }
    render() {
        var rows = this.props.genbas.map((genba) => <GenbaIndexTableRow key={genba.id} {...genba} />)
        return (
            <table className="table table-hover">
              <thead>
                <th>ID</th>
                <th>タイトル</th>
                <th>日時</th>
                <th colSpan="3"></th>
              </thead>
              {rows}
            </table>
        );
    }
}

class GenbaIndexTableRow extends React.Component {
    static get propTypes() {
        return {
            id: React.PropTypes.number.isRequired,
            title: React.PropTypes.string.isRequired,
            start_at: React.PropTypes.string.isRequired,
            links: React.PropTypes.object.isRequired
        };
    }
    render() {
        return (
            <tr>
              <td>{this.props.id}</td>
              <td>{this.props.title}</td>
              <td>{this.props.start_at}</td>
              <td><Link href={this.props.links.show} text="詳細" classes={[]} /></td>
              <td><Link href={this.props.links.edit} text="編集" classes={[]} /></td>
              <td><Link href={this.props.links.delete} text="削除" classes={[]} method="delete" confirm="削除しますか？" /></td>
            </tr>
        );
    }
}
