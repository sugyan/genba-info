class InputDatetime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }
    static get propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            value: React.PropTypes.string.isRequired,
            label: React.PropTypes.string
        };
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    render() {
        return (
            <div className="form-group">
              <label className="control-label">{this.props.label}</label>
              <input
                ref="input"
                name={this.props.name}
                type="datetime-local"
                step="300"
                value={this.state.value}
                className="form-control"
                onChange={this.handleChange.bind(this)}
                required={true}
              />
            </div>
        );
    }
}
