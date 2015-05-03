class IdolForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idol: this.props.idol || {}
        };
    }
    static get propTypes() {
        return {
            resource_name: React.PropTypes.string.isRequired,
            action: React.PropTypes.string.isRequired,
            method: React.PropTypes.string.isRequired,
            submit: React.PropTypes.string,
            token: React.PropTypes.string,
            idol: React.PropTypes.object
        };
    }
    static get defaultProps() {
        return {
            submit: "登録",
        };
    }
    render() {
        return (
            <form action={this.props.action} method="POST">
              {this.props.token && <input type="hidden" name="authenticity_token" value={this.props.token} />}
              <input type="hidden" name="_method" value={this.props.method} />
              <InputFormGroup name={`${this.props.resource_name}[name]`}
                              value={this.state.idol.name}
                              label="名前"
                              required={true}
                              autofocus={true} />
              <InputFormGroup name={`${this.props.resource_name}[kana]`}
                              value={this.state.idol.kana}
                              label="ふりがな"
                              required={true} />
              <InputFormGroup name={`${this.props.resource_name}[url]`}
                              value={this.state.idol.url}
                              label="公式URL" />
              <button type="submit" className="btn btn-default">{this.props.submit}</button>
            </form>
        );
    }
}
