class PasswordNewForm extends React.Component {
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
              <InputFormGroup label="Email address" type="email" name="email" resource_name={this.props.resource_name} autofocus={true} required={true} />
              <button type="submit" className="btn btn-default">パスワードリセットのメールを送信</button>
            </form>
        );
    }
}
