class Links extends React.Component {
    static get propTypes() {
        return {
            links: React.PropTypes.array.isRequired
        };
    }
    render() {
        return (
            <div>
              {this.props.links.map((link, i) => <Link key={i} {...link} />)}
            </div>
        );
    }
}
