class LoginPage extends React.Component {
    static get propTypes() {
        return {
            form: React.PropTypes.object.isRequired,
            links: React.PropTypes.array.isRequired
        };
    }
    render() {
        return (
            <div>
              <h2>ログイン</h2>
              <LoginForm {...this.props.form} />
              <AuthSharedLinks links={this.props.links} />
            </div>
        );
    }
}