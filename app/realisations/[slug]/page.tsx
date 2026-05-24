type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function RealisationDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  return (
    <main className="container mx-auto py-20">
      <h1 className="text-4xl font-bold">
        Réalisation : {slug}
      </h1>
    </main>
  );
}