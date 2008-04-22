PopupBehavior = Behavior.create({
  
  initialize: function() {
    this.window = new PopupWindow(this.element.href);
  },
  
  onclick: function(event) {
    this.popup();
    event.stop();
  },
  
  popup: function() {
    this.window.show();
  }
  
});

PopupWindow = Class.create({
  
  initialize: function(url) {
    this.url = url;
    this.element = $div({style: 'display: none; position: absolute'});
    this.render();
    this.body = $$('body').first();
    this.body.insert(this.element);
  },
  
  show: function() {
    this.position();
    this.element.show();
  },
  
  position: function() {
    this.element.setStyle({
      left: parseInt((document.viewport.getWidth() - this.element.getWidth()) / 2) + 'px',
      top: parseInt((document.viewport.getHeight() - this.element.getHeight()) / 2.5) + 'px'
    });
  },
  
  render: function() {
    this.element.setStyle(
      'padding: 8px'
    );
    
    var top = $div({style: 'background: url(/images/background.png); height: 8px'});
    this.element.insert(top);
    
    var outer = $div({style:
      'background: url(/images/background.png);' +
      'margin: 0px -8px;  ' +
      'padding: 0px 8px;' +
      'position: relative;'
    });
    this.element.insert(outer);
    
    var bottom = $div({style: 'background: url(/images/background.png); height: 8px'});
    this.element.insert(bottom);
    
    var topLeft = $img({src: '/images/top_left.png', style: 'position: absolute; left: 0; top: -8px'});
    outer.insert(topLeft);
    
    var topRight = $img({src: '/images/top_right.png', style: 'position: absolute; right: 0; top: -8px'});
    outer.insert(topRight);
    
    var bottomLeft = $img({src: '/images/bottom_left.png', style: 'position: absolute; left: 0; bottom: -8px'});
    outer.insert(bottomLeft);
    
    var bottomRight = $img({src: '/images/bottom_right.png', style: 'position: absolute; right: 0; bottom: -8px'});
    outer.insert(bottomRight);
    
    var inner = $div({style: 
      'background-color: white'
    });
    outer.insert(inner);
    
    var iframe = new Element('iframe', {src: this.url, style: 'border: 0; width: 100%'});
    inner.insert(iframe);
  }
  
});