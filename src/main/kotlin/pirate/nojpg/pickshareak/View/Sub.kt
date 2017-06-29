package pirate.nojpg.pickshareak.View

import kotlinx.html.classes
import kotlinx.html.div
import kotlinx.html.dom.create
import kotlinx.html.*
import org.w3c.dom.Element
import kotlin.browser.document

/**
 * Created by Nojpg on 28.06.17.
 */
fun subs(){
    val root: Element = document.getElementById("root")!!

    val subs = document.create.div{
        id = "subs"

    }

    root.appendChild(subs)
}

fun sub(vid: String, datetime: String, username: String){
    val subs: Element = document.getElementById("subs")!!

    val sub = document.create.div {
        classes = setOf("sub")
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
    subs.appendChild(sub)
}