class IdolEditPage extends React.Component {
    static get propTypes() {
        return {
            idol: React.PropTypes.object.isRequired,
            form: React.PropTypes.object.isRequired,
            links: React.PropTypes.array.isRequired
        };
    }
    render() {
        return (
            <div>
              <h3>アイドル情報編集</h3>
              <IdolForm {...this.props.form} idol={this.props.idol} submit="更新" />
              <hr />
              {this.props.links.map((link, i) => <Link key={i} {...link} />)}
            </div>
        );
    }
}
