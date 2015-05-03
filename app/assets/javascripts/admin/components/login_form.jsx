class LoginForm extends React.Component {
    static get propTypes() {
        return {
            resource_name: React.PropTypes.string.isRequired,
            action: React.PropTypes.string.isRequired,
            method: React.PropTypes.string.isRequired,
            token: React.PropTypes.string
        };
    }
    render() {
        return (
            <form action={this.props.action} method={this.props.method}>
              {this.props.token && <input type="hidden" name="authenticity_token" value={this.props.token} />}
              <InputFormGroup name={`${this.props.resource_name}[email]`}
                              type="email"
                              label="Email address"
                              autofocus={true} />
              <InputFormGroup name={`${this.props.resource_name}[password]`}
                              type="password"
                              label="Password" />
              <InputCheckbox label="Remember me" name="remember_me" resource_name={this.props.resource_name} />
              <button type="submit" className="btn btn-default">ログイン</button>
            </form>
        );
    }
}
