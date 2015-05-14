class GenbaList extends React.Component {
    static get propTypes() {
        return {
            genbas: React.PropTypes.array.isRequired
        };
    }
    render() {
        return (
            <table className="table table-hover">
              {this.props.genbas.map((genba) => <GenbaListRow key={genba.id} {...genba} />)}
            </table>
        );
    }
}

class GenbaListRow extends React.Component {
    static get propTypes() {
        return {
            start_at: React.PropTypes.string.isRequired,
            title: React.PropTypes.string.isRequired,
            link: React.PropTypes.string.isRequired,
            location: React.PropTypes.string.isRequired,
            idols: React.PropTypes.array.isRequired,
            more_idols: React.PropTypes.bool.isRequired
        };
    }
    render() {
        var idols = this.props.idols.sort((a, b) => {
            if (a.kana > b.kana) {
                return 1;
            }
            if (a.kana < b.kana) {
                return -1;
            }
            return 0;
        }).map((e) => e.name);
        if (this.props.more_idols) {
            idols.push("他");
        }
        return (
            <tr>
              <td>
                <ul className="list-unstyled">
                  <li>
                    <strong>
                      {this.props.start_at}〜
                      &nbsp;
                      <a href={this.props.link}>{this.props.title}</a>
                    </strong>
                  </li>
                  <li>
                    会場: {this.props.location}
                  </li>
                  <li>
                    出演: {idols.join("、")}
                  </li>
                </ul>
              </td>
            </tr>
        );
    }
}
