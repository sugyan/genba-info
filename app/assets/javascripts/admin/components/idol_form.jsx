class IdolForm extends React.Component {
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
              <InputFormGroup resource_name={this.props.resource_name} name="name" label="名前" required={true} autofocus={true} />
              <InputFormGroup resource_name={this.props.resource_name} name="kana" label="ふりがな" required={true} />
              <InputFormGroup resource_name={this.props.resource_name} name="url" label="公式URL" />
              <button type="submit" className="btn btn-default">登録</button>
            </form>
        );
    }
}
