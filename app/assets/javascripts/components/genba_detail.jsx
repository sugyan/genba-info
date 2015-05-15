class GenbaDetail extends React.Component {
    static get propTypes() {
        return {
            start_at: React.PropTypes.string.isRequired,
            location: React.PropTypes.object.isRequired,
            idols: React.PropTypes.array.isRequired,
            more_idols: React.PropTypes.bool.isRequired,
            description: React.PropTypes.string.isRequired
        };
    }
    render() {
        return (
            <dl>
              <dt>日時</dt>
              <dd>{this.props.start_at} 〜 </dd>
              <dt>会場</dt>
              <dd><GenbaDetailLocation {...this.props.location} /></dd>
              <dt>出演</dt>
              <dd><GenbaDetailIdols idols={this.props.idols} more={this.props.more_idols} /></dd>
              <dt>詳細</dt>
              <dd><pre>{this.props.description}</pre></dd>
              <dt>参照URL</dt>
              <dd><ul>{this.props.urls.map((e, i) => <li key={i}><a href={e} target="_blank">{e}</a></li>)}</ul></dd>
            </dl>
        );
    }
}

class GenbaDetailLocation extends React.Component {
    static get propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            link: React.PropTypes.string.isRequired,
            address: React.PropTypes.string.isRequired
        };
    }
    render() {
        return (
            <div>
              <a href={this.props.link}>{this.props.name}</a>
              &nbsp;({this.props.address})
            </div>
        );
    }
}

class GenbaDetailIdols extends React.Component {
    static get propTypes() {
        return {
            idols: React.PropTypes.array.isRequired,
            more: React.PropTypes.bool.isRequired
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
        if (this.props.more) {
            idols.push(<span key="other">、他</span>)
        }
        return <div>{idols}</div>;
    }
}
