class TagsInputFormGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: []
        };
    }
    static get propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            prefetch_url: React.PropTypes.string.isRequired,
            label: React.PropTypes.string
        };
    }
    componentDidMount() {
        var data = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('words'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: {
                url: this.props.prefetch_url,
                cache: false
            }
        });

        var input = $(React.findDOMNode(this.refs["input"]));
        input.tagsinput({
            itemValue: "id",
            itemText: "name",
            typeaheadjs: {
                displayKey: "name",
                source: data.ttAdapter()
            }
        });
        input.on("itemAdded itemRemoved", (e) => {
            this.setState({ values: input.val().split(/,/) });
        });
    }
    render() {
        var values = this.state.values.map((e) => <input key={e} type="hidden" name={this.props.name + "[]"} value={e} />)
        return (
            <div className="form-group">
              <label className="control-label">{this.props.label}</label>
              <div className="form-control-static" style={{padding: 0}}>
                <input
                  ref="input"
                  type="hidden"
                  readOnly={true}
                />
              </div>
              {values}
            </div>
        );
    }
}
