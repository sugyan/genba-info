class IdolNewPage extends React.Component {
    static get propTypes() {
        return {
            idol: React.PropTypes.object.isRequired,
            form: React.PropTypes.object.isRequired,
            links: React.PropTypes.array.isRequired,
            errors: React.PropTypes.object.isRequired
        };
    }
    render() {
        return (
            <div>
              <h3>アイドル新規登録</h3>
              {this.props.errors.messages.length > 0 && <AlertMessages messages={this.props.errors.messages} />}
              <IdolForm {...this.props.form} idol={this.props.idol} errors={this.props.errors.keys} />
              <hr/>
              {this.props.links.map((link, i) => <Link key={i} {...link} />)}
            </div>
        );
    }
}
