export default async function Documents({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) {
  const { documentId } = await params;
  console.log(documentId);

  return (
    <div className="py-4 px-2 max-w-ful h-full m-auto ">
      <div className="w-full max-w-96 m-auto">
        <h1>hello</h1>
        <div className="font-bold">IBM Fullstack</div>
      </div>
    </div>
  );
}
