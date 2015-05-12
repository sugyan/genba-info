class SourceIndexTable extends React.Component {
    static get propTypes() {
        return {
            sources: React.PropTypes.array.isRequired
        };
    }
    render() {
        return (
            <table className="table table-hover">
              <thead>
                <th>日時</th>
                <th>タイトル</th>
                <th>会場</th>
              </thead>
              {this.props.sources.map((source) => <SourceIndexTableRow key={source.id} {...source} />)}
            </table>
        );
    }
}

class SourceIndexTableRow extends React.Component {
    static get propTypes() {
        return {
            title: React.PropTypes.string.isRequired,
            link: React.PropTypes.string.isRequired,
            location: React.PropTypes.string,
            start_at: React.PropTypes.string.isRequired
        };
    }
    render() {
        var location = this.props.location || "";
        if (location.length > 16) {
            location = location.slice(0, 16) + "...";
        }
        return (
            <tr>
              <td className="text-nowrap">{this.props.start_at}</td>
              <td><a href={this.props.link}>{this.props.title}</a></td>
              <td>{location}</td>
            </tr>
        );
    }
}
