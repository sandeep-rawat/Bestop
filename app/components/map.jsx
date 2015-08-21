var React = require('react');
var GoogleMap = require('google-map-react');

module.exports = React.createClass({
  render: function () {
    return (
				<div className="map">
					<GoogleMap zoom={12} center={[40.718249,-74.035363]}>
						<div className="marker" lat={40.718249} lng={-74.035363}>
							<img src="../img/bestop-icon.jpg" className="img-rounded"/>
						</div>
					</GoogleMap>
				</div>	
    );
  }
});