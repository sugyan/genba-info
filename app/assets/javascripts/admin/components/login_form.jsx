class LoginForm extends React.Component {
    static get propTypes() {
        return {
            action: React.PropTypes.string.isRequired,
            method: React.PropTypes.string.isRequired,
            token: React.PropTypes.string.isRequired
        };
    }
    generateName(param) {
        var resource_name = "editor";
        return `${resource_name}[${param}]`;
    }
    componentDidMount() {
        this.refs["email"].focus();
    }
    render() {
        return (
            <form action={this.props.action} method={this.props.method}>
              {this.props.token && <input type="hidden" name="authenticity_token" value={this.props.token} />}
              <InputFormGroup
                ref="email"
                value=""
                name={this.generateName("email")}
                type="email"
                label="Email address"
              />
              <InputFormGroup
                name={this.generateName("password")}
                value=""
                type="password"
                label="Password"
              />
              <InputCheckbox
                name={this.generateName("remember_me")}
                label="Remember me"
              />
              <button type="submit" className="btn btn-default">ログイン</button>
            </form>
        );
    }
}
