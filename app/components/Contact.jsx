var React = require('react');
// var images = require('app/images/unnamed.png');
// import image from 'app/images/unnamed.png';
// import pic from 'app/images/naruto-shippuden-ultimate-ninja-storm-revolution-artwork.jpg';

var png = require('narutoPNG');
var jpg = require('narutoJPG');

var Contact = React.createClass({
  render: function (){
    return(
      <div>
        <h1 className="text-center page-title">Extra</h1>
          <h6>Check My manz out</h6>
        
          <img src={png} alt="The Squad" />
          <a href=""><img src={jpg} alt="OG Team 7"/></a>
      </div>
    );
  }
});
module.exports = Contact;
  //<a href="http://ww1.narutoget.io/" className="thumbnail"></a>