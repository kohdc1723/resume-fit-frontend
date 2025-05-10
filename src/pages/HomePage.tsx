import Contents from "@/components/home/Contents";
import Header from "@/components/home/Header";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Header />
      <Contents />
    </div>
  );
}
