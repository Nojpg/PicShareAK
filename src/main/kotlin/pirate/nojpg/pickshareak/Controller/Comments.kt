package pirate.nojpg.pickshareak.Controller

import pirate.nojpg.pickshareak.View.viewComments
import pirate.nojpg.pickshareak.View.viewPosts

/**
 * Created by Nojpg on 28.06.17.
 */
fun showComments(res: dynamic){
    viewPosts()
    for (item in res){
        val id = item.id
        val datetime = item.datetime
        val username = item.account.username
        val text = item.text
        viewComments(id, datetime, username, text)
    }
}