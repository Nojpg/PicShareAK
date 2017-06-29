package pirate.nojpg.pickshareak.Controller

import org.w3c.fetch.Request
import org.w3c.fetch.RequestInit
import pirate.nojpg.pickshareak.*

import kotlin.browser.sessionStorage
import kotlin.browser.window
import kotlin.js.Promise

/**
 * Created by Nojpg on 26.06.17.
 */

fun fetchRequest(method: String, body: dynamic, url: String, fn: dynamic = "", URL: String?){
    println("$method $body $url")
    println(JSON.stringify(headers))
    val request: Request = Request(
            input = """$URL$url""",
            init = RequestInit(
                    redirect = redirect,
                    cache = cache,
                    mode = mode,
                    credentials = credentials,
                    headers = headers,
                    referrerPolicy = referrerPolicy,
                    method = method,
                    body = body,
                    integrity = integrity
            )
    )
    window.fetch(request).then(
            fun (response): Promise<Any?> {
                println(response.ok)
                println(response.url)
                println(response.status)
                when(fn) {
                    "delAcc" -> {
                        println("Deleted")
                    }
                    "logAcc" -> {
                        println("LogOut successful")
                    }
                    "subscribe" -> {
                        println("Now you are follower")
                    }
                    "unSubscribe" -> {
                        println("unsubscribed")
                    }
                }
                return response.json()
            }).then(
            fun (response){
                when (fn){
                    "getAcc" -> getAcc(response)
                    "login" -> login(response)
                    "getPosts" -> getPosts(response)
                    "getLikes" -> getLikes(response)
                    "getComments" -> getComments(response)
                    "getSubs" -> getSubs(response)
                    "getFollower" -> getFollower(response)
                    "showComments" -> showComments(response)
                }
            }
    )
}
