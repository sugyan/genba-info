class IdolDetail extends React.Component {
    static get propTypes() {
        return {
            url: React.PropTypes.string.isRequired,
            genbas: React.PropTypes.array.isRequired
        };
    }
    render() {
        return (
            <div>
              <dl className="dl-horizontal">
                <dd><a href={this.props.url} target="_blank">{this.props.url}</a></dd>
              </dl>
              <h4>今後の出演予定</h4>
              <GenbaList genbas={this.props.genbas} />
            </div>
        );
    }
}
