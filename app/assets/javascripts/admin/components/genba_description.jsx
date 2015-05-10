class GenbaDescription extends React.Component {
    static get propTypes() {
        return {
            id: React.PropTypes.number.isRequired,
            title: React.PropTypes.string.isRequired,
            idols: React.PropTypes.array.isRequired,
            more_idols: React.PropTypes.bool.isRequired,
            location: React.PropTypes.object.isRequired,
            start_at: React.PropTypes.string.isRequired,
            description: React.PropTypes.string,
            created_at: React.PropTypes.string.isRequired,
            updated_at: React.PropTypes.string.isRequired,
        };
    }
    render() {
        var idols = this.props.idols.map((e, i) => {
            return (
                <span key={e.id}>
                  <a href={e.link}>{e.name}</a>
                  {(i < this.props.idols.length - 1) && "、"}
                </span>
            );
        });
        if (this.props.more_idols) {
            idols.push(<span key="other">、他</span>)
        }
        return (
            <dl>
              <dt>ID</dt>
              <dd>{this.props.id}</dd>
              <dt>タイトル</dt>
              <dd>{this.props.title}</dd>
              <dt>出演</dt>
              <dd>{idols}</dd>
              <dt>会場</dt>
              <dd>{this.props.location.name}</dd>
              <dt>日時</dt>
              <dd>{this.props.start_at} 〜 </dd>
              <dt>詳細</dt>
              <dd><pre>{this.props.description}</pre></dd>
              <dt>作成日時</dt>
              <dd>{this.props.created_at}</dd>
              <dt>更新日時</dt>
              <dd>{this.props.updated_at}</dd>
            </dl>
        );
    }
}
