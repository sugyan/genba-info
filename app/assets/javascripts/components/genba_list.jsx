class GenbaList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            genbas: props.genbas,
            more: this.props.autopager
        };
    }
    static get propTypes() {
        return {
            genbas: React.PropTypes.array.isRequired,
            autopager: React.PropTypes.bool
        };
    }
    handleClick(e) {
        var last = this.state.genbas[this.state.genbas.length - 1]
        $.ajax({
            url: "/index.json",
            data: {
                since: last["epoch"]
            },
            success: (data) => {
                var ids = {};
                this.state.genbas.forEach((e) => {
                    ids[e.id] = true;
                });
                this.setState({
                    genbas: this.state.genbas.concat(data.genbas.filter((e) => ! ids[e.id])),
                    more: ! data.last_page
                });
            }
        });
    }
    render() {
        var button = this.state.more && (
            <div className="text-center">
              <button className="btn btn-link" onClick={this.handleClick.bind(this)}>
                もっと見る
              </button>
            </div>
        );
        return (
            <div>
              <table className="table table-hover">
                <tbody>
                  {this.state.genbas.map((genba) => <GenbaListRow key={genba.id} {...genba} />)}
                </tbody>
              </table>
              {button}
            </div>
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
