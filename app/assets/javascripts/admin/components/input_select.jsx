class InputSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            value: this.props.value
        };
    }
    static get propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            value: React.PropTypes.number,
            prefetch_url: React.PropTypes.string.isRequired,
            label: React.PropTypes.string
        };
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    componentDidMount() {
        $.ajax({
            url: this.props.prefetch_url,
            success: (data) => {
                this.setState({ options: data });
            }
        });
    }
    render() {
        var options = this.state.options.map((e) => <option key={e.id} value={e.id}>{e.name}</option>);
        return (
            <div className="form-group">
              <label className="control-label">{this.props.label}</label>
              <select
                className="form-control"
                name={this.props.name}
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                required={true}>
                <option></option>
                {options}
              </select>
            </div>
        );
    }
}
