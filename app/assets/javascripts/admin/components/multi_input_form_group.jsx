class MultiInputsFormGroup extends React.Component {
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
            type: React.PropTypes.string,
            values: React.PropTypes.array.isRequired,
            label: React.PropTypes.string,
            error: React.PropTypes.bool
        };
    }
    static get defaultProps() {
        return {
            type: "text",
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
    componentDidUpdate() {
        React.findDOMNode(this.refs[this.state.values.length - 1]).focus();
    }
    render() {
        var inputs = this.state.values.map((e, i) => {
            return (
                <div key={i} className="input-group" style={{ marginBottom: "10px" }}>
                  <input
                    ref={i}
                    name={this.props.name + "[]"}
                    type={this.props.type}
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
        var classes = ["form-group"];
        if (this.props.error) {
            classes.push("has-error");
        }
        return (
            <div className={classes.join(" ")}>
              <label className="control-label">{this.props.label}</label>
              {inputs}
              <button type="button" className="btn" disabled={this.state.disable_button} onClick={this.handleClickAdd.bind(this)}>追加</button>
            </div>
        );
    }
}
