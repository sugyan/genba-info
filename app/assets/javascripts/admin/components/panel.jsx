class Panel extends React.Component {
    static get propTypes() {
        return {
            header: React.PropTypes.string.isRequired,
            content: React.PropTypes.element.isRequired
        };
    }
    render() {
        return (
            <div className="panel panel-default">
              <div className="panel-heading">{this.props.header}</div>
              <div className="panel-body">
                {this.props.content}
              </div>
            </div>
        );
    }
}
