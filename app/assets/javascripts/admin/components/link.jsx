class Link extends React.Component {
    static get propTypes() {
        return {
            href: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            classes: React.PropTypes.array
        };
    }
    static get defaultProps() {
        return {
            classes: ["btn", "btn-link"]
        };
    }
    render() {
        return (
            <a href={this.props.href} className={this.props.classes.join(" ")}>
              {this.props.text}
            </a>
        );
    }
}
