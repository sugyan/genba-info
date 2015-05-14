class GenbaSearchPanel extends React.Component {
    static get propTypes() {
        return {
            params: React.PropTypes.object.isRequired
        };
    }
    render() {
        var content = <GenbaSearchForm {...this.props.params} />;
        return (
            <Panel header="絞り込み" content={content} />
        );
    }
}

class GenbaSearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mindate: this.props.mindate
        };
    }
    static get propTypes() {
        return {
            mindate: React.PropTypes.string
        };
    }
    static get defaultProps() {
        var now = new Date();
        return {
            mindate: [now.getFullYear(), ("0" + (now.getMonth() + 1)).slice(-2), ("0" + now.getDate()).slice(-2)].join("-")
        };
    }
    handleChange(e) {
        this.setState({ mindate: e.target.value });
    }
    render() {
        return (
            <form action="" className="form-horizontal">
              <div className="form-group">
                <label className="col-xs-2 control-label">日付</label>
                <div className="col-xs-10 col-sm-5 form-inline">
                  <input
                    name="mindate"
                    type="date"
                    value={this.state.mindate}
                    className="form-control"
                    onChange={this.handleChange.bind(this)}
                  />
                  <span className="control-label-static"> 〜 </span>
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-offset-2 col-xs-3">
                  <button type="submit" className="btn btn-primary">検索</button>
                </div>
              </div>
            </form>
        );
    }
}
