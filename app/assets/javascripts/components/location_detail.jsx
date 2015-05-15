class LocationDetail extends React.Component {
    static get propTypes() {
        return {
            address: React.PropTypes.string.isRequired,
            url: React.PropTypes.string.isRequired,
            lat: React.PropTypes.number.isRequired,
            lng: React.PropTypes.number.isRequired,
            genbas: React.PropTypes.array.isRequired
        };
    }
    render() {
        return (
            <div>
              <dl className="dl-horizontal">
                <dt>住所</dt>
                <dd>{this.props.address}</dd>
                <dd><a href={this.props.url} target="_blank">{this.props.url}</a></dd>
              </dl>
              <LocationDetailMap lat={this.props.lat} lng={this.props.lng} />
              <h4>直近の予定</h4>
              <GenbaList genbas={this.props.genbas} />
            </div>
        );
    }
}

class LocationDetailMap extends React.Component {
    static get propTypes() {
        return {
            lat: React.PropTypes.number.isRequired,
            lng: React.PropTypes.number.isRequired
        };
    }
    componentDidMount() {
        var position = new google.maps.LatLng(this.props.lat, this.props.lng);
        var map = new google.maps.Map(React.findDOMNode(this.refs["map"]), {
            zoom: 16,
            center: position,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        new google.maps.Marker({ map: map, position: position });
    }
    render() {
        return (
            <div ref="map" style={{ width: "100%", height: 300 }}></div>
        );
    }
}
