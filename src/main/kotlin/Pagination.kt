/**
 * Created by Nojpg on 18.06.17.
 */
import kotlin.browser.window

fun useHistTest(){
    window.history.pushState(null, "reg", "#reg")
}