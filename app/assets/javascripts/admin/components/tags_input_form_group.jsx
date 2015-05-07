class TagsInputFormGroup extends React.Component {
    static get propTypes() {
        return {
            prefetch_url: React.PropTypes.string.isRequired,
            label: React.PropTypes.string
        };
    }
    handleChange(e) {
        console.log(e);
    }
    componentDidMount() {
        var data = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('words'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: {
                url: this.props.prefetch_url
            }
        });

        var input = $(React.findDOMNode(this.refs["input"]));
        input.tagsinput({
            typeaheadjs: {
                displayKey: "name",
                valueKey: "name",
                source: data.ttAdapter()
            }
        });
    }
    render() {
        return (
            <div className="form-group">
              <label className="control-label">{this.props.label}</label>
              <div className="form-control-static" style={{padding: 0}}>
                <input ref="input"
                       type="text"
                       value=""
                       className="form-control"
                       onChange={this.handleChange.bind(this)} />
              </div>
            </div>
        );
    }
}
