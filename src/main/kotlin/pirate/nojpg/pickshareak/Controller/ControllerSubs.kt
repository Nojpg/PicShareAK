package pirate.nojpg.pickshareak.Controller

import pirate.nojpg.pickshareak.View.sub
import pirate.nojpg.pickshareak.View.subs

/**
 * Created by Nojpg on 28.06.17.
 */
fun getSubs(res: dynamic){
    subs()
    for (item in res) {
        val id = item.id
        val datetime = item.datetime
        val username = item.account.username
        sub(id, datetime, username)
    }
}

fun getFollower(res: dynamic){
    subs()
    for (item in res){
        val id = item.id
        val datetime = item.datetime
        val username = item.follower.username
        sub(id, datetime, username)
    }
}