class InputIdolTags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }
    static get propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            values: React.PropTypes.array
        };
    }
    static get defaultProps() {
        return {
            values: []
        };
    }
    componentDidMount() {
        var data = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('words'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: {
                url: "/admin/idols.json",
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
        this.props.values.forEach((e) => {
            input.tagsinput("add", e);
        });
    }
    render() {
        return (
            <div className="form-control-static" style={{ padding: 0 }}>
              <input
                name={this.props.name}
                ref="input"
                type="hidden"
                readOnly={true}
              />
            </div>
        );
    }
}
