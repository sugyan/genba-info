class InputMultipleUrls extends React.Component {
    constructor(props) {
        super(props);
        var values = this.props.values;
        if (values.length === 0) {
            values.push("");
        }
        this.state = {
            values: values,
            disable_button: (values.filter((e) => e.length === 0).length > 0) ? true : false
        };
    }
    static get propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            values: React.PropTypes.array.isRequired
        };
    }
    handleChange(i, e) {
        var values = this.state.values;
        values[i] = e.target.value;
        this.setState({
            values: values,
            disable_button: (values.filter((e) => e.length === 0).length > 0) ? true : false
        });
    }
    handleClickDelete(i, e) {
        var values = this.state.values;
        if (values.length > 1) {
            values.splice(i, 1);
            this.setState({ values: values });
        }
    }
    handleClickAdd(e) {
        this.setState({
            values: this.state.values.concat(""),
            disable_button: true
        });
    }
    render() {
        var inputs = this.state.values.map((e, i) => {
            return (
                <div key={i} className="input-group" style={{ marginBottom: "10px" }}>
                  <input
                    ref={i}
                    name={this.props.name + "[]"}
                    type="url"
                    className="form-control"
                    value={e}
                    onChange={this.handleChange.bind(this, i)}
                  />
                  <div className="input-group-addon">
                    <span className="glyphicon glyphicon-remove" aria-hidden={true} onClick={this.handleClickDelete.bind(this, i)}></span>
                  </div>
                </div>
            );
        });
        return (
            <div>
              {inputs}
              <button type="button" className="btn" disabled={this.state.disable_button} onClick={this.handleClickAdd.bind(this)}>追加</button>
            </div>
        );
    }
}
