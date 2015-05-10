class Links extends React.Component {
    static get propTypes() {
        return {
            links: React.PropTypes.array.isRequired
        };
    }
    render() {
        return (
            <div>
              {this.props.links.map((link, i) => <Link key={i} style={{ margin: "0 5px" }} {...link} />)}
            </div>
        );
    }
}
