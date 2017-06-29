package pirate.nojpg.pickshareak.View

import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.onClickFunction
import org.w3c.dom.Element
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import pirate.nojpg.pickshareak.Controller.fetchRequest
import pirate.nojpg.pickshareak.*
import pirate.nojpg.pickshareak.Controller.username
import kotlin.browser.document
import kotlin.browser.sessionStorage
import kotlin.js.json

/**
 * Created by Nojpg on 26.06.17.
 */
fun mainWin(){
    val root: Element = document.getElementById("root")!!
    root.innerHTML = ""
    val main: Element = document.create.div {

        div {
            id = "navBar"

            ul {
                id = "ulNavBar"
                li {
                    classes = setOf("listOfNav")
                    input {
                        type = InputType.text
                        id = "idGetAcc"
                        placeholder = "username or post id"
                    }
                }
                li {
                    classes = setOf("listOfNav")

                    button {
                        + "Get Acc"
                        onClickFunction = fun (_: Event){
                            val id = document.getElementById("idGetAcc") as HTMLInputElement
                            val valueOfId = id.value
                            val url = "accounts/$valueOfId"
                            val body = json("username" to id.value)
                            println(JSON.stringify(body))
                            fetchRequest(method = GET, body = null , url = url, fn = "getAcc", URL = sessionStorage.getItem("URL")) //GET
                        }
                    }
                }
                li {
                    classes = setOf("listOfNav")
                    button {
                        + "Change Acc"
                        onClickFunction = fun(_:Event){
                            viewReg()
                        }
                    }
                }
                li {
                    classes = setOf("listOfNav")
                    button {
                        + "Delete acc"
                        onClickFunction = fun(_: Event) {
                            authWin()
                            fetchRequest(DELETE, body = null, url = "accounts", fn = "delAcc", URL = sessionStorage.getItem("URL"))
                        }
                    }
                }
                li {
                    classes = setOf("listOfNav")
                    button {
                        + "Add Post"
                        onClickFunction = fun (_:dynamic){
                            addPost()
                        }
                    }
                }
                li {
                    classes = setOf("listOfNav")

                    button {
                        + "Get all posts by acc"
                        onClickFunction = fun (_: Event){
                            val id = document.getElementById("idGetAcc") as HTMLInputElement
                            val valueOfId = id.value
                            val url = "accounts/$valueOfId/posts"
                            val body = json("username" to valueOfId)
                            println(JSON.stringify(body))
                            fetchRequest(method = GET, body = null , url = url, fn = "getPosts", URL = sessionStorage.getItem("URL")) //GET
                        }
                    }
                }
                li {
                    classes = setOf("listOfNav")
                    button {
                        + "Delete post"
                        onClickFunction = fun(_:Event){
                            val id = document.getElementById("idGetAcc") as HTMLInputElement
                            val valueOfId = id.value
                            fetchRequest(DELETE, body = null, url = "posts/$valueOfId", fn = "delAcc", URL = sessionStorage.getItem("URL"))
                        }
                    }
                }
                li {
                    classes = setOf("listOfNav")
                    button {
                        + "Feeds"
                        onClickFunction = fun(_:Event){
                            fetchRequest(GET, null, url = "feed", fn = "getPosts", URL = sessionStorage.getItem("URL"))
                        }
                    }
                }
                li {
                    classes = setOf("listOfNav")
                    button {
                        + "Comments"
                        onClickFunction = fun(_:Event){
                            fetchRequest(GET, null, "comments", fn = "getComments", URL = sessionStorage.getItem("URL"))
                        }
                    }
                }
                li {
                    classes = setOf("listOfNav")
                    button {
                        + "Likes"
                        onClickFunction = fun(_:Event){
                            fetchRequest(GET, null, "likes", fn = "getLikes", URL = sessionStorage.getItem("URL"))
                        }
                    }
                }
                li {
                    classes = setOf("listOfNav")
                    button {
                        + "Logout"
                        onClickFunction = fun(_:Event){
                            authWin()
                            fetchRequest(GET, null, "logout", "logAcc", URL = sessionStorage.getItem("URL"))
                        }
                    }
                }
                li {
                    classes = setOf("listOfNav")
                    button {
                        + "Subscribers"
                        onClickFunction = fun(_:Event){
                            fetchRequest(GET, null, "accounts/$username/followers", "getSubs", URL = sessionStorage.getItem("URL"))
                        }
                    }
                }
                li {
                    classes = setOf("listOfNav")
                    button {
                        + "Subscriptions"
                        onClickFunction = fun(_:Event){
                            val username = sessionStorage.getItem("username")
                            fetchRequest(GET, null, "accounts/$username/followings", "getFollower", URL = sessionStorage.getItem("URL"))
                        }
                    }
                }
                li {
                    classes = setOf("listOfNav")
                    button {
                        + "Delete follower"
                        onClickFunction = fun(_:Event){
                            val id = document.getElementById("idGetAcc") as HTMLInputElement
                            val valueOfId = id.value
                            fetchRequest(DELETE, body = null, url = "followers/$valueOfId", fn = "delAcc", URL = sessionStorage.getItem("URL"))
                        }
                    }
                }
            }
        }
    }
    root.appendChild(main)
}
