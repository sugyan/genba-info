class InputCheckbox extends React.Component {
    static get propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            label: React.PropTypes.string
        };
    }
    render() {
        return (
            <div className="checkbox">
              <label>
                <input name={this.props.name} type="checkbox" />
                {this.props.label}
              </label>
            </div>
        );
    }
}
