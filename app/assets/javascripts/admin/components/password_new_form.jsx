class PasswordNewForm extends React.Component {
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
              <InputText
                ref="email"
                name={this.generateName("email")}
                type="email"
                label="Email address"
                required={true}
                autofocus={true}
              />
              <button type="submit" className="btn btn-default">パスワードリセットのメールを送信</button>
            </form>
        );
    }
}
