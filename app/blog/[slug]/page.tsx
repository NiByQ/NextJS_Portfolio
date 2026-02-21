type BlogDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};
export default async function BlogDetail({ params }: BlogDetailProps) {
  const { slug } = await params;
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Blog Detail Page for slug: {slug}
        </h1>
      </main>
    </div>
  );
}
