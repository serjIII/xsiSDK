var cookie_namespace = 'doxygen'; 
var sidenav,navtree,content,header;

function readCookie(cookie) 
{
  var myCookie = cookie_namespace+"_"+cookie+"=";
  if (document.cookie) 
  {
    var index = document.cookie.indexOf(myCookie);
    if (index != -1) 
    {
      var valStart = index + myCookie.length;
      var valEnd = document.cookie.indexOf(";", valStart);
      if (valEnd == -1) 
      {
        valEnd = document.cookie.length;
      }
      var val = document.cookie.substring(valStart, valEnd);
      return val;
    }
  }
  return 0;
}

function writeCookie(cookie, val, expiration) 
{
  if (val==undefined) return;
  if (expiration == null) 
  {
    var date = new Date();
    date.setTime(date.getTime()+(10*365*24*60*60*1000)); // default expiration is one week
    expiration = date.toGMTString();
  }
  document.cookie = cookie_namespace + "_" + cookie + "=" + val + "; expires=" + expiration+"; path=/";
}
 
function resizeWidth() 
{
  var windowWidth = dQuery(window).width() + "px";
  var sidenavWidth = dQuery(sidenav).outerWidth();
  content.css({marginLeft:parseInt(sidenavWidth)+"px"}); 
  writeCookie('width',sidenavWidth, null);
}

function restoreWidth(navWidth)
{
  var windowWidth = dQuery(window).width() + "px";
  content.css({marginLeft:parseInt(navWidth)+6+"px"});
  sidenav.css({width:navWidth + "px"});
}

function resizeHeight() 
{
  var headerHeight = header.outerHeight();
  var footerHeight = footer.outerHeight();
  var windowHeight = dQuery(window).height() - headerHeight - footerHeight;
  if (!dQuery("div#main.view-active").length) { 
    // we are not in the 2.1 chrome: therefore AKN or CHM
    dQuery("#side-nav").css("position", "fixed"); 
    dQuery("#doc-content").css("min-height", windowHeight + "px"); 
    }
  navtree.css({height:windowHeight + "px"});
  sidenav.css({height:windowHeight + "px",top: 0+"px"});
}

function initResizable()
{
  header  = dQuery("#banner");
  sidenav = dQuery("#side-nav");
  content = dQuery("#doc-content, body > div.ui-component");
  navtree = dQuery("#nav-tree");
  footer  = dQuery("#breadcrumbs");
  dQuery(".side-nav-resizable").resizable({resize: function(e, ui) { resizeWidth(); } });
  dQuery(window).resize(function() { resizeHeight(); });
  var width = readCookie('width');
  if (width) { restoreWidth(width); } else { resizeWidth(); }
  resizeHeight();
  var url = location.href;
  var i=url.indexOf("#");
  if (i>=0) window.location.hash=url.substr(i);
  var _preventDefault = function(evt) { evt.preventDefault(); };
  dQuery("#splitbar").bind("dragstart", _preventDefault).bind("selectstart", _preventDefault);
  dQuery(document).bind('touchmove',function(e){
    var device = navigator.userAgent.toLowerCase();
    var ios = device.match(/(iphone|ipod|ipad)/);
    if (ios) {
      try {
        var target = e.target;
        while (target) {
          if (dQuery(target).css('-webkit-overflow-scrolling')=='touch') return;
          target = target.parentNode;
        }
        e.preventDefault();
      } catch(err) {
        e.preventDefault();
      }
    }
  });
}


