class InputLocation extends React.Component {
    componentDidMount() {
        var input = $(React.findDOMNode(this.refs["input"]));
    }
    render() {
        return (
            <input
              ref="input"
              className="form-control"
            />
        );
    }
}
