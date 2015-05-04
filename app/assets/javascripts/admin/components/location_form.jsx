class LocationForm extends React.Component {
    static get propTypes() {
        return {
            location: React.PropTypes.object.isRequired,
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
        var resource_name = "location";
        return `${resource_name}[${param}]`;
    }
    componentDidMount() {
        /* focus first input element */
        var target = "name";
        if (Object.keys(this.props.errors).length > 0) {
            target = ["name", "address", "url"].filter((e) => !! this.props.errors[e])[0];
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
                              value={this.props.location.name}
                              label="名前"
                              required={true}
                              error={!! this.props.errors["name"]} />
              <InputFormGroup ref="address"
                              name={this.generateName("address")}
                              value={this.props.location.address}
                              label="住所"
                              required={true}
                              error={!! this.props.errors["address"]}/>
              <InputFormGroup ref="url"
                              name={this.generateName("url")}
                              value={this.props.location.url}
                              label="公式URL"
                              error={!! this.props.errors["url"]}/>
              <button type="submit" className="btn btn-default">{this.props.submit}</button>
            </form>
        );
    }
}
