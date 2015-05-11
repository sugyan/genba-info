class PasswordEditForm extends React.Component {
    static get propTypes() {
        return {
            action: React.PropTypes.string.isRequired,
            method: React.PropTypes.string.isRequired,
            token: React.PropTypes.string.isRequired,
            reset_password_token: React.PropTypes.string,
            errors: React.PropTypes.object.isRequired
        };
    }
    generateName(param) {
        var resource_name = "editor";
        return `${resource_name}[${param}]`;
    }
    componentDidMount() {
        this.refs["password"].focus();
    }
    render() {
        var messages = Object.keys(this.props.errors).map((key) => {
            return this.props.errors[key];
        }).reduce((prev, curr) => {
            return prev.concat(curr);
        }, []);
        return (
            <form action={this.props.action} method="POST">
              {messages.length > 0 && <AlertMessages messages={messages} />}
              {this.props.token && <input type="hidden" name="authenticity_token" value={this.props.token} />}
              {this.props.reset_password_token && <input type="hidden" name={this.generateName("reset_password_token")} value={this.props.reset_password_token} />}
              <input type="hidden" name="_method" value={this.props.method} />
              <InputText
                ref="password"
                name={this.generateName("password")}
                type="password"
                label="新規パスワード"
                required={true}
                autofocus={true}
              />
              <InputText
                name={this.generateName("password_confirmation")}
                type="password"
                label="確認"
                required={true}
              />
              <button type="submit" className="btn btn-default">変更する</button>
            </form>
        );
    }
}
