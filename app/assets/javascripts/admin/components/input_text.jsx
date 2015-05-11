class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }
    static get propTypes() {
        return {
            type: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
            value: React.PropTypes.string.isRequired,
            label: React.PropTypes.string,
            error: React.PropTypes.bool,
            required: React.PropTypes.bool,
            onChange: React.PropTypes.func
        };
    }
    static get defaultProps() {
        return {
            type: "text"
        };
    }
    focus() {
        React.findDOMNode(this.refs["input"]).focus();
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
        if (this.props.onChange) {
            this.props.onChange(e.target.value);
        }
    }
    render() {
        var classes = ["form-group"];
        if (this.props.error) {
            classes.push("has-error");
        }
        return (
            <div className={classes.join(" ")}>
              <label className="control-label">{this.props.label}</label>
              <input
                ref="input"
                name={this.props.name}
                type={this.props.type}
                value={this.state.value}
                className="form-control"
                onChange={this.handleChange.bind(this)}
                required={this.props.required}
              />
            </div>
        );
    }
}
