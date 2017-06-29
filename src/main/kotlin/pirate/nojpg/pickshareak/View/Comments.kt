package pirate.nojpg.pickshareak.View

/**
 * Created by Nojpg on 28.06.17.
 */
import kotlinx.html.*
import org.w3c.dom.Element
import kotlin.browser.document
import kotlinx.html.dom.create
import kotlinx.html.js.onClickFunction
import org.w3c.dom.EventInit
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import pirate.nojpg.pickshareak.Controller.fetchRequest
import pirate.nojpg.pickshareak.POST
import kotlin.browser.sessionStorage
import kotlin.js.json


fun addComment(vid: String){
    val root: Element = document.getElementById("root")!!
    root.innerHTML = ""

    val comm = document.create.div {
        input {
            type = InputType.text
            id = "commText"
        }
        input {
            type = InputType.button
            onClickFunction = fun(_: Event){
                val link = document.getElementById("commText")!! as HTMLInputElement
                val body = json("text" to link.value)
                fetchRequest(POST, body = body, url = "posts/$vid/comments", URL = sessionStorage.getItem("URL"))
                mainWin()
            }
        }
    }
    root.appendChild(comm)
}