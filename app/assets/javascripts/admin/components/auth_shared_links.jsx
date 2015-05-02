class AuthSharedLinks extends React.Component {
    static get propTypes() {
        return {
            links: React.PropTypes.array.isRequired
        };
    }
    render() {
        var links = this.props.links.map((link, i) => <AuthSharedLinksLink key={i} {...link} />);
        return (
            <div>
              {links}
            </div>
        );
    }
}
