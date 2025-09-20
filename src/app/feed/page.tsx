"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share } from "lucide-react"

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Create Post */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex space-x-4">
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea placeholder="What's on your mind?" rows={3} />
                <div className="flex justify-end mt-2">
                  <Button>Post</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Posts */}
        {[1, 2, 3].map((post) => (
          <Card key={post} className="mb-6">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">Alice Brown</h4>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Just landed my dream job as a Senior Developer! Thanks to everyone who supported me during my job search. The ABC Job Portal made it so easy to find the right opportunities.
              </p>
              <div className="flex items-center space-x-4 text-gray-600">
                <Button variant="ghost" size="sm">
                  <Heart className="w-4 h-4 mr-1" />
                  12
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  3
                </Button>
                <Button variant="ghost" size="sm">
                  <Share className="w-4 h-4 mr-1" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
