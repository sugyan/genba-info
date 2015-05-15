class SearchForm extends React.Component {
    static get propTypes() {
        return {
            params: React.PropTypes.object.isRequired,
            idols: React.PropTypes.array.isRequired
        };
    }
    render() {
        return (
            <div className="panel panel-default">
              <div className="panel-heading">絞り込み条件</div>
              <div className="panel-body">
                <SearchMainForm {...this.props.params} idols={this.props.idols} />
              </div>
            </div>
        );
    }
}

class SearchMainForm extends React.Component {
    constructor(props) {
        this.state = {
            mindate: props.mindate
        };
    }
    static get propTypes() {
        return {
            mindate: React.PropTypes.string.isRequired,
            idols: React.PropTypes.array.isRequired
        }
    }
    handleChange(e) {
        var update = {};
        update[e.target.name] = e.target.value;
        this.setState(update);
    }
    render() {
        return (
            <form className="form-horizontal">
              <div className="form-group">
                <label className="col-xs-3 col-sm-2 control-label">日付</label>
                <div className="col-xs-9 form-inline">
                  <input
                    type="date"
                    name="mindate"
                    value={this.state.mindate}
                    className="form-control"
                    onChange={this.handleChange.bind(this)}
                  />
                  <span className="control-label-static">&nbsp;以降</span>
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-3 col-sm-2 control-label">アイドル</label>
                <div className="col-xs-9">
                  <IdolTagsInput idols={this.props.idols} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-offset-3 col-sm-offset-2 col-xs-9">
                  <button type="submit" className="btn btn-primary">検索</button>
                </div>
              </div>
            </form>
        );
    }
}

class IdolTagsInput extends React.Component {
    constructor(props) {
        this.state = {
            idols: props.idols
        };
    }
    static get propTypes() {
        return {
            idols: React.PropTypes.array.isRequired
        };
    }
    componentDidMount() {
        var input = $(React.findDOMNode(this.refs["tagsinput"]));
        input.tagsinput({
            itemValue: "id",
            itemText: "name",
            typeaheadjs: {
                displayKey: "name",
                source: new Bloodhound({
                    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
                    queryTokenizer: (s) => [s],
                    prefetch: {
                        url: "/idols.json",
                        cache: false
                    }
                })
            }
        });
        this.state.idols.forEach((e) => {
            input.tagsinput("add", e);
        });
    }
    render() {
        return (
            <input
              ref="tagsinput"
              type="text"
              name="idols"
              className="form-control"
            />
        );
    }
}
