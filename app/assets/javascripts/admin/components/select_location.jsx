class SelectLocation extends React.Component {
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
            value: React.PropTypes.string,
            required: React.PropTypes.bool
        };
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    componentDidMount() {
        $.ajax({
            url: "/admin/locations.json",
            success: (data) => {
                this.setState({ options: data });
            }
        });
    }
    render() {
        var options = this.state.options.map((e) => <option key={e.id} value={e.id}>{e.name}</option>);
        return (
            <select
              className="form-control"
              name={this.props.name}
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              required={this.props.required}>
              <option></option>
              {options}
            </select>
        );
    }
}
