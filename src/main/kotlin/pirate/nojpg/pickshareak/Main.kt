package pirate.nojpg.pickshareak

/**
 * Created by Nojpg on 08.06.17.
 */

import jquery.jq
import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.div
import kotlinx.html.js.onChangeFunction
import org.w3c.dom.Element
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import org.w3c.dom.events.InputEvent
import org.w3c.fetch.*
import org.w3c.files.Blob
import org.w3c.files.FileReader
import org.w3c.files.get
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Json
import kotlin.js.Promise
import kotlin.js.json
import pirate.nojpg.pickshareak.Controller.fetchRequest
import pirate.nojpg.pickshareak.Model.Account
import pirate.nojpg.pickshareak.View.launch
import kotlin.browser.sessionStorage
import kotlin.js.Date

//import pirate.nojpg.pickshareak.View.launch

//const val URL: String = "http://picshare-sfedu.azurewebsites.net/sql/"

const val POST: String = "POST"
const val GET: String = "GET"
const val PUT: String = "PUT"
const val DELETE: String = "DELETE"
const val integrity: String = ""

val credentials: RequestCredentials = RequestCredentials.INCLUDE
val redirect: RequestRedirect = RequestRedirect.FOLLOW
val cache: RequestCache = RequestCache.DEFAULT
val mode: RequestMode = RequestMode.CORS
val referrerPolicy: dynamic = "origin-when-cross-origin"
val headers: Json = json("Content-Type" to "application/json")

fun main(args: Array<String>) {

    launch()
//    function encodeImageFileAsURL(element) {
//        var file = element.files[0];
//        console.log(file)
//        var reader = new FileReader();
//        reader.onloadend = function() {
//            console.log('RESULT', reader.result)
//        }
//        reader.readAsDataURL(file);
//    }
//    fun encodeImageFileAsURL(e: dynamic): ((Event) -> dynamic)? {
//        var file = e.files[0]
//        println(file)
//        var reader = FileReader()
//        reader.onloadend = fun (_: Event){
//            print("RESULT {$reader.result}")
//        }
//        reader.readAsDataURL(blob = file)
//    }
//    val root = document.getElementById("root")!!
//    val img = document.create.div {
//        input {
//            type = InputType.file
//            id = "hello"
//
//            onChangeFunction = fun (e:Event){
//                var file = document.getElementById("hello") as HTMLInputElement
//                file.files!![0]
//                println(file)
//                val preview = document.getElementById("photoImg") as HTMLInputElement
//                println(file.files!![0])
//                println(JSON.stringify(file.files!![0]))
//                println(JSON.stringify(file))
//                var reader = FileReader()
//                reader.onloadend = fun (_: Event){
//                    println(reader.result)
//                    preview.src = reader.result
//
//                }
//                file.files!![0]?.let { reader.readAsDataURL(it) }
//            }
//
//        }
//        input {
//            type = InputType.image
//            id = "photoImg"
//            height = "200"
//        }
//    }
//    root.appendChild(img)

//    var image = document.querySelector("input[type=file]")!! as HTMLInputElement
//    image.onchange = encodeImageFileAsURL(image)
//    image.files!![0]
//    println(image.files)
//    println(image.files!![0])

    //TODO доработать гуй добавления постов, просмотр постов, удалить пост, добавить кнопку подписаться, подписчики+подписки, лента, комменты, лайки,

//    var pairs0 = json(
//            "Accept" to "*/*",
//            "Content-Type" to "application/json")
////    var pairs1: Pair<String, String> = ("Content-Type" to "application/json")
//    println(JSON.stringify(pairs0))
//var body = JSON.stringify(Account(username = "test2", password = "test", email = "test2@test.test", gender = true, priv = false, photo = null))
//var body = json("username" to "test123", "password" to "test123")
////    println(JSON.stringify(body))
//    var tryBody = JSON.stringify(body)
//    var tryHead = JSON.stringify(json("Content-Type" to "application/json"))
//
//    window.fetch(input = "http://picshare-sfedu.azurewebsites.net/sql/login", init = RequestInit(
//            method = POST,
//            mode = mode,
//            integrity = integrity,
//            credentials = credentials,
//            referrerPolicy = referrerPolicy,
//            cache = cache,
//            body = tryBody,
//            redirect = redirect,
//            headers = headers
//    )).then(fun (rs): Promise<Any?> {
//                println(rs.ok)
//                println(rs.url)
//                println(rs.status)
//                println(rs)
//                return rs.json()
//            }).then(fun (rs){
//        println(rs)
//        println(JSON.stringify(rs))
//    })

//println(JSON.stringify(Account(username = "test", password = "test", email = "test@test.test", gender = true, priv = false, photo = null)))
//
//    println("asdsad")
//    window.fetch(input = "http://picshare-sfedu.azurewebsites.net/sql/accounts/test2", init = RequestInit(
//            method = "GET",
//            mode = RequestMode.CORS,
//            integrity = "",
//            credentials = RequestCredentials.SAME_ORIGIN,
//            referrerPolicy = "origin",
//            headers = ("Content-Type" to "application/json")
//    ))
//            .then(fun (rs): Promise<Any?> {
//        println(rs)
//        return rs.json()
//    }).then(fun (rs){
//        println(rs)
//        println(JSON.stringify(rs))
//    })

}








