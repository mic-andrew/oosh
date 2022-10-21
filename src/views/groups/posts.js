import { Activity } from "../dashboard/activity"
import { Feeds } from "../dashboard/feed"
import { PostsActivity } from "./postsActivity"
import { PostsFeeds } from "./postsFeed"



export const Post = () => {
    return(
        <>

            <section className="xl:flex gap-8 space-y-6 xl:space-y-0">

                <div className="xl:w-3/4">
                    <PostsFeeds/>
                </div>
                <div className="xl:w-1/4"> 
                    <PostsActivity/>
                </div>

            </section>
        
        </>
    )
}