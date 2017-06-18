if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'PicShareAK'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'PicShareAK'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'PicShareAK'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'PicShareAK'.");
}
var PicShareAK = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var FormMethod = $module$kotlinx_html_js.kotlinx.html.FormMethod;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var input = $module$kotlinx_html_js.kotlinx.html.input_e1g74z$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var label = $module$kotlinx_html_js.kotlinx.html.label_yd75js$;
  var form = $module$kotlinx_html_js.kotlinx.html.form_3vb3wm$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var set_onSubmitFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onSubmitFunction_pszlq2$;
  var li = $module$kotlinx_html_js.kotlinx.html.li_yzv5uh$;
  var ul = $module$kotlinx_html_js.kotlinx.html.ul_pzlyaf$;
  function useHistTest() {
    window.history.pushState(null, 'reg', '#reg');
  }
  function AuthAcc(login, password) {
    if (login === void 0)
      login = '';
    if (password === void 0)
      password = '';
    this.login = login;
    this.password = password;
  }
  AuthAcc.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AuthAcc',
    interfaces: []
  };
  AuthAcc.prototype.component1 = function () {
    return this.login;
  };
  AuthAcc.prototype.component2 = function () {
    return this.password;
  };
  AuthAcc.prototype.copy_rkkr90$ = function (login, password) {
    return new AuthAcc(login === void 0 ? this.login : login, password === void 0 ? this.password : password);
  };
  AuthAcc.prototype.toString = function () {
    return 'AuthAcc(login=' + Kotlin.toString(this.login) + (', password=' + Kotlin.toString(this.password)) + ')';
  };
  AuthAcc.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.login) | 0;
    result = result * 31 + Kotlin.hashCode(this.password) | 0;
    return result;
  };
  AuthAcc.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.login, other.login) && Kotlin.equals(this.password, other.password)))));
  };
  var URL;
  function main$lambda(f) {
    gAuthGUI();
  }
  function main(args) {
    window.addEventListener('DOMContentLoaded', main$lambda);
    println('true');
  }
  function singUp$lambda(res) {
    println(res.ok);
    println(res.status);
    println(res.url);
    println(res);
  }
  function singUp(username, password, email, gender, priv, photo, URL_0, formtest) {
    var url = URL_0 + 'accounts/';
    println(url);
    println(formtest);
    println(JSON.stringify(formtest));
    var method = 'post';
    var headers = json([to('Content-Type', 'application/json')]);
    var body = formtest;
    var referrer;
    var referrerPolicy;
    var mode;
    var credentials;
    var cache;
    var redirect;
    var integrity;
    var keepalive;
    var window_0;
    if (method === void 0) {
      method = null;
    }
    if (headers === void 0) {
      headers = null;
    }
    if (body === void 0) {
      body = null;
    }
    if (referrer === void 0) {
      referrer = null;
    }
    if (referrerPolicy === void 0) {
      referrerPolicy = null;
    }
    if (mode === void 0) {
      mode = null;
    }
    if (credentials === void 0) {
      credentials = null;
    }
    if (cache === void 0) {
      cache = null;
    }
    if (redirect === void 0) {
      redirect = null;
    }
    if (integrity === void 0) {
      integrity = null;
    }
    if (keepalive === void 0) {
      keepalive = null;
    }
    if (window_0 === void 0) {
      window_0 = null;
    }
    var o = {};
    o['method'] = method;
    o['headers'] = headers;
    o['body'] = body;
    o['referrer'] = referrer;
    o['referrerPolicy'] = referrerPolicy;
    o['mode'] = mode;
    o['credentials'] = credentials;
    o['cache'] = cache;
    o['redirect'] = redirect;
    o['integrity'] = integrity;
    o['keepalive'] = keepalive;
    o['window'] = window_0;
    window.fetch(url, o).then(singUp$lambda);
  }
  function feedGet$lambda(res) {
    println(res.ok);
    println(res.status);
    println(res.url);
    println(res.body);
    println(res.headers);
  }
  function feedGet(URL_0) {
    var url = URL_0 + 'feed';
    println(url);
    window.fetch(url).then(feedGet$lambda);
  }
  function logOut$lambda(res) {
    println(res.ok);
    println(res.status);
    println(res.url);
    println(res.body);
    println(res.headers);
  }
  function logOut(URL_0) {
    var url = URL_0 + '/logout';
    println(url);
    window.fetch(url).then(logOut$lambda);
  }
  function singIn$lambda(res) {
    println(res.ok);
    println(res.status);
    println(res.url);
    println(res);
  }
  function singIn(username, password, URL_0) {
    var tmp$;
    var authAcc = new AuthAcc(username, password);
    var url = URL_0 + 'login';
    println(url);
    var status = false;
    tmp$ = JSON.stringify(authAcc);
    var method = 'post';
    var headers = json([to('Content-Type', 'application/json')]);
    var body = tmp$;
    var referrer;
    var referrerPolicy;
    var mode;
    var credentials;
    var cache;
    var redirect;
    var integrity;
    var keepalive;
    var window_0;
    if (method === void 0) {
      method = null;
    }
    if (headers === void 0) {
      headers = null;
    }
    if (body === void 0) {
      body = null;
    }
    if (referrer === void 0) {
      referrer = null;
    }
    if (referrerPolicy === void 0) {
      referrerPolicy = null;
    }
    if (mode === void 0) {
      mode = null;
    }
    if (credentials === void 0) {
      credentials = null;
    }
    if (cache === void 0) {
      cache = null;
    }
    if (redirect === void 0) {
      redirect = null;
    }
    if (integrity === void 0) {
      integrity = null;
    }
    if (keepalive === void 0) {
      keepalive = null;
    }
    if (window_0 === void 0) {
      window_0 = null;
    }
    var o = {};
    o['method'] = method;
    o['headers'] = headers;
    o['body'] = body;
    o['referrer'] = referrer;
    o['referrerPolicy'] = referrerPolicy;
    o['mode'] = mode;
    o['credentials'] = credentials;
    o['cache'] = cache;
    o['redirect'] = redirect;
    o['integrity'] = integrity;
    o['keepalive'] = keepalive;
    o['window'] = window_0;
    var req = o;
    println(JSON.stringify(req));
    window.fetch(url, req).then(singIn$lambda);
    return status;
  }
  function gAuthGUI$lambda$lambda$lambda$lambda($receiver) {
    set_id($receiver, 'LoginAuth');
    $receiver.type = InputType.text;
    $receiver.placeholder = 'Username';
  }
  function gAuthGUI$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, gAuthGUI$lambda$lambda$lambda$lambda);
  }
  function gAuthGUI$lambda$lambda$lambda$lambda_0($receiver) {
    set_id($receiver, 'PasswordAuth');
    $receiver.type = InputType.password;
    $receiver.placeholder = 'Password';
  }
  function gAuthGUI$lambda$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, gAuthGUI$lambda$lambda$lambda$lambda_0);
  }
  function gAuthGUI$lambda$lambda$lambda$lambda$lambda(f) {
    var tmp$, tmp$_0;
    window.history.pushState(null, 'Feed List', '/feed');
    var username = ((tmp$ = document.getElementById('LoginAuth')) != null ? tmp$ : Kotlin.throwNPE()).nodeValue;
    var password = ((tmp$_0 = document.getElementById('PasswordAuth')) != null ? tmp$_0 : Kotlin.throwNPE()).nodeValue;
    if (singIn(username, password, URL)) {
      gFeedList();
    }
  }
  function gAuthGUI$lambda$lambda$lambda$lambda_1($receiver) {
    set_id($receiver, 'singInSub');
    $receiver.type = InputType.submit;
    set_onClickFunction($receiver, gAuthGUI$lambda$lambda$lambda$lambda$lambda);
    $receiver.unaryPlus_pdl1vz$('Sign in');
  }
  function gAuthGUI$lambda$lambda$lambda_1($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, gAuthGUI$lambda$lambda$lambda$lambda_1);
  }
  function gAuthGUI$lambda$lambda$lambda$lambda$lambda_0(f) {
    window.history.pushState(null, 'Registration', '/registration');
    gRegGui();
  }
  function gAuthGUI$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.type = InputType.button;
    $receiver.value = 'Registration';
    set_onClickFunction($receiver, gAuthGUI$lambda$lambda$lambda$lambda$lambda_0);
  }
  function gAuthGUI$lambda$lambda$lambda_2($receiver) {
    set_id($receiver, 'registration');
    input($receiver, void 0, void 0, void 0, void 0, void 0, gAuthGUI$lambda$lambda$lambda$lambda_2);
  }
  function gAuthGUI$lambda$lambda$lambda$lambda$lambda$lambda(it) {
  }
  function gAuthGUI$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.type = InputType.radio;
    $receiver.name = 'radioSql';
    $receiver.value = 'sql';
    set_onClickFunction($receiver, gAuthGUI$lambda$lambda$lambda$lambda$lambda$lambda);
  }
  function gAuthGUI$lambda$lambda$lambda$lambda_3($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, gAuthGUI$lambda$lambda$lambda$lambda$lambda_1);
    $receiver.unaryPlus_pdl1vz$('sql');
    $receiver.for_ = 'radioSql';
  }
  function gAuthGUI$lambda$lambda$lambda$lambda$lambda$lambda_0(it) {
  }
  function gAuthGUI$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.type = InputType.radio;
    $receiver.name = 'radioNoSql';
    $receiver.value = 'nosql';
    set_onClickFunction($receiver, gAuthGUI$lambda$lambda$lambda$lambda$lambda$lambda_0);
  }
  function gAuthGUI$lambda$lambda$lambda$lambda_4($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, gAuthGUI$lambda$lambda$lambda$lambda$lambda_2);
    $receiver.unaryPlus_pdl1vz$('nosql');
    $receiver.for_ = 'radioNoSql';
  }
  function gAuthGUI$lambda$lambda$lambda_3($receiver) {
    set_id($receiver, 'radioChangeDB');
    label($receiver, void 0, gAuthGUI$lambda$lambda$lambda$lambda_3);
    label($receiver, void 0, gAuthGUI$lambda$lambda$lambda$lambda_4);
  }
  function gAuthGUI$lambda$lambda($receiver) {
    $receiver.method = FormMethod.post;
    $receiver.action = '#main';
    div($receiver, void 0, gAuthGUI$lambda$lambda$lambda);
    div($receiver, void 0, gAuthGUI$lambda$lambda$lambda_0);
    div($receiver, void 0, gAuthGUI$lambda$lambda$lambda_1);
    div($receiver, void 0, gAuthGUI$lambda$lambda$lambda_2);
    div($receiver, void 0, gAuthGUI$lambda$lambda$lambda_3);
  }
  function gAuthGUI$lambda($receiver) {
    set_id($receiver, 'form_container_auth');
    form($receiver, void 0, void 0, void 0, void 0, gAuthGUI$lambda$lambda);
  }
  function gAuthGUI() {
    window.history.pushState(null, 'Authorization', '/auth');
    var root = document.getElementById('root');
    (root != null ? root : Kotlin.throwNPE()).innerHTML = '';
    var authWin = div_0(get_create(document), void 0, gAuthGUI$lambda);
    root.appendChild(authWin);
  }
  function gRegGui$lambda$lambda$lambda(f) {
    var tmp$, tmp$_0;
    window.history.pushState(null, 'Authorization', '/auth');
    var formTestReg = new FormData(Kotlin.isType(tmp$_0 = (tmp$ = document.getElementById('formTestReg')) != null ? tmp$ : Kotlin.throwNPE(), HTMLFormElement) ? tmp$_0 : Kotlin.throwCCE());
    println(formTestReg);
    println(JSON.stringify(formTestReg));
    gAuthGUI();
  }
  function gRegGui$lambda$lambda$lambda$lambda($receiver) {
    set_id($receiver, 'LoginReg');
    $receiver.type = InputType.text;
    $receiver.placeholder = 'Username';
  }
  function gRegGui$lambda$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, gRegGui$lambda$lambda$lambda$lambda);
  }
  function gRegGui$lambda$lambda$lambda$lambda_0($receiver) {
    set_id($receiver, 'EmailReg');
    $receiver.type = InputType.email;
    $receiver.placeholder = 'Email';
  }
  function gRegGui$lambda$lambda$lambda_1($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, gRegGui$lambda$lambda$lambda$lambda_0);
  }
  function gRegGui$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.name = 'radioGenderReg';
    $receiver.type = InputType.radio;
    $receiver.value = 'male';
  }
  function gRegGui$lambda$lambda$lambda$lambda_1($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, gRegGui$lambda$lambda$lambda$lambda$lambda);
    $receiver.unaryPlus_pdl1vz$('male');
    $receiver.for_ = 'radioGenderReg';
  }
  function gRegGui$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.name = 'radioGenderReg';
    $receiver.type = InputType.radio;
    $receiver.value = 'female';
  }
  function gRegGui$lambda$lambda$lambda$lambda_2($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, gRegGui$lambda$lambda$lambda$lambda$lambda_0);
    $receiver.unaryPlus_pdl1vz$('female');
    $receiver.for_ = 'radioGenderReg';
  }
  function gRegGui$lambda$lambda$lambda_2($receiver) {
    set_classes($receiver, setOf('singIn'));
    label($receiver, void 0, gRegGui$lambda$lambda$lambda$lambda_1);
    label($receiver, void 0, gRegGui$lambda$lambda$lambda$lambda_2);
  }
  function gRegGui$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.name = 'radioPrivReg';
    $receiver.type = InputType.radio;
    $receiver.value = 'true';
  }
  function gRegGui$lambda$lambda$lambda$lambda_3($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, gRegGui$lambda$lambda$lambda$lambda$lambda_1);
    $receiver.unaryPlus_pdl1vz$('private');
    $receiver.for_ = 'radioPrivReg';
  }
  function gRegGui$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.name = 'radioPrivReg';
    $receiver.type = InputType.radio;
    $receiver.value = 'true';
  }
  function gRegGui$lambda$lambda$lambda$lambda_4($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, gRegGui$lambda$lambda$lambda$lambda$lambda_2);
    $receiver.unaryPlus_pdl1vz$('not private');
    $receiver.for_ = 'radioPrivReg';
  }
  function gRegGui$lambda$lambda$lambda_3($receiver) {
    set_classes($receiver, setOf('singIn'));
    label($receiver, void 0, gRegGui$lambda$lambda$lambda$lambda_3);
    label($receiver, void 0, gRegGui$lambda$lambda$lambda$lambda_4);
  }
  function gRegGui$lambda$lambda$lambda$lambda_5($receiver) {
    set_id($receiver, 'PasswordReg');
    $receiver.type = InputType.password;
    $receiver.placeholder = 'Password';
  }
  function gRegGui$lambda$lambda$lambda_4($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, gRegGui$lambda$lambda$lambda$lambda_5);
  }
  function gRegGui$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.name = 'photoReg';
    $receiver.type = InputType.file;
  }
  function gRegGui$lambda$lambda$lambda_5($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, gRegGui$lambda$lambda$lambda$lambda_6);
  }
  function gRegGui$lambda$lambda$lambda$lambda_7($receiver) {
    set_id($receiver, 'registration');
    $receiver.type = InputType.submit;
    $receiver.value = 'registration';
  }
  function gRegGui$lambda$lambda$lambda_6($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, gRegGui$lambda$lambda$lambda$lambda_7);
  }
  function gRegGui$lambda$lambda($receiver) {
    set_id($receiver, 'formTestReg');
    $receiver.name = 'formTestReg';
    set_onSubmitFunction($receiver, gRegGui$lambda$lambda$lambda);
    div($receiver, void 0, gRegGui$lambda$lambda$lambda_0);
    div($receiver, void 0, gRegGui$lambda$lambda$lambda_1);
    div($receiver, void 0, gRegGui$lambda$lambda$lambda_2);
    div($receiver, void 0, gRegGui$lambda$lambda$lambda_3);
    div($receiver, void 0, gRegGui$lambda$lambda$lambda_4);
    div($receiver, void 0, gRegGui$lambda$lambda$lambda_5);
    div($receiver, void 0, gRegGui$lambda$lambda$lambda_6);
  }
  function gRegGui$lambda($receiver) {
    set_id($receiver, 'form_container_reg');
    form($receiver, void 0, void 0, void 0, void 0, gRegGui$lambda$lambda);
  }
  function gRegGui() {
    var tmp$;
    var root = document.getElementById('root');
    (root != null ? root : Kotlin.throwNPE()).innerHTML = '';
    var regWin = div_0(get_create(document), void 0, gRegGui$lambda);
    root.appendChild(regWin);
    (tmp$ = document.body) != null ? tmp$.appendChild(regWin) : null;
  }
  function gNavBar$lambda$lambda$lambda$lambda(f) {
    logOut(URL);
  }
  function gNavBar$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    $receiver.unaryPlus_pdl1vz$('Log Out');
    set_onClickFunction($receiver, gNavBar$lambda$lambda$lambda$lambda);
  }
  function gNavBar$lambda$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    $receiver.unaryPlus_pdl1vz$('Account Settings');
  }
  function gNavBar$lambda$lambda$lambda_1($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    $receiver.unaryPlus_pdl1vz$('Subscribers');
  }
  function gNavBar$lambda$lambda$lambda_2($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    $receiver.unaryPlus_pdl1vz$('Subscriptions');
  }
  function gNavBar$lambda$lambda$lambda_3($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    $receiver.unaryPlus_pdl1vz$('Likes');
  }
  function gNavBar$lambda$lambda$lambda_4($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    $receiver.unaryPlus_pdl1vz$('Comments');
  }
  function gNavBar$lambda$lambda$lambda_5($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    $receiver.unaryPlus_pdl1vz$('Feed');
  }
  function gNavBar$lambda$lambda($receiver) {
    set_id($receiver, 'ulNavBar');
    li($receiver, void 0, gNavBar$lambda$lambda$lambda);
    li($receiver, void 0, gNavBar$lambda$lambda$lambda_0);
    li($receiver, void 0, gNavBar$lambda$lambda$lambda_1);
    li($receiver, void 0, gNavBar$lambda$lambda$lambda_2);
    li($receiver, void 0, gNavBar$lambda$lambda$lambda_3);
    li($receiver, void 0, gNavBar$lambda$lambda$lambda_4);
    li($receiver, void 0, gNavBar$lambda$lambda$lambda_5);
  }
  function gNavBar$lambda($receiver) {
    set_id($receiver, 'navBar');
    ul($receiver, void 0, gNavBar$lambda$lambda);
  }
  function gNavBar() {
    var navBar = div_0(get_create(document), void 0, gNavBar$lambda);
    return navBar;
  }
  function gAllPostsFromAcc$lambda$lambda$lambda($receiver) {
    set_id($receiver, 'infoUserGetUsername');
  }
  function gAllPostsFromAcc$lambda$lambda$lambda_0($receiver) {
    set_id($receiver, 'infoUserGetGender');
  }
  function gAllPostsFromAcc$lambda$lambda$lambda_1($receiver) {
    set_id($receiver, 'infoUserGetPriv');
  }
  function gAllPostsFromAcc$lambda$lambda$lambda_2($receiver) {
    set_id($receiver, 'infoUserGetPhoto');
  }
  function gAllPostsFromAcc$lambda$lambda($receiver) {
    set_id($receiver, 'infoUserGet');
    div($receiver, void 0, gAllPostsFromAcc$lambda$lambda$lambda);
    div($receiver, void 0, gAllPostsFromAcc$lambda$lambda$lambda_0);
    div($receiver, void 0, gAllPostsFromAcc$lambda$lambda$lambda_1);
    div($receiver, void 0, gAllPostsFromAcc$lambda$lambda$lambda_2);
  }
  function gAllPostsFromAcc$lambda$lambda$lambda_3($receiver) {
    set_id($receiver, 'postUserGetDate');
  }
  function gAllPostsFromAcc$lambda$lambda$lambda_4($receiver) {
    set_id($receiver, 'postUserGetPhoto');
  }
  function gAllPostsFromAcc$lambda$lambda$lambda_5($receiver) {
    set_id($receiver, 'postUserGetLikes');
  }
  function gAllPostsFromAcc$lambda$lambda_0($receiver) {
    set_id($receiver, 'postsUserGet');
    div($receiver, void 0, gAllPostsFromAcc$lambda$lambda$lambda_3);
    div($receiver, void 0, gAllPostsFromAcc$lambda$lambda$lambda_4);
    div($receiver, void 0, gAllPostsFromAcc$lambda$lambda$lambda_5);
  }
  function gAllPostsFromAcc$lambda($receiver) {
    set_id($receiver, 'allPostFromAcc');
    div($receiver, void 0, gAllPostsFromAcc$lambda$lambda);
    div($receiver, void 0, gAllPostsFromAcc$lambda$lambda_0);
  }
  function gAllPostsFromAcc() {
    window.history.pushState(null, 'Authorization', '/auth');
    var root = document.getElementById('root');
    (root != null ? root : Kotlin.throwNPE()).innerHTML = '';
    var allPostFromAcc = div_0(get_create(document), void 0, gAllPostsFromAcc$lambda);
    root.appendChild(gNavBar());
    root.appendChild(allPostFromAcc);
  }
  function gFeed$lambda$lambda($receiver) {
    set_id($receiver, 'postUserGetDate');
  }
  function gFeed$lambda$lambda_0($receiver) {
    set_id($receiver, 'postUserGetPhoto');
  }
  function gFeed$lambda$lambda_1($receiver) {
    set_id($receiver, 'postUserGetLikes');
  }
  function gFeed$lambda($receiver) {
    set_id($receiver, 'postsUserGet');
    div($receiver, void 0, gFeed$lambda$lambda);
    div($receiver, void 0, gFeed$lambda$lambda_0);
    div($receiver, void 0, gFeed$lambda$lambda_1);
  }
  function gFeed() {
    var feed = div_0(get_create(document), void 0, gFeed$lambda);
    return feed;
  }
  function gFeedList$lambda$lambda($receiver) {
    gFeed();
  }
  function gFeedList$lambda($receiver) {
    set_id($receiver, 'feedList');
    div($receiver, void 0, gFeedList$lambda$lambda);
  }
  function gFeedList() {
    window.history.pushState(null, 'Feed', '/feed');
    var root = document.getElementById('root');
    (root != null ? root : Kotlin.throwNPE()).innerHTML = '';
    var feedList = div_0(get_create(document), void 0, gFeedList$lambda);
    root.appendChild(gNavBar());
    root.appendChild(feedList);
  }
  function Account(username, password, email, gender, priv, photo) {
    if (username === void 0)
      username = '';
    if (password === void 0)
      password = '';
    if (email === void 0)
      email = '';
    if (gender === void 0)
      gender = true;
    if (priv === void 0)
      priv = false;
    if (photo === void 0)
      photo = null;
    this.username = username;
    this.password = password;
    this.email = email;
    this.gender = gender;
    this.priv = priv;
    this.photo = photo;
  }
  Account.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Account',
    interfaces: []
  };
  Account.prototype.component1 = function () {
    return this.username;
  };
  Account.prototype.component2 = function () {
    return this.password;
  };
  Account.prototype.component3 = function () {
    return this.email;
  };
  Account.prototype.component4 = function () {
    return this.gender;
  };
  Account.prototype.component5 = function () {
    return this.priv;
  };
  Account.prototype.component6 = function () {
    return this.photo;
  };
  Account.prototype.copy_jve365$ = function (username, password, email, gender, priv, photo) {
    return new Account(username === void 0 ? this.username : username, password === void 0 ? this.password : password, email === void 0 ? this.email : email, gender === void 0 ? this.gender : gender, priv === void 0 ? this.priv : priv, photo === void 0 ? this.photo : photo);
  };
  Account.prototype.toString = function () {
    return 'Account(username=' + Kotlin.toString(this.username) + (', password=' + Kotlin.toString(this.password)) + (', email=' + Kotlin.toString(this.email)) + (', gender=' + Kotlin.toString(this.gender)) + (', priv=' + Kotlin.toString(this.priv)) + (', photo=' + Kotlin.toString(this.photo)) + ')';
  };
  Account.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    result = result * 31 + Kotlin.hashCode(this.password) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    result = result * 31 + Kotlin.hashCode(this.gender) | 0;
    result = result * 31 + Kotlin.hashCode(this.priv) | 0;
    result = result * 31 + Kotlin.hashCode(this.photo) | 0;
    return result;
  };
  Account.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.username, other.username) && Kotlin.equals(this.password, other.password) && Kotlin.equals(this.email, other.email) && Kotlin.equals(this.gender, other.gender) && Kotlin.equals(this.priv, other.priv) && Kotlin.equals(this.photo, other.photo)))));
  };
  function Post(id, datetime, account, photo, likes) {
    if (photo === void 0)
      photo = '';
    this.id = id;
    this.datetime = datetime;
    this.account = account;
    this.photo = photo;
    this.likes = likes;
  }
  Post.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Post',
    interfaces: []
  };
  Post.prototype.component1 = function () {
    return this.id;
  };
  Post.prototype.component2 = function () {
    return this.datetime;
  };
  Post.prototype.component3 = function () {
    return this.account;
  };
  Post.prototype.component4 = function () {
    return this.photo;
  };
  Post.prototype.component5 = function () {
    return this.likes;
  };
  Post.prototype.copy_b0ir2q$ = function (id, datetime, account, photo, likes) {
    return new Post(id === void 0 ? this.id : id, datetime === void 0 ? this.datetime : datetime, account === void 0 ? this.account : account, photo === void 0 ? this.photo : photo, likes === void 0 ? this.likes : likes);
  };
  Post.prototype.toString = function () {
    return 'Post(id=' + Kotlin.toString(this.id) + (', datetime=' + Kotlin.toString(this.datetime)) + (', account=' + Kotlin.toString(this.account)) + (', photo=' + Kotlin.toString(this.photo)) + (', likes=' + Kotlin.toString(this.likes)) + ')';
  };
  Post.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.datetime) | 0;
    result = result * 31 + Kotlin.hashCode(this.account) | 0;
    result = result * 31 + Kotlin.hashCode(this.photo) | 0;
    result = result * 31 + Kotlin.hashCode(this.likes) | 0;
    return result;
  };
  Post.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.datetime, other.datetime) && Kotlin.equals(this.account, other.account) && Kotlin.equals(this.photo, other.photo) && Kotlin.equals(this.likes, other.likes)))));
  };
  function Like(id, date, account) {
    this.id = id;
    this.date = date;
    this.account = account;
  }
  Like.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Like',
    interfaces: []
  };
  Like.prototype.component1 = function () {
    return this.id;
  };
  Like.prototype.component2 = function () {
    return this.date;
  };
  Like.prototype.component3 = function () {
    return this.account;
  };
  Like.prototype.copy_k7iph9$ = function (id, date, account) {
    return new Like(id === void 0 ? this.id : id, date === void 0 ? this.date : date, account === void 0 ? this.account : account);
  };
  Like.prototype.toString = function () {
    return 'Like(id=' + Kotlin.toString(this.id) + (', date=' + Kotlin.toString(this.date)) + (', account=' + Kotlin.toString(this.account)) + ')';
  };
  Like.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.account) | 0;
    return result;
  };
  Like.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.date, other.date) && Kotlin.equals(this.account, other.account)))));
  };
  function radioCheck(name) {
    var check = document.getElementsByName(name);
    if (check[0].checked) {
      return true;
    }
     else {
      if (check[1].checked) {
        return false;
      }
    }
    return false;
  }
  _.useHistTest = useHistTest;
  _.AuthAcc = AuthAcc;
  Object.defineProperty(_, 'URL', {
    get: function () {
      return URL;
    }
  });
  _.main_kand9s$ = main;
  _.singUp_xw5fta$ = singUp;
  _.feedGet_61zpoe$ = feedGet;
  _.logOut_61zpoe$ = logOut;
  _.singIn_bx1i3m$ = singIn;
  _.gAuthGUI = gAuthGUI;
  _.gRegGui = gRegGui;
  _.gNavBar = gNavBar;
  _.gAllPostsFromAcc = gAllPostsFromAcc;
  _.gFeed = gFeed;
  _.gFeedList = gFeedList;
  _.Account = Account;
  _.Post = Post;
  _.Like = Like;
  _.radioCheck_61zpoe$ = radioCheck;
  URL = 'http://picshare-sfedu.azurewebsites.net/sql/';
  Kotlin.defineModule('PicShareAK', _);
  main([]);
  return _;
}(typeof PicShareAK === 'undefined' ? {} : PicShareAK, kotlin, this['kotlinx-html-js']);
