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
            target = ["title", "idols"].filter((e) => !! this.props.errors[e])[0];
        }
        this.refs[target].focus && this.refs[target].focus();
    }
    render() {
        var messages = Object.keys(this.props.errors).map((key) => {
            return this.props.errors[key];
        }).reduce((prev, curr) => {
            return prev.concat(curr);
        }, []);
        var more_idols = (
            <InputCheckbox
              name={this.generateName("more_idols")}
              value={this.props.genba.more_idols}
              label="その他"
            />
        );
        return (
            <form action={this.props.action} method="POST">
              {messages.length > 0 && <AlertMessages messages={messages} />}
              {this.props.token && <input type="hidden" name="authenticity_token" value={this.props.token} />}
              <input type="hidden" name="_method" value={this.props.method} />
              <InputFormGroup
                ref="title"
                name={this.generateName("title")}
                value={this.props.genba.title || ""}
                label="タイトル"
                required={true}
                error={!! this.props.errors["title"]}
              />
              <TagsInputFormGroup
                ref="idols"
                name={this.generateName("idols")}
                values={this.props.genba.idols}
                label="出演者"
                prefetch_url="/admin/idols.json"
                optional={more_idols}
              />
              <SelectFormGroup
                name={this.generateName("location_id")}
                value={this.props.genba.location && this.props.genba.location.id}
                label="会場"
                prefetch_url="/admin/locations.json"
              />
              <DatetimeFormGroup
                name={this.generateName("start_at")}
                value={this.props.genba.start_at || ""}
                label="日時"
              />
              <TextareaFormGroup
                name={this.generateName("description")}
                label="詳細"
                value={this.props.genba.description || ""}
              />
              <button type="submit" className="btn btn-default">{this.props.submit}</button>
            </form>
        );
    }
}
