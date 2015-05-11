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
              <InputText
                ref="title"
                name={this.generateName("title")}
                value={this.props.genba.title || ""}
                label="タイトル"
                required={true}
                error={!! this.props.errors["title"]}
              />
              <InputTags
                ref="idols"
                name={this.generateName("idols")}
                values={this.props.genba.idols}
                label="出演者"
                prefetch_url="/admin/idols.json"
                optional={more_idols}
              />
              <InputSelect
                name={this.generateName("location_id")}
                value={this.props.genba.location && this.props.genba.location.id}
                label="会場"
                prefetch_url="/admin/locations.json"
              />
              <InputDatetime
                name={this.generateName("start_at")}
                value={this.props.genba.start_at || ""}
                label="日時"
              />
              <InputTextarea
                name={this.generateName("description")}
                label="詳細"
                value={this.props.genba.description || ""}
              />
              <InputMultiple
                name={this.generateName("urls")}
                type="url"
                values={this.props.genba.urls}
                label="参照URL"
                error={!! this.props.errors["urls"]}
              />
              <InputInlineRadio
                name={this.generateName("status")}
                label="公開ステータス"
                values={[
                  { label: "下書き", value: "false" },
                  { label: "公開",   value: "true"  },
                ]}
                value={this.props.genba.status ? "true" : "false"}
              />
              <button type="submit" className="btn btn-primary">{this.props.submit}</button>
            </form>
        );
    }
}
