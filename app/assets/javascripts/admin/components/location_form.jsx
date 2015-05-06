class LocationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
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
    updateLocation() {
        $.ajax({
            url: "http://maps.googleapis.com/maps/api/geocode/json",
            data: {
                address: this.address,
                language: "ja",
                sensor: false
            },
            success: (data) => {
                var result;
                if (data.status === "OK") {
                    result = data.results[0];
                    this.map.setCenter(result.geometry.location);
                    this.marker.setPosition(result.geometry.location);
                    this.setState({
                        status: result.geometry.location_type === "ROOFTOP" ? "success" : "warning",
                        lat: result.geometry.location.lat,
                        lng: result.geometry.location.lng,
                        address: result.formatted_address
                    });
                } else {
                    this.setState({
                        status: "danger",
                        lat: null,
                        lng: null,
                        address: "位置が取得できません"
                    });
                }
            }
        });
    }
    onAddressChanged(value) {
        this.address = value;
        // 500ms 変更なければAPIリクエスト
        setTimeout(() => {
            if (this.address === value) {
                this.updateLocation();
            }
        }, 500);
    }
    componentDidMount() {
        /* map */
        this.map = new google.maps.Map(React.findDOMNode(this.refs.map), {
            zoom: 16,
            center: new google.maps.LatLng(0.0, 0.0),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        this.marker = new google.maps.Marker({ map: this.map });
        this.address = this.props.location.address;
        this.updateLocation();
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
              <input type="hidden" name={this.generateName("lat")} value={this.state.lat} />
              <input type="hidden" name={this.generateName("lng")} value={this.state.lng} />
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
                              error={!! this.props.errors["address"]}
                              onChange={this.onAddressChanged.bind(this)} />
              <div ref="map" style={{ width: "100%", height: "250" }}></div>
              <GeocodingResult {...this.state} />
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

class GeocodingResult extends React.Component {
    static get propTypes() {
        return {
            status: React.PropTypes.string,
            lat: React.PropTypes.number,
            lng: React.PropTypes.number,
            address: React.PropTypes.string
        };
    }
    render() {
        var position = this.props.lat && this.props.lng && <span>({this.props.lat}, {this.props.lng})</span>
        return (
            <div className={"text-" + this.props.status}>
              {this.props.address} {position}
            </div>
        );
    }
}
