class InputCheckbox extends React.Component {
    static get propTypes() {
        return {
            resource_name: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
            label: React.PropTypes.string
        };
    }
    render() {
        return (
            <div className="checkbox">
              <label>
                <input name={`${this.props.resource_name}[${this.props.name}]`} type="checkbox" />
                {this.props.label}
              </label>
            </div>
        );
    }
}
