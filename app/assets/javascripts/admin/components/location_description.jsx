class LocationDescription extends React.Component {
    static get propTypes() {
        return {
            id: React.PropTypes.number.isRequired,
            name: React.PropTypes.string.isRequired,
            address: React.PropTypes.string.isRequired,
            url: React.PropTypes.string.isRequired,
            created_at: React.PropTypes.string.isRequired,
            updated_at: React.PropTypes.string.isRequired
        };
    }
    render() {
        return (
            <dl>
              <dt>ID</dt>
              <dd>{this.props.id}</dd>
              <dt>名前</dt>
              <dd>{this.props.name}</dd>
              <dt>住所</dt>
              <dd>{this.props.address}</dd>
              <dt>URL</dt>
              <dd><a href={this.props.url} target="_blank">{this.props.url}</a></dd>
              <dt>作成日時</dt>
              <dd>{this.props.created_at}</dd>
              <dt>更新日時</dt>
              <dd>{this.props.updated_at}</dd>
            </dl>
        );
    }
}
