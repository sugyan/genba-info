class InputTextarea extends React.Component {
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
              <textarea
                name={this.props.name}
                className="form-control"
                rows="5"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              />
            </div>
        );
    }
}
