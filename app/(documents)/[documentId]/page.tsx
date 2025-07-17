export default async function Documents({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) {
  const { documentId } = await params;
  console.log(documentId);

  return <div>hello</div>;
}
