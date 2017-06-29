package pirate.nojpg.pickshareak.Model

import kotlin.js.Date
import kotlin.js.json

/**
 * Created by Nojpg on 15.06.17.
 */
data class Post (
        var id: String? = null,
        var datetime: dynamic = null,
        var account: dynamic,  //singUp.username
        var photo: String = "",
        var likes: dynamic = null
)
