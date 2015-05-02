class AuthSharedLinksLink extends React.Component {
    static get propTypes() {
        return {
            label: React.PropTypes.string.isRequired,
            link: React.PropTypes.string.isRequired
        };
    }
    render() {
        return (
            <a href={this.props.link} className="btn btn-link">
              {this.props.label}
            </a>
        );
    }
}
