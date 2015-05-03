class IdolShowPage extends React.Component {
    static get propTypes() {
        return {
            idol: React.PropTypes.object.isRequired,
            links: React.PropTypes.array.isRequired
        };
    }
    render() {
        return (
            <div>
              <h3>アイドル詳細</h3>
              <IdolDescription {...this.props.idol} />
              <hr />
              {this.props.links.map((link, i) => <Link key={i} {...link} />)}
            </div>
        );
    }
}
