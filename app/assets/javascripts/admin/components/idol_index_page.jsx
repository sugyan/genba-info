class IdolIndexPage extends React.Component {
    static get propTypes() {
        return {
            idols: React.PropTypes.array.isRequired,
            links: React.PropTypes.array.isRequired
        };
    }
    render() {
        return (
            <div>
              <h3>登録アイドル一覧</h3>
              <IdolIndexTable idols={this.props.idols}/>
              <hr/>
              {this.props.links.map((link, i) => <Link key={i} {...link} />)}
            </div>
        );
    }
}
