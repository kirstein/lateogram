var React = require('react');

var Header = require('./header');
var Footer = require('./footer');
  
var Layout = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Header />
        <section>
          {this.props.children}
        </section>
        <Footer />
      </div>
    );
  }
});

module.exports = Layout;
