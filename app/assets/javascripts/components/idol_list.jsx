class IdolList extends React.Component {
    static get propTypes() {
        return {
            idols: React.PropTypes.array.isRequired
        };
    }
    render() {
        return (
            <ul>
              {this.props.idols.map((e, i) => <IdolListElement key={e.id} {...e} />)}
            </ul>
        );
    }
}

class IdolListElement extends React.Component {
    static get propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            link: React.PropTypes.string.isRequired
        };
    }
    render() {
        return (
            <li>
              <a href={this.props.link} title={this.props.kana}>
                {this.props.name}
              </a>
            </li>
        )
    }
}
