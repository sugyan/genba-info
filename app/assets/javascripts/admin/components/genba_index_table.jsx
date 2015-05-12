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
                <th>日時</th>
                <th>タイトル</th>
                <th>会場</th>
                <th>状態</th>
              </thead>
              {rows}
            </table>
        );
    }
}

class GenbaIndexTableRow extends React.Component {
    static get propTypes() {
        return {
            title: React.PropTypes.string.isRequired,
            start_at: React.PropTypes.string.isRequired,
            location: React.PropTypes.object.isRequired,
            status: React.PropTypes.bool.isRequired,
            link: React.PropTypes.string.isRequired
        };
    }
    render() {
        return (
            <tr className={this.props.status || "warning"}>
              <td className="text-nowrap">{this.props.start_at}</td>
              <td><a href={this.props.link}>{this.props.title}</a></td>
              <td>{this.props.location.name}</td>
              <td>{this.props.status ? "公開" : "下書き"}</td>
            </tr>
        );
    }
}
