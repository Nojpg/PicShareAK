if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'PicShareAK'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'PicShareAK'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'PicShareAK'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'PicShareAK'.");
}
var PicShareAK = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
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
  var a = $module$kotlinx_html_js.kotlinx.html.a_gu26kr$;
  var li = $module$kotlinx_html_js.kotlinx.html.li_yzv5uh$;
  var ul = $module$kotlinx_html_js.kotlinx.html.ul_pzlyaf$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  function useHistTest() {
    window.history.pushState(null, 'reg', '#reg');
  }
  function authGUI$lambda$lambda$lambda$lambda($receiver) {
    $receiver.name = 'Login';
    $receiver.type = InputType.text;
    $receiver.placeholder = 'Username';
  }
  function authGUI$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, authGUI$lambda$lambda$lambda$lambda);
  }
  function authGUI$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.name = 'Password';
    $receiver.type = InputType.password;
    $receiver.placeholder = 'Password';
  }
  function authGUI$lambda$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, authGUI$lambda$lambda$lambda$lambda_0);
  }
  function authGUI$lambda$lambda$lambda$lambda_1($receiver) {
    set_id($receiver, 'singInSub');
    $receiver.type = InputType.submit;
    $receiver.unaryPlus_pdl1vz$('Sign in');
  }
  function authGUI$lambda$lambda$lambda_1($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, authGUI$lambda$lambda$lambda$lambda_1);
  }
  function authGUI$lambda$lambda$lambda$lambda$lambda(f) {
    window.history.pushState(null, 'Registration', '/registration');
    regGui();
  }
  function authGUI$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.type = InputType.button;
    $receiver.value = 'Registration';
    set_onClickFunction($receiver, authGUI$lambda$lambda$lambda$lambda$lambda);
  }
  function authGUI$lambda$lambda$lambda_2($receiver) {
    set_id($receiver, 'registration');
    input($receiver, void 0, void 0, void 0, void 0, void 0, authGUI$lambda$lambda$lambda$lambda_2);
  }
  function authGUI$lambda$lambda$lambda$lambda$lambda$lambda(it) {
  }
  function authGUI$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.type = InputType.radio;
    $receiver.name = 'radioSql';
    $receiver.value = 'sql';
    set_onClickFunction($receiver, authGUI$lambda$lambda$lambda$lambda$lambda$lambda);
  }
  function authGUI$lambda$lambda$lambda$lambda_3($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, authGUI$lambda$lambda$lambda$lambda$lambda_0);
    $receiver.unaryPlus_pdl1vz$('sql');
    $receiver.for_ = 'radioSql';
  }
  function authGUI$lambda$lambda$lambda$lambda$lambda$lambda_0(it) {
  }
  function authGUI$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.type = InputType.radio;
    $receiver.name = 'radioNoSql';
    $receiver.value = 'nosql';
    set_onClickFunction($receiver, authGUI$lambda$lambda$lambda$lambda$lambda$lambda_0);
  }
  function authGUI$lambda$lambda$lambda$lambda_4($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, authGUI$lambda$lambda$lambda$lambda$lambda_1);
    $receiver.unaryPlus_pdl1vz$('nosql');
    $receiver.for_ = 'radioNoSql';
  }
  function authGUI$lambda$lambda$lambda_3($receiver) {
    set_id($receiver, 'radioChangeDB');
    label($receiver, void 0, authGUI$lambda$lambda$lambda$lambda_3);
    label($receiver, void 0, authGUI$lambda$lambda$lambda$lambda_4);
  }
  function authGUI$lambda$lambda($receiver) {
    $receiver.method = FormMethod.post;
    $receiver.action = '#main';
    div($receiver, void 0, authGUI$lambda$lambda$lambda);
    div($receiver, void 0, authGUI$lambda$lambda$lambda_0);
    div($receiver, void 0, authGUI$lambda$lambda$lambda_1);
    div($receiver, void 0, authGUI$lambda$lambda$lambda_2);
    div($receiver, void 0, authGUI$lambda$lambda$lambda_3);
  }
  function authGUI$lambda($receiver) {
    set_id($receiver, 'form_container_auth');
    form($receiver, void 0, void 0, void 0, void 0, authGUI$lambda$lambda);
  }
  function authGUI() {
    window.history.pushState(null, 'Authorization', '/auth');
    var root = document.getElementById('root');
    var authWin = div_0(get_create(document), void 0, authGUI$lambda);
    (root != null ? root : Kotlin.throwNPE()).appendChild(authWin);
  }
  function regGui$lambda$lambda$lambda$lambda($receiver) {
    $receiver.name = 'Login';
    $receiver.type = InputType.text;
    $receiver.placeholder = 'Username';
  }
  function regGui$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, regGui$lambda$lambda$lambda$lambda);
  }
  function regGui$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.name = 'Email';
    $receiver.type = InputType.email;
    $receiver.placeholder = 'Email';
  }
  function regGui$lambda$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, regGui$lambda$lambda$lambda$lambda_0);
  }
  function regGui$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.name = 'radioGender';
    $receiver.type = InputType.radio;
    $receiver.value = 'male';
  }
  function regGui$lambda$lambda$lambda$lambda_1($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, regGui$lambda$lambda$lambda$lambda$lambda);
    $receiver.unaryPlus_pdl1vz$('male');
    $receiver.for_ = 'radioGender';
  }
  function regGui$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.name = 'radioGender';
    $receiver.type = InputType.radio;
    $receiver.value = 'female';
  }
  function regGui$lambda$lambda$lambda$lambda_2($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, regGui$lambda$lambda$lambda$lambda$lambda_0);
    $receiver.unaryPlus_pdl1vz$('female');
    $receiver.for_ = 'radioGender';
  }
  function regGui$lambda$lambda$lambda_1($receiver) {
    set_classes($receiver, setOf('singIn'));
    label($receiver, void 0, regGui$lambda$lambda$lambda$lambda_1);
    label($receiver, void 0, regGui$lambda$lambda$lambda$lambda_2);
  }
  function regGui$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.name = 'radioPriv';
    $receiver.type = InputType.radio;
    $receiver.value = 'true';
  }
  function regGui$lambda$lambda$lambda$lambda_3($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, regGui$lambda$lambda$lambda$lambda$lambda_1);
    $receiver.unaryPlus_pdl1vz$('private');
    $receiver.for_ = 'radioPriv';
  }
  function regGui$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.name = 'radioPriv';
    $receiver.type = InputType.radio;
    $receiver.value = 'true';
  }
  function regGui$lambda$lambda$lambda$lambda_4($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, regGui$lambda$lambda$lambda$lambda$lambda_2);
    $receiver.unaryPlus_pdl1vz$('not private');
    $receiver.for_ = 'radioPriv';
  }
  function regGui$lambda$lambda$lambda_2($receiver) {
    set_classes($receiver, setOf('singIn'));
    label($receiver, void 0, regGui$lambda$lambda$lambda$lambda_3);
    label($receiver, void 0, regGui$lambda$lambda$lambda$lambda_4);
  }
  function regGui$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.name = 'Password';
    $receiver.type = InputType.password;
    $receiver.placeholder = 'Password';
  }
  function regGui$lambda$lambda$lambda_3($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, regGui$lambda$lambda$lambda$lambda_5);
  }
  function regGui$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.name = 'photoReg';
    $receiver.type = InputType.file;
    $receiver.value = 'photo';
  }
  function regGui$lambda$lambda$lambda_4($receiver) {
    set_classes($receiver, setOf('singIn'));
    input($receiver, void 0, void 0, void 0, void 0, void 0, regGui$lambda$lambda$lambda$lambda_6);
  }
  function regGui$lambda$lambda$lambda$lambda_7($receiver) {
    set_id($receiver, 'singInSub');
    $receiver.type = InputType.submit;
    $receiver.unaryPlus_pdl1vz$('Sign in');
  }
  function regGui$lambda$lambda$lambda_5($receiver) {
    input($receiver, void 0, void 0, void 0, void 0, void 0, regGui$lambda$lambda$lambda$lambda_7);
  }
  function regGui$lambda$lambda$lambda$lambda_8($receiver) {
    $receiver.href = '';
    $receiver.unaryPlus_pdl1vz$('Registration');
  }
  function regGui$lambda$lambda$lambda_6($receiver) {
    set_id($receiver, 'registration');
    a($receiver, void 0, void 0, void 0, regGui$lambda$lambda$lambda$lambda_8);
  }
  function regGui$lambda$lambda($receiver) {
    $receiver.method = FormMethod.post;
    $receiver.action = '#main';
    div($receiver, void 0, regGui$lambda$lambda$lambda);
    div($receiver, void 0, regGui$lambda$lambda$lambda_0);
    div($receiver, void 0, regGui$lambda$lambda$lambda_1);
    div($receiver, void 0, regGui$lambda$lambda$lambda_2);
    div($receiver, void 0, regGui$lambda$lambda$lambda_3);
    div($receiver, void 0, regGui$lambda$lambda$lambda_4);
    div($receiver, void 0, regGui$lambda$lambda$lambda_5);
    div($receiver, void 0, regGui$lambda$lambda$lambda_6);
  }
  function regGui$lambda($receiver) {
    set_id($receiver, 'form_container_reg');
    form($receiver, void 0, void 0, void 0, void 0, regGui$lambda$lambda);
  }
  function regGui() {
    var root = document.getElementById('root');
    (root != null ? root : Kotlin.throwNPE()).innerHTML = '';
    var regWin = div_0(get_create(document), void 0, regGui$lambda);
    root.appendChild(regWin);
  }
  function allPostsWithNav$lambda$lambda$lambda($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    $receiver.unaryPlus_pdl1vz$('Log Out');
  }
  function allPostsWithNav$lambda$lambda$lambda_0($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    $receiver.unaryPlus_pdl1vz$('Account Settings');
  }
  function allPostsWithNav$lambda$lambda$lambda_1($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    $receiver.unaryPlus_pdl1vz$('Subscribers');
  }
  function allPostsWithNav$lambda$lambda$lambda_2($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    $receiver.unaryPlus_pdl1vz$('Subscriptions');
  }
  function allPostsWithNav$lambda$lambda$lambda_3($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    $receiver.unaryPlus_pdl1vz$('Likes');
  }
  function allPostsWithNav$lambda$lambda$lambda_4($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    $receiver.unaryPlus_pdl1vz$('Comments');
  }
  function allPostsWithNav$lambda$lambda$lambda_5($receiver) {
    set_classes($receiver, setOf('listOfNav'));
    $receiver.unaryPlus_pdl1vz$('Feed');
  }
  function allPostsWithNav$lambda$lambda($receiver) {
    set_id($receiver, 'ulNavBar');
    li($receiver, void 0, allPostsWithNav$lambda$lambda$lambda);
    li($receiver, void 0, allPostsWithNav$lambda$lambda$lambda_0);
    li($receiver, void 0, allPostsWithNav$lambda$lambda$lambda_1);
    li($receiver, void 0, allPostsWithNav$lambda$lambda$lambda_2);
    li($receiver, void 0, allPostsWithNav$lambda$lambda$lambda_3);
    li($receiver, void 0, allPostsWithNav$lambda$lambda$lambda_4);
    li($receiver, void 0, allPostsWithNav$lambda$lambda$lambda_5);
  }
  function allPostsWithNav$lambda($receiver) {
    set_id($receiver, 'navBar');
    ul($receiver, void 0, allPostsWithNav$lambda$lambda);
  }
  function allPostsWithNav$lambda$lambda$lambda_6($receiver) {
    set_id($receiver, 'infoUserGetUsername');
  }
  function allPostsWithNav$lambda$lambda$lambda_7($receiver) {
    set_id($receiver, 'infoUserGetGender');
  }
  function allPostsWithNav$lambda$lambda$lambda_8($receiver) {
    set_id($receiver, 'infoUserGetPriv');
  }
  function allPostsWithNav$lambda$lambda$lambda_9($receiver) {
    set_id($receiver, 'infoUserGetPhoto');
  }
  function allPostsWithNav$lambda$lambda_0($receiver) {
    set_id($receiver, 'infoUserGet');
    div($receiver, void 0, allPostsWithNav$lambda$lambda$lambda_6);
    div($receiver, void 0, allPostsWithNav$lambda$lambda$lambda_7);
    div($receiver, void 0, allPostsWithNav$lambda$lambda$lambda_8);
    div($receiver, void 0, allPostsWithNav$lambda$lambda$lambda_9);
  }
  function allPostsWithNav$lambda$lambda$lambda_10($receiver) {
    set_id($receiver, 'postUserGetDate');
  }
  function allPostsWithNav$lambda$lambda$lambda_11($receiver) {
    set_id($receiver, 'postUserGetPhoto');
  }
  function allPostsWithNav$lambda$lambda$lambda_12($receiver) {
    set_id($receiver, 'postUserGetLikes');
  }
  function allPostsWithNav$lambda$lambda_1($receiver) {
    set_id($receiver, 'postsUserGet');
    div($receiver, void 0, allPostsWithNav$lambda$lambda$lambda_10);
    div($receiver, void 0, allPostsWithNav$lambda$lambda$lambda_11);
    div($receiver, void 0, allPostsWithNav$lambda$lambda$lambda_12);
  }
  function allPostsWithNav$lambda_0($receiver) {
    set_id($receiver, 'allPostFromAcc');
    div($receiver, void 0, allPostsWithNav$lambda$lambda_0);
    div($receiver, void 0, allPostsWithNav$lambda$lambda_1);
  }
  function allPostsWithNav() {
    window.history.pushState(null, 'Authorization', '/auth');
    var root = document.getElementById('root');
    (root != null ? root : Kotlin.throwNPE()).innerHTML = '';
    var navBar = div_0(get_create(document), void 0, allPostsWithNav$lambda);
    var allPostFromAcc = div_0(get_create(document), void 0, allPostsWithNav$lambda_0);
    root.appendChild(navBar);
    root.appendChild(allPostFromAcc);
  }
  function main$lambda(f) {
    authGUI();
  }
  function main(args) {
    var url = 'http://picshare-sfedu.azurewebsites.net/sql/';
    window.addEventListener('DOMContentLoaded', main$lambda);
    println('true');
    singUp('test', 'testpass', true, true, null, url);
  }
  function Account(username, password, gender, priv, photo) {
    if (username === void 0)
      username = '';
    if (password === void 0)
      password = '';
    if (gender === void 0)
      gender = true;
    if (priv === void 0)
      priv = false;
    if (photo === void 0)
      photo = null;
    this.username = username;
    this.password = password;
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
    return this.gender;
  };
  Account.prototype.component4 = function () {
    return this.priv;
  };
  Account.prototype.component5 = function () {
    return this.photo;
  };
  Account.prototype.copy_8yi8f3$ = function (username, password, gender, priv, photo) {
    return new Account(username === void 0 ? this.username : username, password === void 0 ? this.password : password, gender === void 0 ? this.gender : gender, priv === void 0 ? this.priv : priv, photo === void 0 ? this.photo : photo);
  };
  Account.prototype.toString = function () {
    return 'Account(username=' + Kotlin.toString(this.username) + (', password=' + Kotlin.toString(this.password)) + (', gender=' + Kotlin.toString(this.gender)) + (', priv=' + Kotlin.toString(this.priv)) + (', photo=' + Kotlin.toString(this.photo)) + ')';
  };
  Account.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    result = result * 31 + Kotlin.hashCode(this.password) | 0;
    result = result * 31 + Kotlin.hashCode(this.gender) | 0;
    result = result * 31 + Kotlin.hashCode(this.priv) | 0;
    result = result * 31 + Kotlin.hashCode(this.photo) | 0;
    return result;
  };
  Account.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.username, other.username) && Kotlin.equals(this.password, other.password) && Kotlin.equals(this.gender, other.gender) && Kotlin.equals(this.priv, other.priv) && Kotlin.equals(this.photo, other.photo)))));
  };
  function singUp$lambda(res) {
    println(res.ok);
    println(res.status);
    println(res.url);
    println(res.body);
    println(res.headers);
  }
  function singUp(username, password, gender, priv, photo, newUrl) {
    var newAcc = new Account(username, password, gender, priv, photo);
    var url = newUrl + 'accounts/';
    println(JSON.stringify(newAcc));
    println(url);
    var method = 'post';
    var headers = json([to('Content-Type', 'application/json')]);
    var body = void 0;
    var referrer = void 0;
    var referrerPolicy = void 0;
    var mode = 'cors';
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
    window.fetch('http://picshare-sfedu.azurewebsites.net/sql/accounts/cecil').then(singUp$lambda);
  }
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
  _.useHistTest = useHistTest;
  _.authGUI = authGUI;
  _.regGui = regGui;
  _.allPostsWithNav = allPostsWithNav;
  _.main_kand9s$ = main;
  _.Account = Account;
  _.singUp_x085kj$ = singUp;
  _.Post = Post;
  _.Like = Like;
  Kotlin.defineModule('PicShareAK', _);
  main([]);
  return _;
}(typeof PicShareAK === 'undefined' ? {} : PicShareAK, kotlin, this['kotlinx-html-js']);
