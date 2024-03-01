import Footer from "@/components/footer";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="w-full py-6 md:py-12 lg:py-16">
        <div className="container grid gap-6 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                About Us
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We're on a mission to build the best learning community
                fostering a deep understanding of cutting-edge topics. Meet some
                of the founding team behind Zero Knowledge Costa Rica (ZKCR).
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl grid items-start gap-4 px-4 md:gap-8 md:px-6 lg:max-w-5xl">
            <div className="flex flex-col gap-2">
              <img
                alt="Founding member - Ranulfo"
                className="rounded-full"
                height="96"
                //src="../public/portraits/ranulfo.png"
                src="../public/portraits/image1.png"
                style={{
                  aspectRatio: "96/96",
                  objectFit: "cover",
                }}
                width="96"
              />
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Ranulfo Paiva</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  CEO & Founder
                </p>
              </div>
              <div className="prose max-w-none">
                <p>
                  John is passionate about creating tools that empower
                  developers. With over a decade of experience in the tech
                  industry, he leads the team with a vision of making the web
                  faster, more secure, and more accessible for everyone.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <img
                alt="Team member"
                className="rounded-full"
                height="96"
                src="/placeholder.svg"
                //src="/andy.svg"
                style={{
                  aspectRatio: "96/96",
                  objectFit: "cover",
                }}
                width="96"
              />
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Andy Guzman</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Head of Engineering
                </p>
              </div>
              <div className="prose max-w-none">
                <p>
                  Alice is a coding enthusiast who loves to build scalable and
                  efficient systems. She is dedicated to ensuring that the
                  platform's infrastructure is robust and reliable, allowing
                  users to deploy their projects with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
