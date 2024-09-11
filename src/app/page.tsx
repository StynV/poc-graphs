import BarChart from "@/components/BarChart/BarChart";
import LineChart from "@/components/LineChart/LineChart";

export default function Home() {
  return (
    <div className="p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="min-h-screen gap-8 sm:items-start">
        <h1 className="text-4xl mb-4">Charts POC</h1>
        
        <div className="w-[400px] h-[400px]">
          <LineChart />
        </div>

        <div className="w-[400px] h-[400px]">
          <BarChart />
        </div>
      </main> 
    </div>
  );
}
