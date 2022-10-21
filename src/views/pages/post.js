import { PageEvents } from "./pageEvents"
import { PageGroup } from "./pageGroup"
import { PostsFeed } from "./postsfeed"



export const Post = () => {
    return (
        <>

            <section className="xl:flex gap-8 space-y-6 xl:space-y-0">

                <div className="xl:w-2/4">
                    <PostsFeed />
                </div>
                <div className="xl:w-1/4">
                    <PageEvents />
                </div>

                <div className="xl:w-1/4">
                    <PageGroup />
                </div>

            </section>

        </>
    )
}