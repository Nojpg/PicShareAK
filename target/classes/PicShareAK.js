if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'PicShareAK'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'PicShareAK'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'PicShareAK'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'PicShareAK'.");
}
var PicShareAK = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var iterator = Kotlin.kotlin.js.iterator_s8jyvk$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
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
  var form = $module$kotlinx_html_js.kotlinx.html.form_3vb3wm$;
  var label = $module$kotlinx_html_js.kotlinx.html.label_yd75js$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var li = $module$kotlinx_html_js.kotlinx.html.li_yzv5uh$;
  var button = $module$kotlinx_html_js.kotlinx.html.button_whohl6$;
  var ul = $module$kotlinx_html_js.kotlinx.html.ul_pzlyaf$;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var div_1 = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  function showComments(res) {
    var tmp$;
    viewPosts();
    tmp$ = iterator(res);
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var id = item.id;
      var datetime = item.datetime;
      var username = item.account.username;
      var text = item.text;
      viewComments(id, datetime, username, text);
    }
  }
  function fetchRequest$lambda(closure$fn) {
    return function (response) {
      var tmp$;
      println(response.ok);
      println(response.url);
      println(response.status);
      tmp$ = closure$fn;
      if (Kotlin.equals(tmp$, 'delAcc'))
        println('Deleted');
      else if (Kotlin.equals(tmp$, 'logAcc'))
        println('LogOut successful');
      else if (Kotlin.equals(tmp$, 'subscribe'))
        println('Now you are follower');
      else if (Kotlin.equals(tmp$, 'unSubscribe'))
        println('unsubscribed');
      return response.json();
    };
  }
  function fetchRequest$lambda_0(closure$fn) {
    return function (response) {
      var tmp$;
      tmp$ = closure$fn;
      if (Kotlin.equals(tmp$, 'getAcc'))
        getAcc(response);
      else if (Kotlin.equals(tmp$, 'login'))
        login(response);
      else if (Kotlin.equals(tmp$, 'getPosts'))
        getPosts(response);
      else if (Kotlin.equals(tmp$, 'getLikes'))
        getLikes(response);
      else if (Kotlin.equals(tmp$, 'getComments'))
        getComments(response);
      else if (Kotlin.equals(tmp$, 'getSubs'))
        getSubs(response);
      else if (Kotlin.equals(tmp$, 'getFollower'))
        getFollower(response);
      else if (Kotlin.equals(tmp$, 'showComments'))
        showComments(response);
    };
  }
  function fetchRequest(method, body, url, fn, URL) {
    if (fn === void 0)
      fn = '';
    println(method + ' ' + body + ' ' + url);
    println(JSON.stringify(headers));
    var tmp$ = Kotlin.toString(URL) + url;
    var method_0 = method;
    var headers_0 = headers;
    var body_0 = body;
    var referrer = void 0;
    var referrerPolicy_0 = referrerPolicy;
    var mode_0 = mode;
    var credentials_0 = credentials;
    var cache_0 = cache;
    var redirect_0 = redirect;
    var integrity_0 = integrity;
    var keepalive;
    var window_0;
    if (method_0 === void 0) {
      method_0 = null;
    }
    if (headers_0 === void 0) {
      headers_0 = null;
    }
    if (body_0 === void 0) {
      body_0 = null;
    }
    if (referrer === void 0) {
      referrer = null;
    }
    if (referrerPolicy_0 === void 0) {
      referrerPolicy_0 = null;
    }
    if (mode_0 === void 0) {
      mode_0 = null;
    }
    if (credentials_0 === void 0) {
      credentials_0 = null;
    }
    if (cache_0 === void 0) {
      cache_0 = null;
    }
    if (redirect_0 === void 0) {
      redirect_0 = null;
    }
    if (integrity_0 === void 0) {
      integrity_0 = null;
    }
    if (keepalive === void 0) {
      keepalive = null;
    }
    if (window_0 === void 0) {
      window_0 = null;
    }
    var o = {};
    o['method'] = method_0;
    o['headers'] = headers_0;
    o['body'] = body_0;
    o['referrer'] = referrer;
    o['referrerPolicy'] = referrerPolicy_0;
    o['mode'] = mode_0;
    o['credentials'] = credentials_0;
    o['cache'] = cache_0;
    o['redirect'] = redirect_0;
    o['integrity'] = integrity_0;
    o['keepalive'] = keepalive;
    o['window'] = window_0;
    var request = new Request(tmp$, o);
    window.fetch(request).then(fetchRequest$lambda(fn)).then(fetchRequest$lambda_0(fn));
  }
  var id;
  var email;
  var priv;
  var gender;
  var photo;
  var username;
  function getAcc(res) {
    println(JSON.stringify(res));
    println(res);
    println(res.id);
    id = res.id;
    username = res.username;
    email = res.email;
    priv = res.priv;
    gender = res.gender;
    photo = res.photo;
    getAccInfo(id, username, email, gender, priv, photo);
  }
  function login(res) {
    println(JSON.stringify(res));
    println(res);
    id = res.id;
    username = res.username;
    email = res.email;
    priv = res.priv;
    gender = res.gender;
    photo = res.photo;
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('username', username);
    print(sessionStorage.getItem('id'));
    println(sessionStorage.getItem('username'));
    mainWin();
    viewAcc(id, username, email, gender, priv, photo);
  }
  function getPosts(res) {
    var tmp$, tmp$_0;
    viewPosts();
    tmp$ = iterator(res);
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      println(JSON.stringify(item));
      var id = item.id;
      var datetime = item.datetime;
      var likes = item.likes;
      var like = 0;
      tmp$_0 = iterator(likes);
      while (tmp$_0.hasNext()) {
        var item_0 = tmp$_0.next();
        like = like + 1 | 0;
      }
      var username = item.account.username;
      var photo = item.photo;
      viewSinglePost(id, username, datetime, likes, photo, like);
    }
  }
  function getLikes(res) {
    var tmp$;
    println(JSON.stringify(res));
    viewPosts();
    tmp$ = iterator(res);
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var id = item.id;
      var datetime = item.datetime;
      var username = item.account.username;
      viewLike(id, datetime, username);
    }
  }
  function getComments(res) {
    var tmp$;
    viewPosts();
    tmp$ = iterator(res);
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var id = item.id;
      var datetime = item.datetime;
      var username = item.account.username;
      var text = item.text;
      viewComments(id, datetime, username, text);
    }
  }
  function getSubs(res) {
    var tmp$;
    subs();
    tmp$ = iterator(res);
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var id = item.id;
      var datetime = item.datetime;
      var username = item.account.username;
      sub(id, datetime, username);
    }
  }
  function getFollower(res) {
    var tmp$;
    subs();
    tmp$ = iterator(res);
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var id = item.id;
      var datetime = item.datetime;
      var username = item.follower.username;
      sub(id, datetime, username);
    }
  }
  var POST;
  var GET;
  var PUT;
  var DELETE;
  var integrity;
  var credentials;
  var redirect;
  var cache;
  var mode;
  var referrerPolicy;
  var headers;
  function main(args) {
    launch();
  }
  function Account(username, password, email, gender, priv, photo) {
    if (username === void 0)
      username = '';
    if (password === void 0)
      password = '';
    if (email === void 0)
      email = '';
    if (gender === void 0)
      gender = '';
    if (priv === void 0)
      priv = '';
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
  Account.prototype.copy_ssykek$ = function (username, password, email, gender, priv, photo) {
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
  function AuthAcc(username, password) {
    if (username === void 0)
      username = '';
    if (password === void 0)
      password = '';
    this.username = username;
    this.password = password;
  }
  AuthAcc.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AuthAcc',
    interfaces: []
  };
  AuthAcc.prototype.component1 = function () {
    return this.username;
  };
  AuthAcc.prototype.component2 = function () {
    return this.password;
  };
  AuthAcc.prototype.copy_rkkr90$ = function (username, password) {
    return new AuthAcc(username === void 0 ? this.username : username, password === void 0 ? this.password : password);
  };
  AuthAcc.prototype.toString = function () {
    return 'AuthAcc(username=' + Kotlin.toString(this.username) + (', password=' + Kotlin.toString(this.password)) + ')';
  };
  AuthAcc.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    result = result * 31 + Kotlin.hashCode(this.password) | 0;
    return result;
  };
  AuthAcc.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.username, other.username) && Kotlin.equals(this.password, other.password)))));
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
  function Post(id, datetime, account, photo, likes) {
    if (id === void 0)
      id = null;
    if (datetime === void 0)
      datetime = null;
    if (photo === void 0)
      photo = '';
    if (likes === void 0)
      likes = null;
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
  Post.prototype.copy_eei9x4$ = function (id, datetime, account, photo, likes) {
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
  function PutAcc(username, id, email, gender, priv, photo) {
    if (username === void 0)
      username = '';
    if (id === void 0)
      id = '';
    if (email === void 0)
      email = '';
    if (gender === void 0)
      gender = '';
    if (priv === void 0)
      priv = '';
    if (photo === void 0)
      photo = null;
    this.username = username;
    this.id = id;
    this.email = email;
    this.gender = gender;
    this.priv = priv;
    this.photo = photo;
  }
  PutAcc.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PutAcc',
    interfaces: []
  };
  PutAcc.prototype.component1 = function () {
    return this.username;
  };
  PutAcc.prototype.component2 = function () {
    return this.id;
  };
  PutAcc.prototype.component3 = function () {
    return this.email;
  };
  PutAcc.prototype.component4 = function () {
    return this.gender;
  };
  PutAcc.prototype.component5 = function () {
    return this.priv;
  };
  PutAcc.prototype.component6 = function () {
    return this.photo;
  };
  PutAcc.prototype.copy_ssykek$ = function (username, id, email, gender, priv, photo) {
    return new PutAcc(username === void 0 ? this.username : username, id === void 0 ? this.id : id, email === void 0 ? this.email : email, gender === void 0 ? this.gender : gender, priv === void 0 ? this.priv : priv, photo === void 0 ? this.photo : photo);
  };
  PutAcc.prototype.toString = function () {
    return 'PutAcc(username=' + Kotlin.toString(this.username) + (', id=' + Kotlin.toString(this.id)) + (', email=' + Kotlin.toString(this.email)) + (', gender=' + Kotlin.toString(this.gender)) + (', priv=' + Kotlin.toString(this.priv)) + (', photo=' + Kotlin.toString(this.photo)) + ')';
  };
  PutAcc.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    result = result * 31 + Kotlin.hashCode(this.gender) | 0;
    result = result * 31 + Kotlin.hashCode(this.priv) | 0;
    result = result * 31 + Kotlin.hashCode(this.photo) | 0;
    return result;
  };
  PutAcc.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.username, other.username) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.email, other.email) && Kotlin.equals(this.gender, other.gender) && Kotlin.equals(this.priv, other.priv) && Kotlin.equals(this.photo, other.photo)))));
  };
  function authWin$lambda$lambda$lambda$lambda($receiver) {
    set_id($receiver, 'LoginAuth');
    $receiver.type = InputType.text;
    $receiver.placeholder = 'Username';
  }
  function authWin$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, authWin$lambda$lambda$lambda$lambda);
  }
  function authWin$lambda$lambda$lambda$lambda_0($receiver) {
    set_id($receiver, 'PasswordAuth');
    $receiver.type = InputType.password;
    $receiver.placeholder = 'Password';
  }
  function authWin$lambda$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, authWin$lambda$lambda$lambda$lambda_0);
  }
  function authWin$lambda$lambda$lambda$lambda$lambda(f) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var url = 'login';
    var username = Kotlin.isType(tmp$ = document.getElementById('LoginAuth'), HTMLInputElement) ? tmp$ : Kotlin.throwCCE();
    var password = Kotlin.isType(tmp$_0 = document.getElementById('PasswordAuth'), HTMLInputElement) ? tmp$_0 : Kotlin.throwCCE();
    var body = JSON.stringify(json([to('username', username.value), to('password', password.value)]));
    println(body);
    var checkSql = (Kotlin.isType(tmp$_1 = document.getElementById('radioSql'), HTMLInputElement) ? tmp$_1 : Kotlin.throwCCE()).checked;
    var checkNoSql = (Kotlin.isType(tmp$_2 = document.getElementById('radioNoSql'), HTMLInputElement) ? tmp$_2 : Kotlin.throwCCE()).checked;
    if (checkSql === true) {
      sessionStorage.setItem('URL', 'http://picshare-sfedu.azurewebsites.net/sql/');
      var URL = sessionStorage.getItem('URL');
      fetchRequest(POST, body, url, 'login', URL);
    }
     else if (checkNoSql === true) {
      sessionStorage.setItem('URL', 'http://picshare-sfedu.azurewebsites.net/nosql/');
      var URL_0 = sessionStorage.getItem('URL');
      fetchRequest(POST, body, url, 'login', URL_0);
    }
     else {
      println('Choose DB');
    }
  }
  function authWin$lambda$lambda$lambda$lambda_1($receiver) {
    set_id($receiver, 'singInSub');
    $receiver.type = InputType.button;
    $receiver.value = 'Submit';
    set_onClickFunction($receiver, authWin$lambda$lambda$lambda$lambda$lambda);
  }
  function authWin$lambda$lambda$lambda_1($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, authWin$lambda$lambda$lambda$lambda_1);
  }
  function authWin$lambda$lambda($receiver) {
    $receiver.method = FormMethod.post;
    $receiver.action = '#main';
    div($receiver, void 0, authWin$lambda$lambda$lambda);
    div($receiver, void 0, authWin$lambda$lambda$lambda_0);
    div($receiver, void 0, authWin$lambda$lambda$lambda_1);
  }
  function authWin$lambda$lambda$lambda$lambda_2(f) {
    var tmp$, tmp$_0;
    var checkSql = (Kotlin.isType(tmp$ = document.getElementById('radioSql'), HTMLInputElement) ? tmp$ : Kotlin.throwCCE()).checked;
    var checkNoSql = (Kotlin.isType(tmp$_0 = document.getElementById('radioNoSql'), HTMLInputElement) ? tmp$_0 : Kotlin.throwCCE()).checked;
    if (checkSql === true) {
      sessionStorage.setItem('URL', 'http://picshare-sfedu.azurewebsites.net/sql/');
      var URL = sessionStorage.getItem('URL');
      viewReg();
    }
     else if (checkNoSql === true) {
      sessionStorage.setItem('URL', 'http://picshare-sfedu.azurewebsites.net/nosql/');
      var URL_0 = sessionStorage.getItem('URL');
      viewReg();
    }
     else {
      println('Choose DB');
    }
  }
  function authWin$lambda$lambda$lambda_2($receiver) {
    $receiver.type = InputType.button;
    $receiver.value = 'Registration';
    set_onClickFunction($receiver, authWin$lambda$lambda$lambda$lambda_2);
  }
  function authWin$lambda$lambda_0($receiver) {
    set_id($receiver, 'registration');
    input($receiver, void 0, void 0, void 0, void 0, void 0, authWin$lambda$lambda$lambda_2);
  }
  function authWin$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.type = InputType.radio;
    $receiver.name = 'radioSql';
    set_id($receiver, 'radioSql');
    $receiver.value = 'sql';
  }
  function authWin$lambda$lambda$lambda_3($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, authWin$lambda$lambda$lambda$lambda_3);
    $receiver.unaryPlus_pdl1vz$('sql');
    $receiver.for_ = 'radioSql';
  }
  function authWin$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.type = InputType.radio;
    $receiver.name = 'radioSql';
    set_id($receiver, 'radioNoSql');
    $receiver.value = 'nosql';
  }
  function authWin$lambda$lambda$lambda_4($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, authWin$lambda$lambda$lambda$lambda_4);
    $receiver.unaryPlus_pdl1vz$('nosql');
    $receiver.for_ = 'radioNoSql';
  }
  function authWin$lambda$lambda_1($receiver) {
    set_id($receiver, 'radioChangeDB');
    label($receiver, void 0, authWin$lambda$lambda$lambda_3);
    label($receiver, void 0, authWin$lambda$lambda$lambda_4);
  }
  function authWin$lambda($receiver) {
    set_id($receiver, 'form_container_auth');
    form($receiver, void 0, void 0, void 0, void 0, authWin$lambda$lambda);
    div($receiver, void 0, authWin$lambda$lambda_0);
    div($receiver, void 0, authWin$lambda$lambda_1);
  }
  function authWin() {
    var tmp$;
    var root = (tmp$ = document.getElementById('root')) != null ? tmp$ : Kotlin.throwNPE();
    root.innerHTML = '';
    var authWin = div_0(get_create(document), void 0, authWin$lambda);
    root.appendChild(authWin);
  }
  function viewCommentCont$lambda($receiver) {
    set_id($receiver, 'container');
  }
  function viewCommentCont() {
    var tmp$;
    var root = (tmp$ = document.getElementById('root')) != null ? tmp$ : Kotlin.throwNPE();
    var container = div_0(get_create(document), void 0, viewCommentCont$lambda);
    root.appendChild(container);
  }
  function addComment$lambda$lambda($receiver) {
    $receiver.type = InputType.text;
    set_id($receiver, 'commText');
  }
  function addComment$lambda$lambda$lambda(closure$vid) {
    return function (f) {
      var tmp$, tmp$_0;
      var link = Kotlin.isType(tmp$_0 = (tmp$ = document.getElementById('commText')) != null ? tmp$ : Kotlin.throwNPE(), HTMLInputElement) ? tmp$_0 : Kotlin.throwCCE();
      var body = JSON.stringify(json([to('text', link.value)]));
      fetchRequest(POST, body, 'posts/' + closure$vid + '/comments', void 0, sessionStorage.getItem('URL'));
      mainWin();
    };
  }
  function addComment$lambda$lambda_0(closure$vid) {
    return function ($receiver) {
      $receiver.type = InputType.button;
      $receiver.unaryPlus_pdl1vz$('post comment');
      $receiver.value = 'post comment';
      set_onClickFunction($receiver, addComment$lambda$lambda$lambda(closure$vid));
    };
  }
  function addComment$lambda(closure$vid) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, void 0, addComment$lambda$lambda);
      input($receiver, void 0, void 0, void 0, void 0, void 0, addComment$lambda$lambda_0(closure$vid));
    };
  }
  function addComment(vid) {
    var tmp$;
    var root = (tmp$ = document.getElementById('container')) != null ? tmp$ : Kotlin.throwNPE();
    root.innerHTML = '';
    var comm = div_0(get_create(document), void 0, addComment$lambda(vid));
    root.appendChild(comm);
  }
  function launch() {
    authWin();
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.type = InputType.text;
    set_id($receiver, 'idGetAcc');
    $receiver.placeholder = 'username or post id';
  }
  function mainWin$lambda$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, mainWin$lambda$lambda$lambda$lambda$lambda);
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda$lambda(f) {
    var tmp$;
    var id = Kotlin.isType(tmp$ = document.getElementById('idGetAcc'), HTMLInputElement) ? tmp$ : Kotlin.throwCCE();
    var valueOfId = id.value;
    var url = 'accounts/' + valueOfId;
    var body = json([to('username', id.value)]);
    println(JSON.stringify(body));
    fetchRequest(GET, null, url, 'getAcc', sessionStorage.getItem('URL'));
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Get Acc');
    set_onClickFunction($receiver, mainWin$lambda$lambda$lambda$lambda$lambda$lambda);
  }
  function mainWin$lambda$lambda$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    button($receiver, void 0, void 0, void 0, void 0, mainWin$lambda$lambda$lambda$lambda$lambda_0);
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda$lambda_0(f) {
    viewReg();
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Change Acc');
    set_onClickFunction($receiver, mainWin$lambda$lambda$lambda$lambda$lambda$lambda_0);
  }
  function mainWin$lambda$lambda$lambda$lambda_1($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    button($receiver, void 0, void 0, void 0, void 0, mainWin$lambda$lambda$lambda$lambda$lambda_1);
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda$lambda_1(f) {
    authWin();
    fetchRequest(DELETE, null, 'accounts', 'delAcc', sessionStorage.getItem('URL'));
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('Delete acc');
    set_onClickFunction($receiver, mainWin$lambda$lambda$lambda$lambda$lambda$lambda_1);
  }
  function mainWin$lambda$lambda$lambda$lambda_2($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    button($receiver, void 0, void 0, void 0, void 0, mainWin$lambda$lambda$lambda$lambda$lambda_2);
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda$lambda_2(f) {
    addPost();
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('Add Post');
    set_onClickFunction($receiver, mainWin$lambda$lambda$lambda$lambda$lambda$lambda_2);
  }
  function mainWin$lambda$lambda$lambda$lambda_3($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    button($receiver, void 0, void 0, void 0, void 0, mainWin$lambda$lambda$lambda$lambda$lambda_3);
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda$lambda_3(f) {
    var tmp$;
    var id = Kotlin.isType(tmp$ = document.getElementById('idGetAcc'), HTMLInputElement) ? tmp$ : Kotlin.throwCCE();
    var valueOfId = id.value;
    var url = 'accounts/' + valueOfId + '/posts';
    var body = json([to('username', valueOfId)]);
    println(JSON.stringify(body));
    fetchRequest(GET, null, url, 'getPosts', sessionStorage.getItem('URL'));
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.unaryPlus_pdl1vz$('Get all posts by acc');
    set_onClickFunction($receiver, mainWin$lambda$lambda$lambda$lambda$lambda$lambda_3);
  }
  function mainWin$lambda$lambda$lambda$lambda_4($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    button($receiver, void 0, void 0, void 0, void 0, mainWin$lambda$lambda$lambda$lambda$lambda_4);
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda$lambda_4(f) {
    var tmp$;
    var id = Kotlin.isType(tmp$ = document.getElementById('idGetAcc'), HTMLInputElement) ? tmp$ : Kotlin.throwCCE();
    var valueOfId = id.value;
    fetchRequest(DELETE, null, 'posts/' + valueOfId, 'delAcc', sessionStorage.getItem('URL'));
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.unaryPlus_pdl1vz$('Delete post');
    set_onClickFunction($receiver, mainWin$lambda$lambda$lambda$lambda$lambda$lambda_4);
  }
  function mainWin$lambda$lambda$lambda$lambda_5($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    button($receiver, void 0, void 0, void 0, void 0, mainWin$lambda$lambda$lambda$lambda$lambda_5);
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda$lambda_5(f) {
    fetchRequest(GET, null, 'feed', 'getPosts', sessionStorage.getItem('URL'));
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.unaryPlus_pdl1vz$('Feeds');
    set_onClickFunction($receiver, mainWin$lambda$lambda$lambda$lambda$lambda$lambda_5);
  }
  function mainWin$lambda$lambda$lambda$lambda_6($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    button($receiver, void 0, void 0, void 0, void 0, mainWin$lambda$lambda$lambda$lambda$lambda_6);
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda$lambda_6(f) {
    fetchRequest(GET, null, 'comments', 'getComments', sessionStorage.getItem('URL'));
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.unaryPlus_pdl1vz$('Comments');
    set_onClickFunction($receiver, mainWin$lambda$lambda$lambda$lambda$lambda$lambda_6);
  }
  function mainWin$lambda$lambda$lambda$lambda_7($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    button($receiver, void 0, void 0, void 0, void 0, mainWin$lambda$lambda$lambda$lambda$lambda_7);
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda$lambda_7(f) {
    fetchRequest(GET, null, 'likes', 'getLikes', sessionStorage.getItem('URL'));
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda_8($receiver) {
    $receiver.unaryPlus_pdl1vz$('Likes');
    set_onClickFunction($receiver, mainWin$lambda$lambda$lambda$lambda$lambda$lambda_7);
  }
  function mainWin$lambda$lambda$lambda$lambda_8($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    button($receiver, void 0, void 0, void 0, void 0, mainWin$lambda$lambda$lambda$lambda$lambda_8);
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda$lambda_8(f) {
    authWin();
    fetchRequest(GET, null, 'logout', 'logAcc', sessionStorage.getItem('URL'));
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda_9($receiver) {
    $receiver.unaryPlus_pdl1vz$('Logout');
    set_onClickFunction($receiver, mainWin$lambda$lambda$lambda$lambda$lambda$lambda_8);
  }
  function mainWin$lambda$lambda$lambda$lambda_9($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    button($receiver, void 0, void 0, void 0, void 0, mainWin$lambda$lambda$lambda$lambda$lambda_9);
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda$lambda_9(f) {
    fetchRequest(GET, null, 'accounts/' + username + '/followers', 'getSubs', sessionStorage.getItem('URL'));
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda_10($receiver) {
    $receiver.unaryPlus_pdl1vz$('Subscribers');
    set_onClickFunction($receiver, mainWin$lambda$lambda$lambda$lambda$lambda$lambda_9);
  }
  function mainWin$lambda$lambda$lambda$lambda_10($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    button($receiver, void 0, void 0, void 0, void 0, mainWin$lambda$lambda$lambda$lambda$lambda_10);
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda$lambda_10(f) {
    var username = sessionStorage.getItem('username');
    fetchRequest(GET, null, 'accounts/' + Kotlin.toString(username) + '/followings', 'getFollower', sessionStorage.getItem('URL'));
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda_11($receiver) {
    $receiver.unaryPlus_pdl1vz$('Subscriptions');
    set_onClickFunction($receiver, mainWin$lambda$lambda$lambda$lambda$lambda$lambda_10);
  }
  function mainWin$lambda$lambda$lambda$lambda_11($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    button($receiver, void 0, void 0, void 0, void 0, mainWin$lambda$lambda$lambda$lambda$lambda_11);
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda$lambda_11(f) {
    var tmp$;
    var id = Kotlin.isType(tmp$ = document.getElementById('idGetAcc'), HTMLInputElement) ? tmp$ : Kotlin.throwCCE();
    var valueOfId = id.value;
    fetchRequest(DELETE, null, 'followers/' + valueOfId, 'delAcc', sessionStorage.getItem('URL'));
  }
  function mainWin$lambda$lambda$lambda$lambda$lambda_12($receiver) {
    $receiver.unaryPlus_pdl1vz$('Delete follower');
    set_onClickFunction($receiver, mainWin$lambda$lambda$lambda$lambda$lambda$lambda_11);
  }
  function mainWin$lambda$lambda$lambda$lambda_12($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    button($receiver, void 0, void 0, void 0, void 0, mainWin$lambda$lambda$lambda$lambda$lambda_12);
  }
  function mainWin$lambda$lambda$lambda($receiver) {
    set_id($receiver, 'ulNavBar');
    li($receiver, void 0, mainWin$lambda$lambda$lambda$lambda);
    li($receiver, void 0, mainWin$lambda$lambda$lambda$lambda_0);
    li($receiver, void 0, mainWin$lambda$lambda$lambda$lambda_1);
    li($receiver, void 0, mainWin$lambda$lambda$lambda$lambda_2);
    li($receiver, void 0, mainWin$lambda$lambda$lambda$lambda_3);
    li($receiver, void 0, mainWin$lambda$lambda$lambda$lambda_4);
    li($receiver, void 0, mainWin$lambda$lambda$lambda$lambda_5);
    li($receiver, void 0, mainWin$lambda$lambda$lambda$lambda_6);
    li($receiver, void 0, mainWin$lambda$lambda$lambda$lambda_7);
    li($receiver, void 0, mainWin$lambda$lambda$lambda$lambda_8);
    li($receiver, void 0, mainWin$lambda$lambda$lambda$lambda_9);
    li($receiver, void 0, mainWin$lambda$lambda$lambda$lambda_10);
    li($receiver, void 0, mainWin$lambda$lambda$lambda$lambda_11);
    li($receiver, void 0, mainWin$lambda$lambda$lambda$lambda_12);
  }
  function mainWin$lambda$lambda($receiver) {
    set_id($receiver, 'navBar');
    ul($receiver, void 0, mainWin$lambda$lambda$lambda);
  }
  function mainWin$lambda($receiver) {
    div($receiver, void 0, mainWin$lambda$lambda);
  }
  function mainWin() {
    var tmp$;
    var root = (tmp$ = document.getElementById('root')) != null ? tmp$ : Kotlin.throwNPE();
    root.innerHTML = '';
    var main = div_0(get_create(document), void 0, mainWin$lambda);
    root.appendChild(main);
  }
  function viewReg$lambda$lambda$lambda$lambda($receiver) {
    set_id($receiver, 'LoginReg');
    $receiver.type = InputType.text;
    $receiver.placeholder = 'Username';
  }
  function viewReg$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, viewReg$lambda$lambda$lambda$lambda);
  }
  function viewReg$lambda$lambda$lambda$lambda_0($receiver) {
    set_id($receiver, 'EmailReg');
    $receiver.type = InputType.email;
    $receiver.placeholder = 'Email';
  }
  function viewReg$lambda$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, viewReg$lambda$lambda$lambda$lambda_0);
  }
  function viewReg$lambda$lambda$lambda$lambda_1($receiver) {
    set_id($receiver, 'genderReg');
    $receiver.type = InputType.text;
    $receiver.placeholder = 'true = male/ false = female';
  }
  function viewReg$lambda$lambda$lambda_1($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, viewReg$lambda$lambda$lambda$lambda_1);
  }
  function viewReg$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.type = InputType.text;
    set_id($receiver, 'privReg');
    $receiver.placeholder = 'true = priv/ false = not priv';
  }
  function viewReg$lambda$lambda$lambda_2($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, viewReg$lambda$lambda$lambda$lambda_2);
  }
  function viewReg$lambda$lambda$lambda$lambda_3($receiver) {
    set_id($receiver, 'PasswordReg');
    $receiver.type = InputType.password;
    $receiver.placeholder = 'Password if new acc';
  }
  function viewReg$lambda$lambda$lambda_3($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, viewReg$lambda$lambda$lambda$lambda_3);
  }
  function viewReg$lambda$lambda$lambda$lambda_4($receiver) {
    set_id($receiver, 'idForChange');
    $receiver.type = InputType.text;
    $receiver.placeholder = 'Id if change acc';
  }
  function viewReg$lambda$lambda$lambda_4($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, viewReg$lambda$lambda$lambda$lambda_4);
  }
  function viewReg$lambda$lambda$lambda$lambda$lambda$lambda(closure$reader, closure$preview) {
    return function (f) {
      closure$preview.src = closure$reader.v.result;
      println(closure$reader.v.result);
    };
  }
  function viewReg$lambda$lambda$lambda$lambda$lambda(e) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var file = Kotlin.isType(tmp$ = document.getElementById('PhotoReg'), HTMLInputElement) ? tmp$ : Kotlin.throwCCE();
    ((tmp$_0 = file.files) != null ? tmp$_0 : Kotlin.throwNPE())[0];
    var preview = Kotlin.isType(tmp$_1 = document.getElementById('previewReg'), HTMLInputElement) ? tmp$_1 : Kotlin.throwCCE();
    var reader = {v: new FileReader()};
    reader.v.onloadend = viewReg$lambda$lambda$lambda$lambda$lambda$lambda(reader, preview);
    if ((tmp$_3 = ((tmp$_2 = file.files) != null ? tmp$_2 : Kotlin.throwNPE())[0]) != null) {
      reader.v.readAsDataURL(tmp$_3);
    }
  }
  function viewReg$lambda$lambda$lambda$lambda_5($receiver) {
    set_id($receiver, 'PhotoReg');
    $receiver.name = 'photoReg';
    $receiver.type = InputType.file;
    set_onChangeFunction($receiver, viewReg$lambda$lambda$lambda$lambda$lambda);
  }
  function viewReg$lambda$lambda$lambda_5($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, viewReg$lambda$lambda$lambda$lambda_5);
  }
  function viewReg$lambda$lambda$lambda$lambda_6($receiver) {
    set_id($receiver, 'previewReg');
    $receiver.type = InputType.image;
    $receiver.height = '50';
  }
  function viewReg$lambda$lambda$lambda_6($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, viewReg$lambda$lambda$lambda$lambda_6);
  }
  function viewReg$lambda$lambda$lambda$lambda$lambda_0(f) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var username = Kotlin.isType(tmp$_0 = (tmp$ = document.getElementById('LoginReg')) != null ? tmp$ : Kotlin.throwNPE(), HTMLInputElement) ? tmp$_0 : Kotlin.throwCCE();
    var password = Kotlin.isType(tmp$_2 = (tmp$_1 = document.getElementById('PasswordReg')) != null ? tmp$_1 : Kotlin.throwNPE(), HTMLInputElement) ? tmp$_2 : Kotlin.throwCCE();
    var body = JSON.stringify(new AuthAcc((username != null ? username : Kotlin.throwNPE()).value, (password != null ? password : Kotlin.throwNPE()).value));
    println(body);
    fetchRequest(POST, body, 'login', 'login', sessionStorage.getItem('URL'));
  }
  function viewReg$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.type = InputType.button;
    $receiver.unaryPlus_pdl1vz$('In');
    $receiver.value = 'In';
    set_onClickFunction($receiver, viewReg$lambda$lambda$lambda$lambda$lambda_0);
  }
  function viewReg$lambda$lambda$lambda_7($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, viewReg$lambda$lambda$lambda$lambda_7);
  }
  function viewReg$lambda$lambda$lambda$lambda$lambda_1(f) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
    var username = Kotlin.isType(tmp$_0 = (tmp$ = document.getElementById('LoginReg')) != null ? tmp$ : Kotlin.throwNPE(), HTMLInputElement) ? tmp$_0 : Kotlin.throwCCE();
    var password = Kotlin.isType(tmp$_2 = (tmp$_1 = document.getElementById('PasswordReg')) != null ? tmp$_1 : Kotlin.throwNPE(), HTMLInputElement) ? tmp$_2 : Kotlin.throwCCE();
    var email = Kotlin.isType(tmp$_4 = (tmp$_3 = document.getElementById('EmailReg')) != null ? tmp$_3 : Kotlin.throwNPE(), HTMLInputElement) ? tmp$_4 : Kotlin.throwCCE();
    var gender = Kotlin.isType(tmp$_6 = (tmp$_5 = document.getElementById('genderReg')) != null ? tmp$_5 : Kotlin.throwNPE(), HTMLInputElement) ? tmp$_6 : Kotlin.throwCCE();
    var priv = Kotlin.isType(tmp$_8 = (tmp$_7 = document.getElementById('privReg')) != null ? tmp$_7 : Kotlin.throwNPE(), HTMLInputElement) ? tmp$_8 : Kotlin.throwCCE();
    var photoSrc = Kotlin.isType(tmp$_10 = (tmp$_9 = document.getElementById('previewReg')) != null ? tmp$_9 : Kotlin.throwNPE(), HTMLInputElement) ? tmp$_10 : Kotlin.throwCCE();
    var photo = split(photoSrc.src, [',']).get_za3lpa$(1);
    println(photo);
    var body = JSON.stringify(new Account((username != null ? username : Kotlin.throwNPE()).value, (password != null ? password : Kotlin.throwNPE()).value, (email != null ? email : Kotlin.throwNPE()).value, (gender != null ? gender : Kotlin.throwNPE()).value, (priv != null ? priv : Kotlin.throwNPE()).value, photo));
    fetchRequest(POST, body, 'accounts/', void 0, sessionStorage.getItem('URL'));
  }
  function viewReg$lambda$lambda$lambda$lambda_8($receiver) {
    set_id($receiver, 'registration');
    $receiver.type = InputType.button;
    $receiver.value = 'registration';
    set_onClickFunction($receiver, viewReg$lambda$lambda$lambda$lambda$lambda_1);
  }
  function viewReg$lambda$lambda$lambda_8($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, viewReg$lambda$lambda$lambda$lambda_8);
  }
  function viewReg$lambda$lambda$lambda$lambda$lambda_2(f) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
    var username = Kotlin.isType(tmp$_0 = (tmp$ = document.getElementById('LoginReg')) != null ? tmp$ : Kotlin.throwNPE(), HTMLInputElement) ? tmp$_0 : Kotlin.throwCCE();
    var id = Kotlin.isType(tmp$_2 = (tmp$_1 = document.getElementById('idForChange')) != null ? tmp$_1 : Kotlin.throwNPE(), HTMLInputElement) ? tmp$_2 : Kotlin.throwCCE();
    var email = Kotlin.isType(tmp$_4 = (tmp$_3 = document.getElementById('EmailReg')) != null ? tmp$_3 : Kotlin.throwNPE(), HTMLInputElement) ? tmp$_4 : Kotlin.throwCCE();
    var gender = Kotlin.isType(tmp$_6 = (tmp$_5 = document.getElementById('genderReg')) != null ? tmp$_5 : Kotlin.throwNPE(), HTMLInputElement) ? tmp$_6 : Kotlin.throwCCE();
    var priv = Kotlin.isType(tmp$_8 = (tmp$_7 = document.getElementById('privReg')) != null ? tmp$_7 : Kotlin.throwNPE(), HTMLInputElement) ? tmp$_8 : Kotlin.throwCCE();
    var photoSrc = Kotlin.isType(tmp$_10 = (tmp$_9 = document.getElementById('previewReg')) != null ? tmp$_9 : Kotlin.throwNPE(), HTMLInputElement) ? tmp$_10 : Kotlin.throwCCE();
    var photo = split(photoSrc.src, [',']).get_za3lpa$(1);
    var body = JSON.stringify(new PutAcc((username != null ? username : Kotlin.throwNPE()).value, (id != null ? id : Kotlin.throwNPE()).value, (email != null ? email : Kotlin.throwNPE()).value, (gender != null ? gender : Kotlin.throwNPE()).value, (priv != null ? priv : Kotlin.throwNPE()).value, photo));
    fetchRequest(PUT, body, 'accounts', void 0, sessionStorage.getItem('URL'));
  }
  function viewReg$lambda$lambda$lambda$lambda_9($receiver) {
    set_id($receiver, 'change');
    $receiver.type = InputType.button;
    $receiver.value = 'change acc';
    set_onClickFunction($receiver, viewReg$lambda$lambda$lambda$lambda$lambda_2);
  }
  function viewReg$lambda$lambda$lambda_9($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, viewReg$lambda$lambda$lambda$lambda_9);
  }
  function viewReg$lambda$lambda($receiver) {
    set_id($receiver, 'formTestReg');
    $receiver.name = 'formTestReg';
    div($receiver, void 0, viewReg$lambda$lambda$lambda);
    div($receiver, void 0, viewReg$lambda$lambda$lambda_0);
    div($receiver, void 0, viewReg$lambda$lambda$lambda_1);
    div($receiver, void 0, viewReg$lambda$lambda$lambda_2);
    div($receiver, void 0, viewReg$lambda$lambda$lambda_3);
    div($receiver, void 0, viewReg$lambda$lambda$lambda_4);
    div($receiver, void 0, viewReg$lambda$lambda$lambda_5);
    div($receiver, void 0, viewReg$lambda$lambda$lambda_6);
    div($receiver, void 0, viewReg$lambda$lambda$lambda_7);
    div($receiver, void 0, viewReg$lambda$lambda$lambda_8);
    div($receiver, void 0, viewReg$lambda$lambda$lambda_9);
  }
  function viewReg$lambda($receiver) {
    set_id($receiver, 'form_container_reg');
    form($receiver, void 0, void 0, void 0, void 0, viewReg$lambda$lambda);
  }
  function viewReg() {
    var root = document.getElementById('root');
    (root != null ? root : Kotlin.throwNPE()).innerHTML = '';
    var regWin = div_1(get_create(document), void 0, viewReg$lambda);
    root.appendChild(regWin);
  }
  function subs$lambda($receiver) {
    set_id($receiver, 'subs');
  }
  function subs() {
    var tmp$;
    var root = (tmp$ = document.getElementById('root')) != null ? tmp$ : Kotlin.throwNPE();
    var subs = div_0(get_create(document), void 0, subs$lambda);
    root.appendChild(subs);
  }
  function sub$lambda$lambda(closure$vid) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('id = ' + closure$vid);
    };
  }
  function sub$lambda$lambda_0(closure$datetime) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('datetime = ' + closure$datetime);
    };
  }
  function sub$lambda$lambda_1(closure$username) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('username = ' + closure$username);
    };
  }
  function sub$lambda(closure$vid, closure$datetime, closure$username) {
    return function ($receiver) {
      set_classes($receiver, setOf('sub'));
      div($receiver, void 0, sub$lambda$lambda(closure$vid));
      div($receiver, void 0, sub$lambda$lambda_0(closure$datetime));
      div($receiver, void 0, sub$lambda$lambda_1(closure$username));
    };
  }
  function sub(vid, datetime, username) {
    var tmp$;
    var subs = (tmp$ = document.getElementById('subs')) != null ? tmp$ : Kotlin.throwNPE();
    var sub = div_0(get_create(document), void 0, sub$lambda(vid, datetime, username));
    subs.appendChild(sub);
  }
  function addPost$lambda$lambda$lambda$lambda$lambda(closure$reader, closure$preview) {
    return function (f) {
      closure$preview.src = closure$reader.v.result;
    };
  }
  function addPost$lambda$lambda$lambda$lambda(e) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var file = Kotlin.isType(tmp$ = document.getElementById('photoPost'), HTMLInputElement) ? tmp$ : Kotlin.throwCCE();
    ((tmp$_0 = file.files) != null ? tmp$_0 : Kotlin.throwNPE())[0];
    println(file);
    var preview = Kotlin.isType(tmp$_1 = document.getElementById('photoImg'), HTMLInputElement) ? tmp$_1 : Kotlin.throwCCE();
    println(((tmp$_2 = file.files) != null ? tmp$_2 : Kotlin.throwNPE())[0]);
    println(JSON.stringify(((tmp$_3 = file.files) != null ? tmp$_3 : Kotlin.throwNPE())[0]));
    println(JSON.stringify(file));
    var reader = {v: new FileReader()};
    reader.v.onloadend = addPost$lambda$lambda$lambda$lambda$lambda(reader, preview);
    if ((tmp$_5 = ((tmp$_4 = file.files) != null ? tmp$_4 : Kotlin.throwNPE())[0]) != null) {
      reader.v.readAsDataURL(tmp$_5);
    }
  }
  function addPost$lambda$lambda$lambda($receiver) {
    set_id($receiver, 'photoPost');
    $receiver.type = InputType.file;
    set_onChangeFunction($receiver, addPost$lambda$lambda$lambda$lambda);
  }
  function addPost$lambda$lambda$lambda_0($receiver) {
    $receiver.type = InputType.image;
    set_id($receiver, 'photoImg');
    $receiver.height = '200';
  }
  function addPost$lambda$lambda$lambda$lambda_0(f) {
    var tmp$;
    var url = 'posts';
    var photoSrc = Kotlin.isType(tmp$ = document.getElementById('photoImg'), HTMLInputElement) ? tmp$ : Kotlin.throwCCE();
    var photo = split(photoSrc.src, [',']).get_za3lpa$(1);
    println(photo);
    var body = JSON.stringify(new Post(sessionStorage.getItem('id'), null, json([to('username', sessionStorage.getItem('username'))]), photo, null));
    println(body);
    println(JSON.stringify(body));
    var URL = sessionStorage.getItem('URL');
    fetchRequest(POST, body, url, '', URL);
  }
  function addPost$lambda$lambda$lambda_1($receiver) {
    set_id($receiver, 'sendFile');
    $receiver.type = InputType.button;
    $receiver.unaryPlus_pdl1vz$('send');
    $receiver.value = 'send';
    set_onClickFunction($receiver, addPost$lambda$lambda$lambda$lambda_0);
  }
  function addPost$lambda$lambda($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, addPost$lambda$lambda$lambda);
    input($receiver, void 0, void 0, void 0, void 0, void 0, addPost$lambda$lambda$lambda_0);
    input($receiver, void 0, void 0, void 0, void 0, void 0, addPost$lambda$lambda$lambda_1);
  }
  function addPost$lambda($receiver) {
    set_id($receiver, 'postAdd');
    form($receiver, void 0, void 0, void 0, void 0, addPost$lambda$lambda);
  }
  function addPost() {
    var tmp$;
    var root = (tmp$ = document.getElementById('root')) != null ? tmp$ : Kotlin.throwNPE();
    var postAdd = div_0(get_create(document), void 0, addPost$lambda);
    root.appendChild(postAdd);
  }
  function viewPosts$lambda($receiver) {
    set_id($receiver, 'allPosts');
  }
  function viewPosts() {
    var tmp$;
    var root = (tmp$ = document.getElementById('root')) != null ? tmp$ : Kotlin.throwNPE();
    var posts = div_0(get_create(document), void 0, viewPosts$lambda);
    root.appendChild(posts);
  }
  function viewSinglePost$lambda$lambda(closure$like) {
    return function ($receiver) {
      set_id($receiver, 'likes');
      $receiver.unaryPlus_pdl1vz$('Likes ' + closure$like);
    };
  }
  function viewSinglePost$lambda$lambda$lambda(closure$vid) {
    return function (f) {
      var url = 'posts/' + closure$vid + '/likes';
      fetchRequest(POST, null, url, '', sessionStorage.getItem('URL'));
    };
  }
  function viewSinglePost$lambda$lambda_0(closure$vid) {
    return function ($receiver) {
      set_id($receiver, 'presLike');
      $receiver.unaryPlus_pdl1vz$('like');
      set_onClickFunction($receiver, viewSinglePost$lambda$lambda$lambda(closure$vid));
    };
  }
  function viewSinglePost$lambda$lambda$lambda_0(closure$likes) {
    return function (f) {
      var tmp$;
      var likeId = '';
      tmp$ = iterator(closure$likes);
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        if (item.account.username == sessionStorage.getItem('username')) {
          likeId = item.id;
        }
      }
      var url = 'likes/' + likeId;
      fetchRequest(DELETE, null, url, 'delAcc', sessionStorage.getItem('URL'));
    };
  }
  function viewSinglePost$lambda$lambda_1(closure$likes) {
    return function ($receiver) {
      set_id($receiver, 'delLike');
      $receiver.unaryPlus_pdl1vz$('delete like');
      set_onClickFunction($receiver, viewSinglePost$lambda$lambda$lambda_0(closure$likes));
    };
  }
  function viewSinglePost$lambda$lambda_2(closure$photo) {
    return function ($receiver) {
      set_id($receiver, 'imgPost');
      $receiver.type = InputType.image;
      $receiver.src = 'data:image/jpeg;base64,' + closure$photo;
      $receiver.height = '200';
    };
  }
  function viewSinglePost$lambda$lambda$lambda_1(closure$vid) {
    return function (f) {
      viewCommentCont();
      fetchRequest(GET, null, 'posts/' + closure$vid + '/comments', 'showComments', sessionStorage.getItem('URL'));
    };
  }
  function viewSinglePost$lambda$lambda_3(closure$vid) {
    return function ($receiver) {
      set_id($receiver, 'commentsPostLook');
      $receiver.unaryPlus_pdl1vz$('look on comments');
      set_onClickFunction($receiver, viewSinglePost$lambda$lambda$lambda_1(closure$vid));
    };
  }
  function viewSinglePost$lambda$lambda$lambda_2(closure$vid) {
    return function (f) {
      viewCommentCont();
      addComment(closure$vid);
    };
  }
  function viewSinglePost$lambda$lambda_4(closure$vid) {
    return function ($receiver) {
      set_id($receiver, 'addComm');
      $receiver.unaryPlus_pdl1vz$('add comment');
      set_onClickFunction($receiver, viewSinglePost$lambda$lambda$lambda_2(closure$vid));
    };
  }
  function viewSinglePost$lambda(closure$vid, closure$datetime, closure$username, closure$like, closure$likes, closure$photo) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('id = ' + closure$vid + ', datetime = ' + closure$datetime + ', username = ' + closure$username);
      div($receiver, void 0, viewSinglePost$lambda$lambda(closure$like));
      button($receiver, void 0, void 0, void 0, void 0, viewSinglePost$lambda$lambda_0(closure$vid));
      button($receiver, void 0, void 0, void 0, void 0, viewSinglePost$lambda$lambda_1(closure$likes));
      input($receiver, void 0, void 0, void 0, void 0, void 0, viewSinglePost$lambda$lambda_2(closure$photo));
      button($receiver, void 0, void 0, void 0, void 0, viewSinglePost$lambda$lambda_3(closure$vid));
      button($receiver, void 0, void 0, void 0, void 0, viewSinglePost$lambda$lambda_4(closure$vid));
    };
  }
  function viewSinglePost(vid, username, datetime, likes, photo, like) {
    var tmp$;
    var posts = (tmp$ = document.getElementById('allPosts')) != null ? tmp$ : Kotlin.throwNPE();
    var post = div_0(get_create(document), void 0, viewSinglePost$lambda(vid, datetime, username, like, likes, photo));
    posts.appendChild(post);
  }
  function viewLike$lambda$lambda(closure$vid) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('id = ' + closure$vid);
    };
  }
  function viewLike$lambda$lambda_0(closure$datetime) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('datetime = ' + closure$datetime);
    };
  }
  function viewLike$lambda$lambda_1(closure$username) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('username = ' + closure$username);
    };
  }
  function viewLike$lambda(closure$vid, closure$datetime, closure$username) {
    return function ($receiver) {
      div($receiver, void 0, viewLike$lambda$lambda(closure$vid));
      div($receiver, void 0, viewLike$lambda$lambda_0(closure$datetime));
      div($receiver, void 0, viewLike$lambda$lambda_1(closure$username));
    };
  }
  function viewLike(vid, datetime, username) {
    var tmp$;
    var posts = (tmp$ = document.getElementById('allPosts')) != null ? tmp$ : Kotlin.throwNPE();
    var like = div_0(get_create(document), void 0, viewLike$lambda(vid, datetime, username));
    posts.appendChild(like);
  }
  function viewComments$lambda$lambda(closure$vid) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('id = ' + closure$vid);
    };
  }
  function viewComments$lambda$lambda_0(closure$datetime) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('datetime = ' + closure$datetime);
    };
  }
  function viewComments$lambda$lambda_1(closure$username) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('username = ' + closure$username);
    };
  }
  function viewComments$lambda$lambda_2(closure$text) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('text = ' + closure$text);
    };
  }
  function viewComments$lambda$lambda$lambda(closure$vid) {
    return function (f) {
      addComment(closure$vid);
    };
  }
  function viewComments$lambda$lambda_3(closure$vid) {
    return function ($receiver) {
      set_id($receiver, 'addComm');
      $receiver.value = 'add comment';
      $receiver.unaryPlus_pdl1vz$('add comment');
      set_onClickFunction($receiver, viewComments$lambda$lambda$lambda(closure$vid));
    };
  }
  function viewComments$lambda$lambda$lambda_0(f) {
  }
  function viewComments$lambda$lambda_4($receiver) {
    set_id($receiver, 'delComm');
    $receiver.value = 'delete comment';
    $receiver.unaryPlus_pdl1vz$('delete comment');
    set_onClickFunction($receiver, viewComments$lambda$lambda$lambda_0);
  }
  function viewComments$lambda(closure$vid, closure$datetime, closure$username, closure$text) {
    return function ($receiver) {
      set_style($receiver, 'border: solid 2px');
      div($receiver, void 0, viewComments$lambda$lambda(closure$vid));
      div($receiver, void 0, viewComments$lambda$lambda_0(closure$datetime));
      div($receiver, void 0, viewComments$lambda$lambda_1(closure$username));
      div($receiver, void 0, viewComments$lambda$lambda_2(closure$text));
      button($receiver, void 0, void 0, void 0, void 0, viewComments$lambda$lambda_3(closure$vid));
      button($receiver, void 0, void 0, void 0, void 0, viewComments$lambda$lambda_4);
    };
  }
  function viewComments(vid, datetime, username, text) {
    var tmp$;
    var posts = (tmp$ = document.getElementById('allPosts')) != null ? tmp$ : Kotlin.throwNPE();
    var comment = div_0(get_create(document), void 0, viewComments$lambda(vid, datetime, username, text));
    posts.appendChild(comment);
  }
  function getAccInfo$lambda$lambda(closure$vid) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('id = ' + closure$vid);
    };
  }
  function getAccInfo$lambda$lambda_0(closure$username) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('username = ' + closure$username);
    };
  }
  function getAccInfo$lambda$lambda_1(closure$email) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('email = ' + closure$email);
    };
  }
  function getAccInfo$lambda$lambda_2(closure$gender) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('gender = ' + closure$gender);
    };
  }
  function getAccInfo$lambda$lambda_3(closure$priv) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('priv = ' + closure$priv);
    };
  }
  function getAccInfo$lambda$lambda$lambda(closure$username) {
    return function (f) {
      var url = 'accounts/' + closure$username + '/followers';
      fetchRequest(POST, null, url, 'subscribe', sessionStorage.getItem('URL'));
    };
  }
  function getAccInfo$lambda$lambda_4(closure$username) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('subscribe');
      set_onClickFunction($receiver, getAccInfo$lambda$lambda$lambda(closure$username));
    };
  }
  function getAccInfo$lambda$lambda$lambda_0(closure$username) {
    return function (f) {
      var url = 'followings/' + closure$username;
      fetchRequest(DELETE, null, url, 'unSubscribe', sessionStorage.getItem('URL'));
    };
  }
  function getAccInfo$lambda$lambda_5(closure$username) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('unSubscribe');
      set_onClickFunction($receiver, getAccInfo$lambda$lambda$lambda_0(closure$username));
    };
  }
  function getAccInfo$lambda(closure$vid, closure$username, closure$email, closure$gender, closure$priv) {
    return function ($receiver) {
      set_id($receiver, 'getAccInfo');
      div($receiver, void 0, getAccInfo$lambda$lambda(closure$vid));
      div($receiver, void 0, getAccInfo$lambda$lambda_0(closure$username));
      div($receiver, void 0, getAccInfo$lambda$lambda_1(closure$email));
      div($receiver, void 0, getAccInfo$lambda$lambda_2(closure$gender));
      div($receiver, void 0, getAccInfo$lambda$lambda_3(closure$priv));
      button($receiver, void 0, void 0, void 0, void 0, getAccInfo$lambda$lambda_4(closure$username));
      button($receiver, void 0, void 0, void 0, void 0, getAccInfo$lambda$lambda_5(closure$username));
    };
  }
  function getAccInfo(vid, username, email, gender, priv, photo) {
    var tmp$;
    var root = (tmp$ = document.getElementById('root')) != null ? tmp$ : Kotlin.throwNPE();
    var viewAccInfo = div_0(get_create(document), void 0, getAccInfo$lambda(vid, username, email, gender, priv));
    root.appendChild(viewAccInfo);
  }
  function viewAcc$lambda$lambda(closure$vid) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('id = ' + closure$vid);
    };
  }
  function viewAcc$lambda$lambda_0(closure$username) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('username = ' + closure$username);
    };
  }
  function viewAcc$lambda$lambda_1(closure$email) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('email = ' + closure$email);
    };
  }
  function viewAcc$lambda$lambda_2(closure$gender) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('gender = ' + closure$gender);
    };
  }
  function viewAcc$lambda$lambda_3(closure$priv) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('priv = ' + closure$priv);
    };
  }
  function viewAcc$lambda$lambda$lambda(closure$photo) {
    return function ($receiver) {
      $receiver.type = InputType.image;
      $receiver.src = 'data:image/jpeg;base64,' + closure$photo;
      $receiver.height = '100';
    };
  }
  function viewAcc$lambda$lambda_4(closure$photo) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, void 0, viewAcc$lambda$lambda$lambda(closure$photo));
    };
  }
  function viewAcc$lambda(closure$vid, closure$username, closure$email, closure$gender, closure$priv, closure$photo) {
    return function ($receiver) {
      set_id($receiver, 'viewAcc');
      div($receiver, void 0, viewAcc$lambda$lambda(closure$vid));
      div($receiver, void 0, viewAcc$lambda$lambda_0(closure$username));
      div($receiver, void 0, viewAcc$lambda$lambda_1(closure$email));
      div($receiver, void 0, viewAcc$lambda$lambda_2(closure$gender));
      div($receiver, void 0, viewAcc$lambda$lambda_3(closure$priv));
      div($receiver, void 0, viewAcc$lambda$lambda_4(closure$photo));
    };
  }
  function viewAcc(vid, username, email, gender, priv, photo) {
    var tmp$;
    var root = (tmp$ = document.getElementById('root')) != null ? tmp$ : Kotlin.throwNPE();
    var viewAccInfo = div_0(get_create(document), void 0, viewAcc$lambda(vid, username, email, gender, priv, photo));
    root.appendChild(viewAccInfo);
  }
  var package$pirate = _.pirate || (_.pirate = {});
  var package$nojpg = package$pirate.nojpg || (package$pirate.nojpg = {});
  var package$pickshareak = package$nojpg.pickshareak || (package$nojpg.pickshareak = {});
  var package$Controller = package$pickshareak.Controller || (package$pickshareak.Controller = {});
  package$Controller.showComments_za3rmp$ = showComments;
  package$Controller.fetchRequest_za178f$ = fetchRequest;
  Object.defineProperty(package$Controller, 'id', {
    get: function () {
      return id;
    },
    set: function (value) {
      id = value;
    }
  });
  Object.defineProperty(package$Controller, 'email', {
    get: function () {
      return email;
    },
    set: function (value) {
      email = value;
    }
  });
  Object.defineProperty(package$Controller, 'priv', {
    get: function () {
      return priv;
    },
    set: function (value) {
      priv = value;
    }
  });
  Object.defineProperty(package$Controller, 'gender', {
    get: function () {
      return gender;
    },
    set: function (value) {
      gender = value;
    }
  });
  Object.defineProperty(package$Controller, 'photo', {
    get: function () {
      return photo;
    },
    set: function (value) {
      photo = value;
    }
  });
  Object.defineProperty(package$Controller, 'username', {
    get: function () {
      return username;
    },
    set: function (value) {
      username = value;
    }
  });
  package$Controller.getAcc_za3rmp$ = getAcc;
  package$Controller.login_za3rmp$ = login;
  package$Controller.getPosts_za3rmp$ = getPosts;
  package$Controller.getLikes_za3rmp$ = getLikes;
  package$Controller.getComments_za3rmp$ = getComments;
  package$Controller.getSubs_za3rmp$ = getSubs;
  package$Controller.getFollower_za3rmp$ = getFollower;
  Object.defineProperty(package$pickshareak, 'POST', {
    get: function () {
      return POST;
    }
  });
  Object.defineProperty(package$pickshareak, 'GET', {
    get: function () {
      return GET;
    }
  });
  Object.defineProperty(package$pickshareak, 'PUT', {
    get: function () {
      return PUT;
    }
  });
  Object.defineProperty(package$pickshareak, 'DELETE', {
    get: function () {
      return DELETE;
    }
  });
  Object.defineProperty(package$pickshareak, 'integrity', {
    get: function () {
      return integrity;
    }
  });
  Object.defineProperty(package$pickshareak, 'credentials', {
    get: function () {
      return credentials;
    }
  });
  Object.defineProperty(package$pickshareak, 'redirect', {
    get: function () {
      return redirect;
    }
  });
  Object.defineProperty(package$pickshareak, 'cache', {
    get: function () {
      return cache;
    }
  });
  Object.defineProperty(package$pickshareak, 'mode', {
    get: function () {
      return mode;
    }
  });
  Object.defineProperty(package$pickshareak, 'referrerPolicy', {
    get: function () {
      return referrerPolicy;
    }
  });
  Object.defineProperty(package$pickshareak, 'headers', {
    get: function () {
      return headers;
    }
  });
  package$pickshareak.main_kand9s$ = main;
  var package$Model = package$pickshareak.Model || (package$pickshareak.Model = {});
  package$Model.Account = Account;
  package$Model.AuthAcc = AuthAcc;
  package$Model.Like = Like;
  package$Model.Post = Post;
  package$Model.PutAcc = PutAcc;
  var package$View = package$pickshareak.View || (package$pickshareak.View = {});
  package$View.authWin = authWin;
  package$View.viewCommentCont = viewCommentCont;
  package$View.addComment_61zpoe$ = addComment;
  package$View.launch = launch;
  package$View.mainWin = mainWin;
  package$View.viewReg = viewReg;
  package$View.subs = subs;
  package$View.sub_6hosri$ = sub;
  package$View.addPost = addPost;
  package$View.viewPosts = viewPosts;
  package$View.viewSinglePost_d0v4br$ = viewSinglePost;
  package$View.viewLike_6hosri$ = viewLike;
  package$View.viewComments_w74nik$ = viewComments;
  package$View.getAccInfo_r2udw5$ = getAccInfo;
  package$View.viewAcc_r2udw5$ = viewAcc;
  id = '';
  email = '';
  priv = false;
  gender = false;
  photo = '';
  username = '';
  POST = 'POST';
  GET = 'GET';
  PUT = 'PUT';
  DELETE = 'DELETE';
  integrity = '';
  credentials = 'include';
  redirect = 'follow';
  cache = 'default';
  mode = 'cors';
  referrerPolicy = 'origin-when-cross-origin';
  headers = json([to('Content-Type', 'application/json')]);
  main([]);
  Kotlin.defineModule('PicShareAK', _);
  return _;
}(typeof PicShareAK === 'undefined' ? {} : PicShareAK, kotlin, this['kotlinx-html-js']);
