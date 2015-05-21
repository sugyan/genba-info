class SelectLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "未選択",
            value: props.value || ""
        };
    }
    static get propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            value: React.PropTypes.string
        };
    }
    componentDidMount() {
        var input = $(React.findDOMNode(this.refs["input"]));
        var locations = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace("words"),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            identify: (obj) => { return obj["id"]; },
            prefetch: {
                url: "/admin/locations.json",
                cache: false
            }
        });
        locations.initialize().done(() => {
            var data = locations.index.datums[this.props.value];
            if (data) {
                this.setState({
                    selected: data["name"],
                    value: data["id"]
                });
            }
            var ids = Object.keys(locations.index.datums).sort((a, b) => {
                var elem = {
                    a: locations.index.datums[a]["geohash"],
                    b: locations.index.datums[b]["geohash"],
                };
                return elem["b"].localeCompare(elem["a"]);
            });
            input.typeahead({
                minLength: 0,
                highlight: true
            }, {
                display: "name",
                limit: 100,
                templates: {
                    suggestion: (e) => {
                        return $("<div>").text(e.name + " (" + e.address + ")");
                    }
                },
                source: (q, sync) => {
                    if (q === "") {
                        sync(locations.get(ids));
                    } else {
                        locations.search(q, sync);
                    }
                }
            }).bind("typeahead:select", (e, suggestion) => {
                this.setState({
                    selected: suggestion["name"],
                    value: suggestion["id"]
                });
            });
            $(".tt-menu").css({
                "max-height": "150px",
                "overflow-y": "auto"
            });
        });
    }
    render() {
        return (
            <div>
              <div className="form-control-static">{this.state.selected}</div>
              <input
                type="hidden"
                name={this.props.name}
                value={this.state.value}
              />
              <span style={{ display: "inline-block" }}>
                <input
                  ref="input"
                  className="form-control"
                />
              </span>
            </div>
        );
    }
}
