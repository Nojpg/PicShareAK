import kotlin.js.Date
import kotlin.js.json

/**
 * Created by Nojpg on 15.06.17.
 */
data class Post (
    var id: String?,
    var datetime: Date,
    var account: String,  //singUp.username
    var photo: String = "",
    var likes: Array<Like>
)
