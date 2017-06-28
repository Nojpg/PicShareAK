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
import org.w3c.xhr.FormData
import pirate.nojpg.pickshareak.Controller.fetchRequest
import pirate.nojpg.pickshareak.Model.Account
import pirate.nojpg.pickshareak.Model.AuthAcc
import pirate.nojpg.pickshareak.Model.Post
import pirate.nojpg.pickshareak.POST
import pirate.nojpg.pickshareak.PUT
import kotlin.browser.document
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
                    placeholder = "Password"
                }
            }
            div{
                classes = setOf("singIn")

                input {
                    id = "PhotoReg"
                    name = "photoReg"
                    type = InputType.file
//                    onChangeFunction = encodeImg()
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
                        val photo = document.getElementById("PhotoReg")!! as HTMLInputElement
//                        val reader:FileReader = FileReader()




                        var body = JSON.stringify(Account(username!!.value, password!!.value, email!!.value, gender!!.value, priv!!.value, photo!!.value))
                        println(body)
                        fetchRequest(POST, body, url = "accounts/", fn = "getAcc")
                        body = JSON.stringify(AuthAcc(username!!.value, password!!.value))
                        println(body)
                        fetchRequest(POST, body, url = "login", fn = "getAcc")
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
                        val photo = document.getElementById("PhotoReg")!! as HTMLInputElement
//                        val reader:FileReader = FileReader()




                        var body = JSON.stringify(Account(username!!.value, password!!.value, email!!.value, gender!!.value, priv!!.value, photo!!.value))
                        println(body)
                        fetchRequest(PUT, body, url = "accounts", fn = "getAcc")
                        body = JSON.stringify(AuthAcc(username!!.value, password!!.value))
                        println(body)
                        fetchRequest(POST, body, url = "login", fn = "getAcc")
                    }
                }
            }
        }
    }
    root.appendChild(regWin)
}
fun encodeImg(el: dynamic){
    var file = el.files[0]
    var reader = FileReader()
    reader.onloadend = fun (_: Event){
        println("base64")
        println(reader.result)
    }
    reader.readAsDataURL(file)
}