class InputInlineRadio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }
    static get propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            values: React.PropTypes.array.isRequired,
            label: React.PropTypes.string,
            inline: React.PropTypes.bool
        };
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    render() {
        var values = this.props.values.map((e, i) => (
            <label key={i} className="radio-inline">
              <input type="radio" name={this.props.name} value={e.value} checked={e.value === this.state.value} onChange={this.handleChange.bind(this)} />
              {e.label}
            </label>
        ));
        return (
            <div className="form-group">
              <label className="control-label">{this.props.label}</label>
              <div className="radio">
                {values}
              </div>
            </div>
        );
    }
}
