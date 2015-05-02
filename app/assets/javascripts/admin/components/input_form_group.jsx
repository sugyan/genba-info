class InputFormGroup extends React.Component {
    static get propTypes() {
        return {
            resource_name: React.PropTypes.string.isRequired,
            type: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
            label: React.PropTypes.string,
            required: React.PropTypes.bool,
            autofocus: React.PropTypes.bool
        };
    }
    static get defaultProps() {
        return {
            type: "text"
        };
    }
    render() {
        return (
            <div className="form-group">
              <label>{this.props.label}</label>
              <input name={`${this.props.resource_name}[${this.props.name}]`} type={this.props.type} className="form-control" required={this.props.required} autoFocus={this.props.autofocus} />
            </div>
        );
    }
}
