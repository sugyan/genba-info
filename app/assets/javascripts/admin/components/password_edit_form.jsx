class PasswordEditForm extends React.Component {
    static get propTypes() {
        return {
            resource_name: React.PropTypes.string.isRequired,
            action: React.PropTypes.string.isRequired,
            method: React.PropTypes.string.isRequired,
            token: React.PropTypes.string,
            reset_password_token: React.PropTypes.string
        };
    }
    render() {
        return (
            <form action={this.props.action} method="POST">
              {this.props.token && <input type="hidden" name="authenticity_token" value={this.props.token} />}
              {this.props.reset_password_token && <input type="hidden" name={`${this.props.resource_name}[reset_password_token]`} value={this.props.reset_password_token} />}
              <input type="hidden" name="_method" value={this.props.method} />
              <InputFormGroup name={`${this.props.resource_name}[password]`}
                              type="password"
                              label="新規パスワード"
                              required={true}
                              autofocus={true} />
              <InputFormGroup name={`${this.props.resource_name}[password_confirmation]`}
                              type="password"
                              label="確認"
                              required={true} />
              <button type="submit" className="btn btn-default">変更する</button>
            </form>
        );
    }
}
