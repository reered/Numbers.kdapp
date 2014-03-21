/* Compiled by kdc on Fri Mar 21 2014 18:46:22 GMT+0000 (UTC) */
(function() {
/* KDAPP STARTS */
/* BLOCK STARTS: /home/rest/Applications/Numbers.kdapp/index.coffee */
var NumbersController, NumbersMainView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

NumbersMainView = (function(_super) {
  __extends(NumbersMainView, _super);

  function NumbersMainView(options, data) {
    if (options == null) {
      options = {};
    }
    options.cssClass = 'numbers main-view';
    NumbersMainView.__super__.constructor.call(this, options, data);
  }

  NumbersMainView.prototype.viewAppended = function() {
    return this.addSubView(new KDCustomHTMLView({
      tagName: "iframe",
      attributes: {
        src: "https://ov3y.github.io/2048-AI/",
        width: "100%",
        height: "100%"
      }
    }));
  };

  return NumbersMainView;

})(KDView);

NumbersController = (function(_super) {
  __extends(NumbersController, _super);

  function NumbersController(options, data) {
    if (options == null) {
      options = {};
    }
    options.view = new NumbersMainView;
    options.appInfo = {
      name: "Numbers",
      type: "application"
    };
    NumbersController.__super__.constructor.call(this, options, data);
  }

  return NumbersController;

})(AppController);

(function() {
  var view;
  if (typeof appView !== "undefined" && appView !== null) {
    view = new NumbersMainView;
    return appView.addSubView(view);
  } else {
    return KD.registerAppClass(NumbersController, {
      name: "Numbers",
      routes: {
        "/:name?/Numbers": null,
        "/:name?/rest/Apps/Numbers": null
      },
      dockPath: "/rest/Apps/Numbers",
      behavior: "application"
    });
  }
})();

/* KDAPP ENDS */
}).call();