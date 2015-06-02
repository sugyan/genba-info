class InputLocation extends React.Component {
    static get propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            value: React.PropTypes.string.isRequired
        };
    }
    componentDidMount() {
        var locations = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace("words"),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            identify: (obj) => { return obj["id"]; },
            prefetch: {
                url: "/locations.json",
            }
        });
        var input = $(React.findDOMNode(this.refs["input"]));
        input.typeahead({
            highlight: true
        }, {
            source: locations,
            display: "name",
            templates: {
                suggestion: (e) => {
                    return $("<div>").text(e.name + " (" + e.address + ")");
                }
            }
        });
        $(input).parent(".twitter-typeahead").css("display", "inherit");
    }
    render() {
        return (
            <div>
              <input
                ref="input"
                type="text"
                name={this.props.name}
                defaultValue={this.props.value}
                className="form-control"
              />
            </div>
        );
    }
}
