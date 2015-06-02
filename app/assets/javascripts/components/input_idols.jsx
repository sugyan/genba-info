class InputIdols extends React.Component {
    constructor(props) {
        this.state = {
            values: props.values
        };
    }
    static get propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            values: React.PropTypes.array.isRequired
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
        input.on('itemAdded itemRemoved', (e) => {
            this.setState({ values: input.tagsinput("items") });
        });
    }
    render() {
        var values = this.state.values.map((e, i) => {
            return (
                <input
                  key={i}
                  type="hidden"
                  name={this.props.name + "[]"}
                  value={e}
                />
            )
        })
        return (
            <div>
              {values}
              <input
                ref="input"
                className="form-control"
                defaultValue={this.props.values.join(",")}
              />
            </div>
        );
    }
}
