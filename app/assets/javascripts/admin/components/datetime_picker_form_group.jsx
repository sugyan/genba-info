class DatetimePickerFormGroup extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            value: this.props.value
        };
    }
    static get propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            value: React.PropTypes.string,
            label: React.PropTypes.string
        };
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    componentDidMount() {
        $(React.findDOMNode(this.refs["input"])).datetimepicker({
            format: "YYYY-MM-DD HH:mm",
            locale: "ja",
            stepping: 15
        });
    }
    render() {
        return (
            <div className="form-group">
              <label className="control-label">{this.props.label}</label>
              <input
                ref="input"
                name={this.props.name}
                type="datetime"
                value={this.state.value}
                className="form-control"
                onChange={this.handleChange.bind(this)}
                autoComplete={false}
                required={true}
              />
            </div>
        );
    }
}
