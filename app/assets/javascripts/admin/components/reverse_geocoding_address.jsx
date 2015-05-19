class ReverseGeocodingAddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    }
    static get propTypes() {
        return {
            name: React.PropTypes.string.isRequired,
            value: React.PropTypes.string.isRequired
        };
    }
    updateLocation() {
        $.ajax({
            url: "https://maps.googleapis.com/maps/api/geocode/json",
            data: {
                address: this.address,
                language: "ja",
                sensor: false
            },
            success: (data) => {
                var result;
                if (data.status === "OK") {
                    result = data.results[0];
                    var state = {
                        status: result.geometry.location_type === "ROOFTOP" ? "success" : "warning",
                        lat: result.geometry.location.lat,
                        lng: result.geometry.location.lng,
                        address: result.formatted_address
                    };
                    result.address_components.forEach((e) => {
                        if (e.types[0].match(/administrative_area/)) {
                            state["administrative_area"] = e.long_name;
                        }
                        if (e.types[0] === "locality") {
                            state["locality"] = e.long_name;
                        }
                    });
                    this.map.setCenter(result.geometry.location);
                    this.marker.setPosition(result.geometry.location);
                    this.setState(state);
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
    handleChange(e) {
        var value = e.target.value
        this.address = value;
        this.setState({ value: value });
        // 500ms 変更なければAPIリクエスト
        setTimeout(() => {
            if (this.address === value) {
                this.updateLocation();
            }
        }, 500)
    }
    componentDidMount() {
        /* map */
        this.map = new google.maps.Map(React.findDOMNode(this.refs.map), {
            zoom: 17,
            center: new google.maps.LatLng(0.0, 0.0),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        this.marker = new google.maps.Marker({ map: this.map });
        this.address = this.props.value;
        this.updateLocation();
    }
    render() {
        return (
            <div>
              <input
                ref="input"
                type="text"
                name={this.props.name}
                value={this.state.value}
                className="form-control"
                required={true}
                onChange={this.handleChange.bind(this)}
              />
              <div ref="map" style={{ width: "100%", height: 250, marginTop: 10 }}></div>
              <GeocodingResult name={this.props.name} {...this.state} />
            </div>
        );
    }
}

class GeocodingResult extends React.Component {
    static get propTypes() {
        return {
            status: React.PropTypes.string,
            lat: React.PropTypes.number,
            lng: React.PropTypes.number,
            address: React.PropTypes.string,
            administrative_area: React.PropTypes.string,
            locality: React.PropTypes.string
        };
    }
    render() {
        var position = this.props.lat && this.props.lng && <span>({this.props.lat}, {this.props.lng})</span>;
        var inputs = ["lat", "lng", "administrative_area", "locality"].map((e) => {
            return (
                <input
                  key={e}
                  name={"location[" + e + "]"}
                  value={this.props[e]}
                  type="hidden"
                />
            );
        })
        return (
            <div className={"text-" + this.props.status}>
              {this.props.address} {position}
              {inputs}
            </div>
        );
    }
}
