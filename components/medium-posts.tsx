"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface MediumPost {
  title: string
  subtitle: string
  link: string
}

export default function MediumPosts() {
  const [posts, setPosts] = useState<MediumPost[]>([])

  useEffect(() => {
    async function fetchMediumPosts() {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yourusername",
        )
        const data = await response.json()
        setPosts(data.items.slice(0, 5)) // Get the 5 most recent posts
      } catch (error) {
        console.error("Error fetching Medium posts:", error)
      }
    }

    fetchMediumPosts()
  }, [])

  return (
    <div className="flex overflow-x-auto space-x-4 pb-4">
      {posts.map((post, index) => (
        <Card key={index} className="flex-shrink-0 w-64 transition-all duration-300 hover:scale-105">
          <CardHeader>
            <CardTitle className="text-lg">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{post.subtitle}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline mt-2 inline-block"
            >
              Read more
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

