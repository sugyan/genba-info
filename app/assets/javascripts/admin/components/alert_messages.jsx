class AlertMessages extends React.Component {
    static get propTypes() {
        return {
            messages: React.PropTypes.array.isRequired
        };
    }
    render() {
        return (
            <div className="alert alert-danger alert-dismissible">
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
                {this.props.messages.map((message, i) => <AlertMessage key={i} message={message} />)}
            </div>
        );
    }
}

class AlertMessage extends React.Component {
    static get propTypes() {
        return {
            message: React.PropTypes.string.isRequired
        };
    }
    render() {
        return (
            <div>
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span> {this.props.message}
            </div>
        )
    }
}
