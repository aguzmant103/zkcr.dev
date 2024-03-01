import Footer from "@/components/footer";
import Nav from "@/components/nav";

export default function Learn() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="bg-white">
        <div className="grid grid-cols-2 gap-4 p-4">
          <img
            alt="Placeholder"
            className="col-span-1"
            height="150"
            src="/placeholder.svg"
            style={{
              aspectRatio: "150/150",
              objectFit: "cover",
            }}
            width="150"
          />
          <img
            alt="Placeholder"
            className="col-span-1"
            height="150"
            src="/placeholder.svg"
            style={{
              aspectRatio: "150/150",
              objectFit: "cover",
            }}
            width="150"
          />
        </div>
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold">Want to learn Zero Knowledge?</h1>
          <p className="text-xl mt-2">Look no further!</p>
        </div>
        <div className="border-t border-b py-8">
          <h2 className="text-3xl text-center font-bold mb-6">
            Choose your journey
          </h2>
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center hover:bg-gray-100 rounded-sm p-4">
              <div className="bg-[#F59E0B] rounded-full p-4">
                <LightbulbIcon className="text-white h-8 w-8" />
              </div>
              <p className="mt-2 font-semibold">General awareness</p>
            </div>
            <div className="flex flex-col items-center hover:bg-gray-100 rounded-sm p-4">
              <div className="bg-[#10B981] rounded-full p-4">
                <SettingsIcon className="text-white h-8 w-8" />
              </div>
              <p className="mt-2 font-semibold">Use ZK Tools</p>
            </div>
            <div className="flex flex-col items-center hover:bg-gray-100 rounded-sm p-4">
              <div className="bg-[#EF4444] rounded-full p-4">
                <CogIcon className="text-white h-8 w-8" />
              </div>
              <p className="mt-2 font-semibold">Build ZK Tools & Infra</p>
            </div>
            <div className="flex flex-col items-center hover:bg-gray-100 rounded-sm p-4">
              <div className="bg-[#8B5CF6] rounded-full p-4">
                <RocketIcon className="text-white h-8 w-8" />
              </div>
              <p className="mt-2 font-semibold">Research about ZK</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Recommended skillsets
            </h3>
            <div className="inline-grid grid-cols-2 gap-x-8 gap-y-4">
              <p className="font-semibold">math</p>
              <div className="flex space-x-1">
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
              </div>
              <p className="font-semibold">cryptography</p>
              <div className="flex space-x-1">
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
              </div>
              <p className="font-semibold">app ecosystem</p>
              <div className="flex space-x-1">
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
              </div>
              <p className="font-semibold">DSL programming</p>
              <div className="flex space-x-1">
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
              </div>
              <p className="font-semibold">general software engineering</p>
              <div className="flex space-x-1">
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
                <div className="w-4 h-4 bg-gray-300 rounded" />
              </div>
            </div>
            <p className="text-xs mt-2">
              *roadblocks, click each one to dive into details
            </p>
          </div>
        </div>
        <div className="py-8">
          <h2 className="text-3xl text-center font-bold mb-6">
            Recommended Roadmap
          </h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function CogIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  );
}

/* function GroupedbarChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", desktop: 111, mobile: 99 },
          { name: "Feb", desktop: 157, mobile: 87 },
          { name: "Mar", desktop: 129, mobile: 89 },
          { name: "Apr", desktop: 187, mobile: 151 },
          { name: "May", desktop: 119, mobile: 127 },
          { name: "Jun", desktop: 20, mobile: 121 },
        ]}
        keys={["desktop", "mobile"]}
        indexBy="name"
        groupMode="grouped"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb", "#e11d48"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A grouped bar chart"
      />
    </div>
  )
 }*/

function LightbulbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
