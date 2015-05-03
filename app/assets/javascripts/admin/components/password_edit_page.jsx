class PasswordEditPage extends React.Component {
    static get propTypes() {
        return {
            form: React.PropTypes.object.isRequired,
            links: React.PropTypes.array.isRequired
        };
    }
    render() {
        return (
            <div>
              <h2>パスワード変更</h2>
              <PasswordEditForm {...this.props.form} />
              <hr />
              {this.props.links.map((link, i) => <Link key={i} {...link} />)}
            </div>
        );
    }
}
