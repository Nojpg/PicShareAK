package pirate.nojpg.pickshareak.Controller

import pirate.nojpg.pickshareak.View.viewComments
import pirate.nojpg.pickshareak.View.viewLike
import pirate.nojpg.pickshareak.View.viewPosts
import pirate.nojpg.pickshareak.View.viewSinglePost

/**
 * Created by Nojpg on 28.06.17.
 */
fun getPosts(res: dynamic){
    viewPosts()
    for (item in res) {
        println(JSON.stringify(item))
        val id = item.id
        val datetime = item.datetime
        val likes = item.likes
        var like = 0
        for (item in likes){
            like ++
        }
        val username = item.account.username
        val photo = item.photo
        viewSinglePost(vid = id,datetime = datetime, likes = likes, like = like, username = username, photo = photo)
    }
}

fun getLikes(res: dynamic){
    println(JSON.stringify(res))
    viewPosts()
    for (item in res){
        val id = item.id
        val datetime = item.datetime
        val username = item.account.username
        viewLike(id, datetime, username)
    }
}

fun getComments(res: dynamic){
    viewPosts()
    for (item in res){
        val id = item.id
        val datetime = item.datetime
        val username = item.account.username
        val text = item.text
        viewComments(id, datetime, username, text)
    }
}
