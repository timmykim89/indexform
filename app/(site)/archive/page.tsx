import { getArchive } from "@/lib/data";
import ArchiveView from "./ArchiveView";

export const revalidate = 60;

export default async function ArchivePage() {
  const items = await getArchive();
  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "76px 32px 40px" }}>
      <ArchiveView items={items} />
    </section>
  );
}
