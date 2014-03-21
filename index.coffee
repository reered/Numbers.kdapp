class NumbersMainView extends KDView

  constructor:(options = {}, data)->
    options.cssClass = 'numbers main-view'
    super options, data

  viewAppended:->
    @addSubView new KDCustomHTMLView
      tagName    : "iframe"
      attributes :
        src      : "https://ov3y.github.io/2048-AI/"
        width    : "100%"
        height   : "100%"

class NumbersController extends AppController

  constructor:(options = {}, data)->
    options.view    = new NumbersMainView
    options.appInfo =
      name : "Numbers"
      type : "application"

    super options, data

do ->

  # In live mode you can add your App view to window's appView
  if appView?

    view = new NumbersMainView
    appView.addSubView view

  else

    KD.registerAppClass NumbersController,
      name     : "Numbers"
      routes   :
        "/:name?/Numbers" : null
        "/:name?/rest/Apps/Numbers" : null
      dockPath : "/rest/Apps/Numbers"
      behavior : "application"