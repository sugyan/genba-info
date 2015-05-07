class IdolDetail extends React.Component {
    static get propTypes() {
        return {
            idol: React.PropTypes.object.isRequired
        };
    }
    render() {
        return (
            <IdolDetailDescription {...this.props.idol} />
        );
    }
}

class IdolDetailDescription extends React.Component {
    static get propTypes() {
        return {
            url: React.PropTypes.string
        };
    }
    render() {
        var url = this.props.url && (
            <div>
              <dd><a href={this.props.url} target="_blank">{this.props.url}</a></dd>
            </div>
        );
        return (
            <dl className="dl-horizontal">
              {url}
            </dl>
        );
    }
}
