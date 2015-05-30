class InputIdols extends React.Component {
    static get propTypes() {
        return {
            name: React.PropTypes.string.isRequired
        };
    }
    componentDidMount() {
        var input = $(React.findDOMNode(this.refs["input"]));
        input.tagsinput({
            typeaheadjs: {
                displayKey: "name",
                valueKey: "name",
                source: new Bloodhound({
                    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('words'),
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    identify: (obj) => { return obj["id"]; },
                    prefetch: {
                        url: "/idols.json"
                    }
                })
            }
        });
    }
    render() {
        return (
            <input
              ref="input"
              type="text"
              name={this.props.name}
              className="form-control"
            />
        );
    }
}
