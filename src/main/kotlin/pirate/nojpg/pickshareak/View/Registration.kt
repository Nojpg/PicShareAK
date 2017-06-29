package pirate.nojpg.pickshareak.View

import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.*
import org.w3c.dom.Element
import org.w3c.dom.HTMLFormElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import org.w3c.dom.get
import org.w3c.files.Blob
import org.w3c.files.FileReader
import org.w3c.files.get
import org.w3c.xhr.FormData
import pirate.nojpg.pickshareak.Controller.fetchRequest
import pirate.nojpg.pickshareak.Model.Account
import pirate.nojpg.pickshareak.Model.AuthAcc
import pirate.nojpg.pickshareak.Model.Post
import pirate.nojpg.pickshareak.Model.PutAcc
import pirate.nojpg.pickshareak.POST
import pirate.nojpg.pickshareak.PUT
import kotlin.browser.document
import kotlin.browser.sessionStorage
import kotlin.browser.window

/**
 * Created by Nojpg on 27.06.17.
 */
fun viewReg(){
    var root: Element? = document.getElementById("root")
    root!!.innerHTML = ""
    val regWin: Element = document.create.div {
        id = "form_container_reg"

        form{

            //            method = FormMethod.post
            id = "formTestReg"
            name = "formTestReg"

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
                    input {
                        id = "genderReg"
                        type = InputType.text
                        placeholder = "true = male/ false = female"
                    }
            }
            div {
                classes = setOf("singIn")

                    input {
                        type = InputType.text
                        id = "privReg"
                        placeholder = "true = priv/ false = not priv"
                    }
            }

            div {
                classes = setOf("singIn")

                input{
                    id = "PasswordReg"
                    type = InputType.password
                    placeholder = "Password if new acc"
                }
            }
            div {
                classes = setOf("singIn")
                input {
                    id = "idForChange"
                    type = InputType.text
                    placeholder = "Id if change acc"
                }
            }
            div{
                classes = setOf("singIn")

                input {
                    id = "PhotoReg"
                    name = "photoReg"
                    type = InputType.file
                    onChangeFunction = fun (e:Event){
                        var file = document.getElementById("PhotoReg") as HTMLInputElement
                        file.files!![0]
                        val preview = document.getElementById("previewReg") as HTMLInputElement
                        var reader = FileReader()
                        reader.onloadend = fun (_: Event){
                            preview.src = reader.result
                            println(reader.result)
                        }
                        file.files!![0]?.let { reader.readAsDataURL(it) }
                    }
                }
            }
            div {
                classes = setOf("singIn")
                input {
                    id = "previewReg"
                    type = InputType.image
                    height = "50"
                }
            }
            div {
                input {
                    type = InputType.button
                    + "In"
                    value = "In"
                    onClickFunction = fun (_: Event){
                        val username : HTMLInputElement?= document.getElementById("LoginReg")!! as HTMLInputElement
                        val password: HTMLInputElement? = document.getElementById("PasswordReg")!! as HTMLInputElement
                        val body = JSON.stringify(AuthAcc(username!!.value, password!!.value))
                        println(body)
                        fetchRequest(POST, body, url = "login", fn = "login", URL = sessionStorage.getItem("URL"))
                    }
                }
            }
            div {
                input {
                    id = "registration"
                    type = InputType.button
                    value = "registration"
                    onClickFunction = fun (_: Event) {
                        val username : HTMLInputElement?= document.getElementById("LoginReg")!! as HTMLInputElement
                        val password: HTMLInputElement? = document.getElementById("PasswordReg")!! as HTMLInputElement
                        val email: HTMLInputElement? = document.getElementById("EmailReg")!! as HTMLInputElement
                        val gender: HTMLInputElement? = document.getElementById("genderReg")!! as  HTMLInputElement
                        val priv: HTMLInputElement? = document.getElementById("privReg")!! as HTMLInputElement
                        val photoSrc = document.getElementById("previewReg")!! as HTMLInputElement
                        val photo = photoSrc.src.split(",")[1]
                        println(photo)
                        var body = JSON.stringify(Account(username!!.value, password!!.value, email!!.value, gender!!.value, priv!!.value, photo))
                        fetchRequest(POST, body, url = "accounts/", URL = sessionStorage.getItem("URL")) //, fn = "getAcc"
//                        body = JSON.stringify(AuthAcc(username!!.value, password!!.value))
//                        println(body)
//                        fetchRequest(POST, body, url = "login", fn = "login")
                    }
                }
            }

            div {
                input {
                    id = "change"
                    type = InputType.button
                    value = "change acc"
                    onClickFunction = fun (_: Event) {
                        val username : HTMLInputElement?= document.getElementById("LoginReg")!! as HTMLInputElement
                        val id: HTMLInputElement? = document.getElementById("idForChange")!! as HTMLInputElement
                        val email: HTMLInputElement? = document.getElementById("EmailReg")!! as HTMLInputElement
                        val gender: HTMLInputElement? = document.getElementById("genderReg")!! as  HTMLInputElement
                        val priv: HTMLInputElement? = document.getElementById("privReg")!! as HTMLInputElement
                        val photoSrc = document.getElementById("previewReg")!! as HTMLInputElement
                        val photo = photoSrc.src.split(",")[1]
                        var body = JSON.stringify(PutAcc(
                                username =  username!!.value,
                                id =  id!!.value,
                                email = email!!.value,
                                gender = gender!!.value,
                                priv = priv!!.value,
                                photo = photo))
                        fetchRequest(PUT, body, url = "accounts", fn = "getAcc", URL = sessionStorage.getItem("URL"))
//                        body = JSON.stringify(AuthAcc(username!!.value, password!!.value))
//                        fetchRequest(POST, body, url = "login", fn = "getAcc")
                    }
                }
            }
        }
    }
    root.appendChild(regWin)
}
