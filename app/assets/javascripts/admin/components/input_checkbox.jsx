class InputCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }
    static get defaultProps() {
        return {
            value: false
        };
    }
    static get propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            value: React.PropTypes.bool.isRequired,
            label: React.PropTypes.string.isRequired
        };
    }
    handleChange(e) {
        this.setState({ value: e.target.checked });
    }
    render() {
        return (
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={this.state.value}
                  onChange={this.handleChange.bind(this)}
                />
                {this.props.label}
              </label>
              <input
                name={this.props.name}
                type="hidden"
                value={this.state.value}
              />
            </div>
        );
    }
}
