class InputFormGroup extends React.Component {
    static get propTypes() {
        return {
            resource_name: React.PropTypes.string.isRequired,
            type: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
            label: React.PropTypes.string,
            autofocus: React.PropTypes.bool
        };
    }
    render() {
        return (
            <div className="form-group">
              <label>{this.props.label}</label>
              <input name={`${this.props.resource_name}[${this.props.name}]`} type={this.props.name} className="form-control" autoFocus={this.props.autofocus} />
            </div>
        );
    }
}
