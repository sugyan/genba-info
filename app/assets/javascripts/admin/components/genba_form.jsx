class GenbaForm extends React.Component {
    static get propTypes() {
        return {
            genba: React.PropTypes.object.isRequired,
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
        var resource_name = "genba";
        return `${resource_name}[${param}]`;
    }
    componentDidMount() {
        /* focus first input element */
        var target = "title";
        if (Object.keys(this.props.errors).length > 0) {
            target = ["title"].filter((e) => !! this.props.errors[e])[0];
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
              <InputFormGroup
                ref="title"
                name={this.generateName("title")}
                value={this.props.genba.title}
                label="タイトル"
                required={true}
                error={!! this.props.errors["title"]}
              />
              <TagsInputFormGroup
                name={this.generateName("idols")}
                values={this.props.genba.idols}
                label="出演者"
                prefetch_url="/admin/idols.json"
              />
              <button type="submit" className="btn btn-default">{this.props.submit}</button>
            </form>
        );
    }
}
