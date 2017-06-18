import org.w3c.fetch.CORS
import org.w3c.fetch.RequestInit
import org.w3c.fetch.RequestMode
import kotlin.browser.window
import kotlin.js.Json
import kotlin.js.Promise
import kotlin.js.json

/**
 * Created by Nojpg on 17.06.17.
 */

//request for singUp
fun singUp(username: String, password: String, gender: Boolean, priv: Boolean, photo: Int?, newUrl: String){
    var newAcc: Account = Account(username, password, gender, priv, photo)
    var url = newUrl + "accounts/"
    println(JSON.stringify(newAcc))
    println(url)
    val req = RequestInit(
            method = "post",
//            body = JSON.stringify(newAcc),
            headers = json("Content-Type" to "application/json"),
            mode = RequestMode.CORS
    )
    println(JSON.stringify(req))
//    window.fetch(url, init = req)
//            .then(fun (res){
//                println(res.ok)
//                println(res.status)
//                println(res.url)
//                println(res)
//            })

    window.fetch("http://picshare-sfedu.azurewebsites.net/sql/accounts/cecil").then(fun(res){
        println(res.ok)
        println(res.status)
        println(res.url)
        println(res.body)
        println(res.headers)
    })
}

