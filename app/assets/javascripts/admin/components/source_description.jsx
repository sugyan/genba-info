class SourceDescription extends React.Component {
    static get propTypes() {
        return {
            id: React.PropTypes.number.isRequired,
            provider: React.PropTypes.string.isRequired,
            keystr: React.PropTypes.string.isRequired,
            title: React.PropTypes.string.isRequired,
            start_at: React.PropTypes.string.isRequired,
            location: React.PropTypes.string,
            description: React.PropTypes.string,
            url: React.PropTypes.string.isRequired,
            status: React.PropTypes.bool.isRequired,
            created_at: React.PropTypes.string.isRequired,
            updated_at: React.PropTypes.string.isRequired
        };
    }
    render() {
        return (
            <dl>
              <dt>ID</dt>
              <dd>{this.props.id} ({[this.props.provider, this.props.keystr].join(":")})</dd>
              <dt>タイトル</dt>
              <dd>{this.props.title}</dd>
              <dt>日時</dt>
              <dd>{this.props.start_at} 〜 </dd>
              <dt>会場</dt>
              <dd>{this.props.location || "不明"}</dd>
              <dt>詳細</dt>
              <dd><pre>{this.props.description}</pre></dd>
              <dt>参照URL</dt>
              <dd><a href={this.props.url}>{this.props.url}</a></dd>
              <dt>状態</dt>
              <dd>{this.props.status ? "処理済" : "未処理"}</dd>
              <dd><a href={this.props.url}>{this.props.url}</a></dd>
              <dt>作成日時</dt>
              <dd>{this.props.created_at}</dd>
              <dt>更新日時</dt>
              <dd>{this.props.updated_at}</dd>
            </dl>
        );
    }
}
