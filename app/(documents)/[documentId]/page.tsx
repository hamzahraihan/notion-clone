import { Editor } from "../_components/dynamic-editor";

export default async function Documents({
  params,
}: {
  params: Promise<{ documentId: string }>;
}) {
  const { documentId } = await params;
  console.log(documentId);

  return (
    <div className="max-w-full py-4 px-2 m-auto">
      <div className="w-full m-auto">
        <div className="text-white/70 pt-20">page control</div>
        <Editor />
      </div>
    </div>
  );
}
