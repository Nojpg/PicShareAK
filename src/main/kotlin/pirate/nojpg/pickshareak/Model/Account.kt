package pirate.nojpg.pickshareak.Model

/**
 * Created by Nojpg on 15.06.17.
 */
data class Account (
        var username: String? = "",
        var password: String? = "",
        var email: String? = "",
        var gender: String? = "",
        var priv: String? = "",
        var photo: String? = null
)