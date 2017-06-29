package pirate.nojpg.pickshareak.View

import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.onClickFunction
import org.w3c.dom.Element
import org.w3c.dom.events.Event
import pirate.nojpg.pickshareak.Controller.fetchRequest
import pirate.nojpg.pickshareak.DELETE
import pirate.nojpg.pickshareak.POST
import kotlin.browser.document
import kotlin.browser.sessionStorage

/**
 * Created by Nojpg on 26.06.17.
 */

fun getAccInfo(vid: String, username: String, email: String, gender: Boolean, priv: Boolean, photo: String?){
    val root: Element = document.getElementById("root")!!

    val viewAccInfo = document.create.div{
        id = "getAccInfo"
        div {
            + "id = $vid"
        }
        div {
            + "username = $username"
        }
        div {
            + "email = $email"
        }
        div {
            + "gender = $gender"
        }
        div {
            + "priv = $priv"
        }
//        div {
//            + "photo = $photo"
//        }
        button {
            + "subscribe" //TODO подписаться
            onClickFunction = fun (_: Event){
                val url = "accounts/$username/followers"
                fetchRequest(POST, null, url, "subscribe", URL = sessionStorage.getItem("URL"))
            }
        }
        button {
            + "unSubscribe" //TODO подписаться
            onClickFunction = fun (_: Event){
                val url = "followings/$username"
                fetchRequest(DELETE, null, url, "unSubscribe", URL = sessionStorage.getItem("URL"))
            }
        }
    }
    root.appendChild(viewAccInfo)
}

fun viewAcc(vid: String, username: String, email: String, gender: Boolean, priv: Boolean, photo: String?){
    val root: Element = document.getElementById("root")!!

    val viewAccInfo = document.create.div{
        id = "viewAcc"
        div {
            + "id = $vid"
        }
        div {
            + "username = $username"
        }
        div {
            + "email = $email"
        }
        div {
            + "gender = $gender"
        }
        div {
            + "priv = $priv"
        }
        div {
            input {
                type = InputType.image
                src = "data:image/jpeg;base64," + photo
                height = "100"
            }
        }
    }
    root.appendChild(viewAccInfo)
}