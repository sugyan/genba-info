class PasswordNewPage extends React.Component {
    static get propTypes() {
        return {
            form: React.PropTypes.object.isRequired,
            links: React.PropTypes.array.isRequired
        };
    }
    render() {
        return (
            <div>
              <h2>パスワードを忘れた場合</h2>
              <PasswordNewForm {...this.props.form} />
              <hr />
              {this.props.links.map((link, i) => <Link key={i} {...link} />)}
            </div>
        );
    }
}
