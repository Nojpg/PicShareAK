import org.w3c.dom.*
import org.w3c.fetch.CORS
import org.w3c.fetch.RequestInit
import org.w3c.fetch.RequestMode
import org.w3c.xhr.FormData
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Json
import kotlin.js.Promise
import kotlin.js.json

/**
 * Created by Nojpg on 17.06.17.
 */

//request for singUp
fun singUp(username: String, password: String, email: String, gender: Boolean, priv: Boolean, photo: Int?, URL: String, formtest: FormData){
//    var newAcc: Account = Account(username, password, email, gender, priv, photo)
    val url = URL + "accounts/"
//    println(JSON.stringify(newAcc))
    println(url)
    println(formtest)
    println(JSON.stringify(formtest))
//    val req = RequestInit(
//            method = "post",
//            body = JSON.stringify(newAcc),
//            headers = json("Content-Type" to "application/json"),
//            mode = RequestMode.CORS
//    )
//    println(JSON.stringify(req))
//    window.fetch(url, init = req)
//            .then(fun (res){
//                println(res.ok)
//                println(res.status)
//                println(res.url)
//                println(res)
//            })
//    var testForm: FormData = FormData(formtest)
    window.fetch(url, RequestInit(
            method = "post",
            body = formtest,
            headers = json("Content-Type" to "application/json")
    )).then(fun (res){
        println(res.ok)
                println(res.status)
                println(res.url)
                println(res)
    })
}

fun feedGet(URL: String){

    var url = URL + "feed"
    println(url)
    window.fetch(url).then(
            fun (res){
                println(res.ok)
                println(res.status)
                println(res.url)
                println(res.body)
                println(res.headers)
            }
    )
}

fun logOut(URL: String){
    val url: String = URL + "/logout"
    println(url)
    window.fetch(url).then(fun (res){
        println(res.ok)
        println(res.status)
        println(res.url)
        println(res.body)
        println(res.headers)
    })
}

fun singIn(username: String?, password: String?, URL: String): Boolean{
    val authAcc: AuthAcc = AuthAcc(username, password)

    val url = URL + "login"
    println(url)
    var status: Boolean = false

    val req = RequestInit(
            method = "post",
            body = JSON.stringify(authAcc),
            headers = json("Content-Type" to "application/json")
    )

    println(JSON.stringify(req))
    window.fetch(url, req).then(fun (res){
        println(res.ok)
        println(res.status)
        println(res.url)
        println(res)

//        if (res.status ){
//            status = true
//        } else{
//            status = false
//        }
    })
    return status
}