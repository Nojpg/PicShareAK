import org.w3c.dom.HTMLFormElement
import kotlin.browser.document

/**
 * Created by Nojpg on 18.06.17.
 */
fun radioCheck(name: String): Boolean {
    val check: dynamic= document.getElementsByName(name)
    if (check[0].checked){
        return true
    } else {
        if (check[1].checked){
            return false
        }
    }
    return false
}

//fun subForm(name: String): HTMLFormElement{
//    val form: dynamic = document.getElementsByName(name)
//    if (form[0])
//}