// Define the params type correctly
type Props = {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// Function to generate static params
export async function generateStaticParams() {
  const res = await fetch(`${process.env.WP_API_URL}/posts`);
  const data = await res.json();

  return data.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

// Main PostPage component
export default async function PostPage({ params }: Props) {
  if (!params?.slug) {
    throw new Error("Slug is required");
  }

  const res = await fetch(
    `${process.env.WP_API_URL}/posts?slug=${encodeURIComponent(params.slug)}`
  );
  const data = await res.json();

  if (!data || data.length === 0) {
    throw new Error("Post not found");
  }

  return (
    <main className="px-7 pt-24 text-center ">
      <h1 className="text-5xl font-semibold mb-7">{data[0].title.rendered}</h1>
      <div
        className="max-w-[700px] mx-auto"
        dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}
      />
    </main>
  );
}
