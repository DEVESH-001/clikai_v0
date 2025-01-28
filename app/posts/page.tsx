//1st version

// import Link from "next/link";

// interface Post {
//   id: number;
//   slug: string;
//   title: {
//     rendered: string;
//   };
// }

// // This function runs on the server since `app` uses Server Components by default
// export default async function PostsPage() {
//   const res = await fetch(`${process.env.WP_API_URL}/posts`, {
//     next: { revalidate: 10 }, // Optional: Revalidate every 10 seconds for ISR
//   });
//   const posts: Post[] = await res.json();

//   return (
//     <main className="text-center pt-16 px-5">
//       <h1 className="text-4xl md:text-5xl font-bold mb-7">All Posts</h1>
//       <ul className="space-y-2">
//         {posts.map((post: Post) => (
//           <li key={post.id}>
//             <Link href={`/posts/${post.slug}`}>{post.title?.rendered}</Link>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }


//2nd version

import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Post {
  id: number;
  slug: string;
  params: { slug: string };
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
}

export default async function PostsPage() {
  const res = await fetch(`${process.env.WP_API_URL}/posts`, {
    next: { revalidate: 10 },
  });
  const posts: Post[] = await res.json();

  return (
    <div className="min-h-screen from-gray-100 to-gray-200 bg-[url('/grid.svg')] mt-16">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-16 text-center text-gray-800 tracking-tight">
          Latest Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: Post) => (
            <Card
              key={post.id}
              className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden bg-white"
            >
              <CardHeader className="p-6">
                <CardTitle>
                  <Link
                    href={`/posts/${post.slug}`}
                    className="text-2xl font-bold text-gray-800 hover:text-primary transition-colors duration-200"
                  >
                    {post.title?.rendered}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-4">
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div
                  className="text-gray-700 leading-relaxed line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered }}
                />
              </CardContent>
              <CardFooter className="p-6 bg-gray-50 border-t border-gray-200">
                <Link
                  href={`/posts/${post.slug}`}
                  className="text-primary hover:text-primary-dark font-semibold transition-colors duration-200"
                >
                  Read more &rarr;
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}



//2nd version

// import Link from "next/link";

// interface Post {
//   id: number;
//   slug: string;
//   title?: {
//     rendered?: string;
//   };
// }

// export default async function PostsPage() {
//   const res = await fetch(`${process.env.WP_API_URL}/posts`, {
//     next: { revalidate: 10 }, // ISR with a 10-second interval
//   });
//   const posts: Post[] = await res.json();

//   const validPosts = posts.filter((post) => post.title && post.title.rendered);

//   return (
//     <main className="text-center pt-16 px-5">
//       <h1 className="text-4xl md:text-5xl font-bold mb-7">All posts</h1>
//       <ul className="space-y-2">
//         {validPosts.map((post: Post) => (
//           <li key={post.id}>
//             <Link href={`/posts/${post.slug}`}>{post.title?.rendered}</Link>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }
