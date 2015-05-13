class SourceSearchPanel extends React.Component {
    static get propTypes() {
        return {
            params: React.PropTypes.object.isRequired
        };
    }
    render() {
        var content = <SourceSearchForm {...this.props.params} />;
        return (
            <Panel header="絞り込み" content={content} />
        );
    }
}

class SourceSearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date
        };
    }
    static get propTypes() {
        return {
            date: React.PropTypes.string
        };
    }
    static get defaultProps() {
        var now = new Date();
        return {
            date: [now.getFullYear(), ("0" + (now.getMonth() + 1)).slice(-2), ("0" + now.getDate()).slice(-2)].join("-")
        };
    }
    handleChange(e) {
        this.setState({ date: e.target.value });
    }
    render() {
        return (
            <form action="" className="form-horizontal">
              <div className="form-group">
                <label className="col-sm-1 control-label">日付</label>
                <div className="col-sm-7">
                  <input
                    name="date"
                    type="date"
                    value={this.state.date}
                    className="form-control"
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-1 col-sm-7">
                  <button type="submit" className="btn btn-primary">検索</button>
                </div>
              </div>
            </form>
        );
    }
}
