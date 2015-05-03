class InputFormGroup extends React.Component {
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
            value: React.PropTypes.string,
            label: React.PropTypes.string,
            error: React.PropTypes.bool,
            required: React.PropTypes.bool,
            autofocus: React.PropTypes.bool
        };
    }
    static get defaultProps() {
        return {
            type: "text"
        };
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    componentDidMount() {
        if (this.props.error) {
            React.findDOMNode(this.refs.input).focus();
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
              <input ref="input"
                     name={this.props.name}
                     type={this.props.type}
                     value={this.state.value}
                     className="form-control"
                     required={this.props.required}
                     autoFocus={this.props.autofocus}
                     onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}
