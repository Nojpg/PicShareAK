package pirate.nojpg.pickshareak.Controller

import org.w3c.fetch.Response
import pirate.nojpg.pickshareak.View.getAccInfo
import pirate.nojpg.pickshareak.View.mainWin
import pirate.nojpg.pickshareak.View.viewAcc
import kotlin.browser.sessionStorage
import kotlin.js.Json
/**
 * Created by Nojpg on 26.06.17.
 */

var id: String = ""
var email: String = ""
var priv: Boolean = false
var gender: Boolean = false
var photo: String = ""
var username: String = ""

fun getAcc (res: dynamic){  //after post acc and get acc{username}
    println(JSON.stringify(res))
    println(res)
    println(res.id)
    id = res.id
    username = res.username
    email = res.email
    priv = res.priv
    gender = res.gender
    photo = res.photo
//    mainWin()
    getAccInfo(id, username, email, gender, priv, photo) //getAcc
}

fun login(res: dynamic){
    println(JSON.stringify(res))
    println(res)
    id = res.id
    username = res.username
    email = res.email
    priv = res.priv
    gender = res.gender
    photo = res.photo
    sessionStorage.setItem("id", "$id")
    sessionStorage.setItem("username", "$username")
    print(sessionStorage.getItem("id"))
    println(sessionStorage.getItem("username"))
    mainWin()
    viewAcc(id, username, email, gender, priv, photo)
}

