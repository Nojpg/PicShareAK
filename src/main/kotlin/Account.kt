/**
 * Created by Nojpg on 15.06.17.
 */
data class Account (
        var username: String = "",
        var password: String = "",
        var email: String = "",
        var gender: Boolean = true,
        var priv: Boolean = false,
        var photo: Int? = null
)