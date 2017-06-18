import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.div
import kotlinx.html.js.onClickFunction
import org.w3c.dom.Element
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener
import kotlin.browser.document
import kotlin.browser.window

/**
 * Created by Nojpg on 17.06.17.
 */
//GUI for auth Form
fun authGUI() {
    window.history.pushState(null, "Authorization", "/auth")
    val root: Element? = document.getElementById("root")
    val authWin: Element = document.create.div {
        id = "form_container_auth"
        form{

            method = FormMethod.post
            action = "#main"
            //TODO fun POST
            div {
                classes = setOf("singIn")

                input {
                    name = "Login"
                    type= InputType.text
                    placeholder = "Username"
                }
            }

            div {
                classes = setOf("singIn")

                input{
                    name = "Password"
                    type = InputType.password
                    placeholder = "Password"
                }
            }
            div {

                input {
                    id = "singInSub"
                    type = InputType.submit
                    + "Sign in"
                }
            }
            div {
                id = "registration"
                input {
                    type = InputType.button
                    value = "Registration"
                    onClickFunction = fun (_: Event){
                        window.history.pushState(null, "Registration", "/registration")
                        regGui()
                    }
                }
            }
            div {
                id = "radioChangeDB"
                label {
                    input {
                        type = InputType.radio
                        name = "radioSql"
                        value = "sql"
                        onClickFunction = {} //TODO changeDb
                    }
                    + "sql"
                    for_ = "radioSql"
                }

                label {
                    input {
                        type = InputType.radio
                        name = "radioNoSql"
                        value = "nosql"
                        onClickFunction = {} //TODO changeDb
                    }
                    + "nosql"
                    for_ = "radioNoSql"
                }
            }

        }
    }
    root!!.appendChild(authWin)
}

//GUI for registration Form
fun regGui(){

    var root: Element? = document.getElementById("root")
    root!!.innerHTML = ""
    val regWin: Element = document.create.div {
        id = "form_container_reg"
        form{

            method = FormMethod.post
            action = "#main"
            //TODO fun POST
            div {
                classes = setOf("singIn")

                input {
                    name = "Login"
                    type = InputType.text
                    placeholder = "Username"
                }
            }
            div {
                classes = setOf("singIn")

                input {
                    name = "Email"
                    type = InputType.email
                    placeholder = "Email"
                }
            }
            div {
                classes = setOf("singIn")

                label {
                    input {
                        name = "radioGender"
                        type = InputType.radio
                        value = "male"
                    }
                    + "male"
                    for_ = "radioGender"
                }

                label {
                    input {
                        name = "radioGender"
                        type = InputType.radio
                        value = "female"
                    }
                    + "female"
                    for_ = "radioGender"
                }
            }
            div {
                classes = setOf("singIn")

                label {
                    input {
                        name = "radioPriv"
                        type = InputType.radio
                        value = "true"
                    }
                    + "private"
                    for_ = "radioPriv"
                }

                label {
                    input {
                        name = "radioPriv"
                        type = InputType.radio
                        value = "true"
                    }
                    + "not private"
                    for_ = "radioPriv"
                }
            }
            div {
                classes = setOf("singIn")

                input{
                    name = "Password"
                    type = InputType.password
                    placeholder = "Password"
                }
            }
            div{
                classes = setOf("singIn")

                input {
                    name = "photoReg"
                    type = InputType.file
                    value = "photo"
                }
            }
            div {
                input {
                    id = "singInSub"
                    type = InputType.submit
                    + "Sign in"
                }

            }
            div {
                id = "registration"
                a {  //TODO change to inputType.button
                    href=""
                    + "Registration"
                }
            }

        }
    }
    root.appendChild(regWin)
}

fun allPostsWithNav(){
    window.history.pushState(null, "Authorization", "/auth")

    var root: Element? = document.getElementById("root")
    root!!.innerHTML = ""
    val navBar: Element = document.create.div {
        id = "navBar"
        ul {
            id = "ulNavBar"
            li {
                classes = setOf("listOfNav")
                + "Log Out"
            }
            li {
                classes = setOf("listOfNav")
                + "Account Settings"
            }
            li {
                classes = setOf("listOfNav")
                + "Subscribers"
            }
            li {
                classes = setOf("listOfNav")
                + "Subscriptions"
            }
            li {
                classes = setOf("listOfNav")
                + "Likes"
            }
            li {
                classes = setOf("listOfNav")
                + "Comments"
            }
            li {
                classes = setOf("listOfNav")
                + "Feed"
            }
        }
    }

    val allPostFromAcc: Element = document.create.div {
        id = "allPostFromAcc"
        div {
            id = "infoUserGet"

            div {
                id = "infoUserGetUsername"
            }
            div {
                id = "infoUserGetGender"
            }
            div {
                id = "infoUserGetPriv"
            }
            div {
                id = "infoUserGetPhoto"
            }
        }
        div {
            id = "postsUserGet"

            div {
                id = "postUserGetDate"
            }
            div {
                id = "postUserGetPhoto"
            }
            div {
                id = "postUserGetLikes"
            }
        }
    }

    root.appendChild(navBar)
    root.appendChild(allPostFromAcc)
}

