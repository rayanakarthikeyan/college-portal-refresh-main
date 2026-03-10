import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Discussion() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Discussions", count: 24 },
    { id: "academics", label: "Academics", count: 12 },
    { id: "campus", label: "Campus Life", count: 8 },
    { id: "technical", label: "Technical Help", count: 4 },
  ];

  const discussions = [
    {
      id: 1,
      title: "Tips for Data Structures exam",
      category: "academics",
      author: "John Doe",
      replies: 5,
      likes: 12,
      active: true,
    },
    {
      id: 2,
      title: "Best places to study on campus",
      category: "campus",
      author: "Jane Smith",
      replies: 3,
      likes: 8,
      active: true,
    },
    {
      id: 3,
      title: "React hooks tutorial discussion",
      category: "technical",
      author: "Mike Johnson",
      replies: 7,
      likes: 15,
      active: false,
    },
    {
      id: 4,
      title: "Placements 2026 updates",
      category: "academics",
      author: "Sarah Lee",
      replies: 12,
      likes: 23,
      active: true,
    },
    {
      id: 5,
      title: "Lab equipment maintenance",
      category: "technical",
      author: "Alex Brown",
      replies: 2,
      likes: 4,
      active: false,
    },
  ];

  const filtered = selectedCategory === "all" 
    ? discussions 
    : discussions.filter(d => d.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Discussion Forum</h1>
        <p className="text-muted-foreground mt-2">Connect with peers and share knowledge</p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant={selectedCategory === cat.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.label}
            <Badge variant="secondary" className="ml-2">{cat.count}</Badge>
          </Button>
        ))}
      </div>

      <div className="flex gap-2 mb-4">
        <Input placeholder="Search discussions..." className="flex-1" />
        <Button>New Discussion</Button>
      </div>

      <div className="space-y-3">
        {filtered.map((discussion) => (
          <Card key={discussion.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-lg line-clamp-2">{discussion.title}</CardTitle>
                  <CardDescription className="mt-1">
                    by {discussion.author} • {new Date().toLocaleDateString()}
                  </CardDescription>
                </div>
                {discussion.active && (
                  <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{discussion.replies} replies</span>
                </div>
                <div className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{discussion.likes} likes</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
