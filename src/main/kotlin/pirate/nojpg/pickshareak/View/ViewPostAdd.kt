package pirate.nojpg.pickshareak.View

import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.onClickFunction
import org.khronos.webgl.TexImageSource
import org.w3c.dom.Element
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.ImageData
import org.w3c.dom.events.Event
import org.w3c.files.FileReader
import pirate.nojpg.pickshareak.Controller.fetchRequest
import pirate.nojpg.pickshareak.DELETE
import pirate.nojpg.pickshareak.GET
import pirate.nojpg.pickshareak.POST
import kotlin.browser.document
import kotlin.browser.sessionStorage
import kotlin.js.json

/**
 * Created by Nojpg on 27.06.17.
 */

fun addPost(){
    val root: Element = document.getElementById("root")!!

    val postAdd = document.create.div{
        id = "postAdd"
        form {
            input {
                id = "photoPost"
                type = InputType.file
            }
            input {
                id = "sendFile"
                type = InputType.button
                onClickFunction = fun (_: dynamic){
                    val url = "posts/"
                    val photo = document.getElementById("photoPost") as HTMLInputElement
                    val body = photo.value
                    println(body)
                    println(JSON.stringify(body))
//                    fetchRequest(POST, body, url, )
                }
            }
        }
    }
    root.appendChild(postAdd)
}

fun viewPosts(){
    val root: Element = document.getElementById("root")!!

    val posts = document.create.div {
        id = "allPosts"

    }
    root.appendChild(posts)
}

fun viewSinglePost(vid: String, username: String, datetime: String, likes: dynamic, photo: String?, like: dynamic){
    val posts: Element = document.getElementById("allPosts")!!

    val post = document.create.div{
        + "id = $vid, datetime = $datetime, username = $username"

        div {
            id = "likes"
            + "Likes $like"
        }
        button {
            id = "presLike"
            + "like"
            onClickFunction = fun (_:Event){
                val url = "posts/$vid/likes"
                fetchRequest(method = POST, body = null, url = url, fn = "")

            }
        }
        button {
            id = "delLike"
            + "delete like"
            onClickFunction = fun (_:Event){
                var likeId: dynamic = ""
                for (item in likes){
                    if (item.account.username == sessionStorage.getItem("username")){
                        likeId = item.id
                    }
                }
                val url = "likes/$likeId"
                fetchRequest(method = DELETE, body = null, url = url, fn = "delAcc")
            }
        }
        img {
            id = "imgPost"
            src = "data:image/jpeg;base64, $photo"
        }
        button {
            id = "commentsPostLook"
            onClickFunction = fun (_: Event){
                fetchRequest(GET, null, url = "posts/$vid/comments", fn = "showComm")
            }
        }
    }
    posts.appendChild(post)
}

fun viewLike(vid: String, datetime: String, username: String){
    val posts: Element = document.getElementById("allPosts")!!
        val like = document.create.div {
            div {
                + "id = $vid"
            }
            div {
                + "datetime = $datetime"
            }
            div {
                + "username = $username"
            }
        }
    posts.appendChild(like)
}

fun viewComments(vid: String, datetime: String, username: String, text: String){
    val posts: Element = document.getElementById("allPosts")!!
    val comment = document.create.div {
        style = "border: solid 2px"
        div {
            + "id = $vid"
        }
        div {
            + "datetime = $datetime"
        }
        div {
            + "username = $username"
        }
        div {
            + "text = $text"
        }
        button {
            id = "addComm"
            onClickFunction = fun (_: Event){
                addComment(vid)
//                fetchRequest(POST, body, url = "posts/$vid/comments", fn = showComments()) //TODO отдлельное окно под добалвение комментов
            }
        }
        button {
            id = "delComm"
            onClickFunction = fun (_: Event){

            }
        }
    }
    posts.appendChild(comment)
}
