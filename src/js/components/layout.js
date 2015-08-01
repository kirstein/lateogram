var React = require('react');
  
var Layout = React.createClass({
  render: function() {
    return (
      <div className="container">
        <header>Hello kids. Drugs are bad</header>
        <section>
          {this.props.children}
        </section>
      </div>
    );
  }
});

module.exports = Layout;
