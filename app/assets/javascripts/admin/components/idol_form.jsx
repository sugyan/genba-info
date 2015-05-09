class IdolForm extends React.Component {
    static get propTypes() {
        return {
            idol: React.PropTypes.object.isRequired,
            action: React.PropTypes.string.isRequired,
            method: React.PropTypes.string.isRequired,
            token: React.PropTypes.string.isRequired,
            errors: React.PropTypes.object.isRequired,
            submit: React.PropTypes.string
        };
    }
    static get defaultProps() {
        return {
            submit: "登録",
        };
    }
    generateName(param) {
        var resource_name = "idol";
        return `${resource_name}[${param}]`;
    }
    componentDidMount() {
        /* focus first input element */
        var target = "name";
        if (Object.keys(this.props.errors).length > 0) {
            target = ["name", "kana", "url"].filter((e) => !! this.props.errors[e])[0];
        }
        this.refs[target].focus && this.refs[target].focus();
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
              <input type="hidden" name="_method" value={this.props.method} />
              <InputFormGroup ref="name"
                              name={this.generateName("name")}
                              value={this.props.idol.name || ""}
                              label="名前"
                              required={true}
                              error={!! this.props.errors["name"]} />
              <InputFormGroup ref="kana"
                              name={this.generateName("kana")}
                              value={this.props.idol.kana || ""}
                              label="ふりがな"
                              required={true}
                              error={!! this.props.errors["kana"]}/>
              <InputFormGroup ref="url"
                              name={this.generateName("url")}
                              value={this.props.idol.url || ""}
                              label="公式URL"
                              error={!! this.props.errors["url"]}/>
              <button type="submit" className="btn btn-default">{this.props.submit}</button>
            </form>
        );
    }
}
