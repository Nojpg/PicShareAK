/**
 * Created by Nojpg on 08.06.17.
 */

import kotlinx.html.FormMethod
import kotlinx.html.InputType
import kotlinx.html.dom.create
import kotlinx.html.form
import kotlinx.html.input
import kotlinx.html.js.div
import org.w3c.dom.events.Event
import org.w3c.fetch.RequestInit
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.json

//Main
fun main(args: Array<String>) {
    var url: String = "http://picshare-sfedu.azurewebsites.net/sql/"

    window.addEventListener("DOMContentLoaded", fun(_: Event) {
        authGUI()
//        allPostsWithNav()
    })
    println("true")
    singUp(username = "test", password = "testpass", gender = true, priv = true, photo = null, newUrl = url)

}








