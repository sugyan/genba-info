class IdolIndexPage extends React.Component {
    static get propTypes() {
        return {
            idols: React.PropTypes.array.isRequired,
            new_link: React.PropTypes.string.isRequired
        };
    }
    render() {
        return (
            <div>
              <h3>登録アイドル一覧</h3>
              <IdolIndexTable idols={this.props.idols}/>
              <hr/>
              <a href={this.props.new_link} className="btn btn-link">新規登録</a>
            </div>
        );
    }
}
