package pirate.nojpg.pickshareak.Model

import kotlin.js.Date
import kotlin.js.json

/**
 * Created by Nojpg on 15.06.17.
 */
data class Post (
        var id: String?,
        var datetime: kotlin.js.Date,
        var account: String,  //singUp.username
        var photo: String = "",
        var likes: Array<Like>
)
