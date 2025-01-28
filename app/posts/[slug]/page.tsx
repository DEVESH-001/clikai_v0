// // Define the params type correctly
// type Props = {
//   params: {
//     slug: string;
//   };
//   searchParams?: { [key: string]: string | string[] | undefined };
// };

// // Function to generate static params
// export async function generateStaticParams() {
//   const res = await fetch(`${process.env.WP_API_URL}/posts`);
//   const data = await res.json();

//   return data.map((post: { slug: string }) => ({
//     slug: post.slug,
//   }));
// }

// // Main PostPage component
// export default async function PostPage({ params }: Props) {
//   if (!params?.slug) {
//     throw new Error("Slug is required");
//   }

//   const res = await fetch(
//     `${process.env.WP_API_URL}/posts?slug=${encodeURIComponent(params.slug)}`
//   );
//   const data = await res.json();

//   if (!data || data.length === 0) {
//     throw new Error("Post not found");
//   }

//   return (
//     <main className="px-7 pt-24 text-center ">
//       <h1 className="text-5xl font-semibold mb-7">{data[0].title.rendered}</h1>
//       <div
//         className="max-w-[700px] mx-auto"
//         dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}
//       />
//     </main>
//   );
// }


//new
//Currently Using


export async function generateStaticParams() {
  const res = await fetch(`${process.env.WP_API_URL}/posts`);
  const data = await res.json();

  const postSlugs = data.map((post: { slug: string }) => ({ slug: post.slug }));

  return postSlugs;
}

export default async function PostPage({
  params,
}: {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params: { slug: string }
}) {
  const res = await fetch(
    `${process.env.WP_API_URL}/posts?slug=${params.slug}`
  );
  const data = await res.json();

  return (
    <main className="px-6 pt-28 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-800 text-center tracking-tight">
          {data[0].title.rendered}
        </h1>
        <div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}
        />
      </div>
    </main>
  );
}

// Define the type of params explicitly 3rd version

// interface PostPageParams {
//   params: { slug: string };
// }

// export async function generateStaticParams() {
//   const res = await fetch(`${process.env.WP_API_URL}/posts`);
//   const data = await res.json();

//   const postSlugs = data.map((post: { slug: string }) => ({ slug: post.slug }));

//   // Ensure this function returns an array of params objects
//   return postSlugs;
// }

// export default async function PostPage({ params }: PostPageParams) {
//   const res = await fetch(
//     `${process.env.WP_API_URL}/posts?slug=${params.slug}`
//   );
//   const data = await res.json();

//   if (!data || data.length === 0) {
//     // Handle the case where the post is not found
//     return (
//       <main className="px-6 pt-28 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
//         <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-800 text-center tracking-tight">
//             Post Not Found
//           </h1>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="px-6 pt-28 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
//       <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-800 text-center tracking-tight">
//           {data[0].title.rendered}
//         </h1>
//         <div
//           className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
//           dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}
//         />
//       </div>
//     </main>
//   );
// }
