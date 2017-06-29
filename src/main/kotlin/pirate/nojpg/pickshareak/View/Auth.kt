package pirate.nojpg.pickshareak.View

import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.onClickFunction
import org.w3c.dom.Element
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import org.w3c.dom.set
import pirate.nojpg.pickshareak.Controller.fetchRequest
import pirate.nojpg.pickshareak.POST
import kotlin.browser.document
import kotlin.browser.sessionStorage
import kotlin.js.json

/**
 * Created by Nojpg on 26.06.17.
 */
fun authWin(){
val root: Element = document.getElementById("root")!!
root.innerHTML = ""

//TODO
    val authWin: Element = document.create.div {
        id = "form_container_auth"
        form{

            method = FormMethod.post
            action = "#main"
            //TODO fun POST
            div {
                classes = setOf("singIn")

                input {
                    id = "LoginAuth"
                    type= InputType.text
                    placeholder = "Username"
                }
            }

            div {
                classes = setOf("singIn")

                input{
                    id = "PasswordAuth"
                    type = InputType.password
                    placeholder = "Password"
                }
            }
            div {
                input {
                    id = "singInSub"
                    type = InputType.button
                    value = "Submit"
                    onClickFunction = fun (_: Event){
                        val url = "login"
                        val username = document.getElementById("LoginAuth") as HTMLInputElement
                        val password = document.getElementById("PasswordAuth") as HTMLInputElement
                        val body = JSON.stringify(json("username" to username.value, "password" to password.value))
                        println(body)
                        val checkSql = (document.getElementById("radioSql") as HTMLInputElement).checked
                        val checkNoSql = (document.getElementById("radioNoSql") as HTMLInputElement).checked
                        if (checkSql == true){
                            sessionStorage.setItem("URL", "http://picshare-sfedu.azurewebsites.net/sql/")
                            val URL = sessionStorage.getItem("URL")
                            fetchRequest(method = POST, body = body, url = url, fn = "login", URL = URL)
                        } else if (checkNoSql == true){
                            sessionStorage.setItem("URL", "http://picshare-sfedu.azurewebsites.net/nosql/")
                            val URL = sessionStorage.getItem("URL")
                            fetchRequest(method = POST, body = body, url = url, fn = "login", URL = URL)
                        } else {
                            println("Choose DB")
                        }
                    }

                }
            }
        }
        div {
            id = "registration"
            input {
                type = InputType.button
                value = "Registration"
                onClickFunction = fun (_: Event){
                    val checkSql = (document.getElementById("radioSql") as HTMLInputElement).checked
                    val checkNoSql = (document.getElementById("radioNoSql") as HTMLInputElement).checked
                    if (checkSql == true){
                        sessionStorage.setItem("URL", "http://picshare-sfedu.azurewebsites.net/sql/")
                        val URL = sessionStorage.getItem("URL")
                        viewReg()
                    } else if (checkNoSql == true){
                        sessionStorage.setItem("URL", "http://picshare-sfedu.azurewebsites.net/nosql/")
                        val URL = sessionStorage.getItem("URL")
                        viewReg()
                    } else {
                        println("Choose DB")
                    }
                }
            }
        }
        div {
            id = "radioChangeDB"
            label {
                input {
                    type = InputType.radio
                    name = "radioSql"
                    id = "radioSql"
                    value = "sql"
                }
                + "sql"
                for_ = "radioSql"
            }

            label {
                input {
                    type = InputType.radio
                    name = "radioSql"
                    id = "radioNoSql"
                    value = "nosql"
                }
                + "nosql"
                for_ = "radioNoSql"
            }
        }
    }
    root.appendChild(authWin)
}
