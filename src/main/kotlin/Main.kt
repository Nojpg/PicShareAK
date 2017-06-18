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

const val URL: String = "http://picshare-sfedu.azurewebsites.net/sql/"

//Main
fun main(args: Array<String>) {

    window.addEventListener("DOMContentLoaded", fun(_: Event) {
        gAuthGUI()

//        allPostsWithNav()
    })
    println("true")


}








