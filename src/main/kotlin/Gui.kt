@file:Suppress("UnsafeCastFromDynamic")

import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.div
import kotlinx.html.js.onClickFunction
import kotlinx.html.js.onSubmitFunction
import org.w3c.dom.*
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener
import org.w3c.xhr.FormData
import kotlin.browser.document
import kotlin.browser.window

/**
* Created by Nojpg on 17.06.17.
*/
//GUI for auth Form
fun gAuthGUI() {
    window.history.pushState(null, "Authorization", "/auth")
    val root: Element? = document.getElementById("root")
    root!!.innerHTML = ""
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
                    type = InputType.submit
                    onClickFunction = fun (_: Event){
                        window.history.pushState(null, "Feed List", "/feed")
                        val username: String? = document.getElementById("LoginAuth")!!.nodeValue
                        val password: String? = document.getElementById("PasswordAuth")!!.nodeValue
                        if (singIn(username, password, URL)){
                            gFeedList()
                        }

                    }
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
                        gRegGui()
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
    root.appendChild(authWin)
}

//GUI for registration Form
fun gRegGui(){

    var root: Element? = document.getElementById("root")
    root!!.innerHTML = ""
    val regWin: Element = document.create.div {
        id = "form_container_reg"

        form{

//            method = FormMethod.post
            id = "formTestReg"
            name = "formTestReg"
//            action = singUp()
            onSubmitFunction = fun(_: Event){
                window.history.pushState(null, "Authorization", "/auth")
//                val username = document.getElementById("Login")!!.nodeValue
//                val password = document.getElementById("Password")!!.nodeValue
//                val email = document.getElementById("Email")!!.nodeValue
                val formTestReg: FormData = FormData(document.getElementById("formTestReg")!! as HTMLFormElement)
                println(formTestReg)
                println(JSON.stringify(formTestReg))
//                singUp(username = username!!, password = password!!, email = email!!, gender = radioCheck("radioGender"), priv = radioCheck("radioPriv"), photo = null, URL = URL, formtest = formTestReg)
                gAuthGUI()
            }
            //TODO fun POST
            div {
                classes = setOf("singIn")

                input {
                    id = "LoginReg"
                    type = InputType.text
                    placeholder = "Username"
                }
            }
            div {
                classes = setOf("singIn")

                input {
                    id = "EmailReg"
                    type = InputType.email
                    placeholder = "Email"
                }
            }
            div {
                classes = setOf("singIn")

                label {
                    input {
                        name = "radioGenderReg"
                        type = InputType.radio
                        value = "male"
                    }
                    + "male"
                    for_ = "radioGenderReg"
                }

                label {
                    input {
                        name = "radioGenderReg"
                        type = InputType.radio
                        value = "female"
                    }
                    + "female"
                    for_ = "radioGenderReg"
                }
            }
            div {
                classes = setOf("singIn")

                label {
                    input {
                        name = "radioPrivReg"
                        type = InputType.radio
                        value = "true"
                    }
                    + "private"
                    for_ = "radioPrivReg"
                }

                label {
                    input {
                        name = "radioPrivReg"
                        type = InputType.radio
                        value = "true"
                    }
                    + "not private"
                    for_ = "radioPrivReg"
                }
            }
            div {
                classes = setOf("singIn")

                input{
                    id = "PasswordReg"
                    type = InputType.password
                    placeholder = "Password"
                }
            }
            div{
                classes = setOf("singIn")

                input {
                    name = "photoReg"
                    type = InputType.file
                }
            }
            div {
                input {
                    id = "registration"
                    type = InputType.submit
                    value = "registration"

                }
            }
        }
    }
    root.appendChild(regWin)
}

fun gNavBar(): Element {
    val navBar: Element = document.create.div {
        id = "navBar"
        ul {
            id = "ulNavBar"
            li {
                classes = setOf("listOfNav")
                + "Log Out"
                onClickFunction = fun (_: Event){
                    logOut(URL = URL)
                }
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
    return navBar
}

fun gAllPostsFromAcc(){
    window.history.pushState(null, "Authorization", "/auth")

    var root: Element? = document.getElementById("root")
    root!!.innerHTML = ""


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

    root.appendChild(gNavBar())
    root.appendChild(allPostFromAcc)
}

fun gFeed(): Element{
    val feed: Element = document.create.div {
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
    return feed
}

fun gFeedList(){
    window.history.pushState(null, "Feed", "/feed")

    var root: Element? = document.getElementById("root")
    root!!.innerHTML = ""

    val feedList = document.create.div {
        id = "feedList"

        div {
            gFeed() //TODO FOR RESPONSE

        }
    }
    root.appendChild(gNavBar())
    root.appendChild(feedList)
}
