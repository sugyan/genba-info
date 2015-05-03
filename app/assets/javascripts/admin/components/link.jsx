class Link extends React.Component {
    static get propTypes() {
        return {
            href: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            method: React.PropTypes.string,
            confirm: React.PropTypes.string,
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
            <a href={this.props.href} className={this.props.classes.join(" ")} data-method={this.props.method} data-confirm={this.props.confirm}>
              {this.props.text}
            </a>
        );
    }
}
