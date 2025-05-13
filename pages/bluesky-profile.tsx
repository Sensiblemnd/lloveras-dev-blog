import { FeedViewPost } from "@atproto/api/dist/client/types/app/bsky/feed/defs"
import { Suspense, useEffect, useState } from "react"
import { PostThread } from "react-bluesky-embed"
import Layout from "../components/layout"
import { agent } from "../lib/bsky"

const BlueskyProfile = () => {
  const [feeds, setFeeds] = useState<FeedViewPost[] | null>(null)

  const getRkey = (uri: string) => {
    const parts = uri.split("/")
    const rkey = parts[parts.length - 1]
    return rkey
  }

  useEffect(() => {
    async function fetchFeeds() {
      try {
        const response = await agent.getAuthorFeed({
          actor: "lloveras.info",
          includePins: false,
          filter: "posts_and_author_threads",
          limit: 10,
        })

        if (!response) {
          console.error("No response from API")
          return
        }

        if (response?.data?.feed) {
          setFeeds(response.data.feed)
          //set cursor as the last record
        }
      } catch (error) {
        console.error("Error fetching feeds:", error)
      }
    }

    fetchFeeds()
  }, [])

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container mx-auto masonry-container">
          <h1 className="my-4 text-xl font-bold">Top Feeds</h1>
          {
            <div className="masonry">
              {feeds?.map((feed) => (
                <div className="masonry-item" key={feed.post.uri}>
                  <PostThread
                    params={{
                      did: feed.post.author.did,
                      rkey: getRkey(feed.post.uri),
                    }}
                    theme="dark"
                    // set the depth to 1+ to show replies
                    config={{
                      depth: 0,
                    }}
                    // only show the replies
                    hidePost={false}
                    fallback={<div>Loading...</div>}
                  />
                </div>
              ))}
            </div>
          }
        </div>
      </Suspense>
    </Layout>
  )
}

export default BlueskyProfile
