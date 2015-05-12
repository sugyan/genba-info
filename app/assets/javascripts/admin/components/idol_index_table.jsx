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
                <th>名前</th>
                <th>ふりがな</th>
              </thead>
              {rows}
            </table>
        );
    }
}

class IdolIndexTableRow extends React.Component {
    static get propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            kana: React.PropTypes.string.isRequired,
            link: React.PropTypes.string.isRequired
        };
    }
    render() {
        return (
            <tr>
              <td><a href={this.props.link}>{this.props.name}</a></td>
              <td>{this.props.kana}</td>
            </tr>
        );
    }
}
