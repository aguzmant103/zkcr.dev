import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">
        <section className="hero-section w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Zero Knowledge Costa Rica
                </h1>
                <h2 className="text-xl font-bold tracking-tighter sm:text-1xl md:text-2xl lg:text-3xl/none">
                  a Web3 Community
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  let’s unlock the future of privacy and security together.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="users-section w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Choose Your Journey
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 pt-4 pb-16">
              Whether you&apos;re a curious newcomer, a visionary entrepreneur,
              or an experienced developer, ZKCR has something for you.
            </p>
          </div>
          <div className="cards-container justify-center">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                <Card>
                  <CardContent className="flex flex-col items-center text-center p-4">
                    <h4 className="text-xl font-bold mb-2">
                      ZKP for Web3 normies
                    </h4>
                    <p className="mb-4">
                      ZKCR is your guide to understanding zero-knowledge proofs
                      (zkp) and how these protocols can help you to navigate in
                      Web3 with privacy and security. We provide
                      easy-to-understand explanations of complex concepts,
                      empowering you to take control of your data and privacy.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center text-center p-4">
                    <h4 className="text-xl font-bold mb-2">
                      ZKP for Web3 Entrepreneurs
                    </h4>
                    <p className="mb-4">
                      Spark innovation with zk-powered privacy: Master the
                      fundamentals of ZKP with us and unlock a world of
                      possibilities for building next-generation Web3 apps that
                      prioritize user privacy and security.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center text-center p-4">
                    <h4 className="text-xl font-bold mb-2">
                      ZKP for Researchers
                    </h4>
                    <p className="mb-4">
                      Dive deep into the world of zero-knowledge proofs and
                      privacy-preserving technologies. Our community is a
                      supportive environment for researchers to share knowledge,
                      collaborate, and push the boundaries of what&apos;s
                      possible with ZKP.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="features-section w-full py-12 md:py-24 lg:py-32 ">
          <Features />
        </section>
        <section className="testimonials-section w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Testimonials
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear from our satisfied community members.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 md:grid-cols-3 items-center justify-center gap-8 lg:gap-12 [&>img]:mx-auto">
                <div className="flex flex-col items-center">
                  <Avatar>
                    <AvatarImage
                      alt="Testimonial 1"
                      src="/placeholder-avatar.jpg"
                    />
                    <AvatarFallback>T1</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-2">John Doe</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    &quot;The community has been a great resource for my
                    learning journey.&quot;
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Avatar>
                    <AvatarImage
                      alt="Testimonial 2"
                      src="/placeholder-avatar.jpg"
                    />
                    <AvatarFallback>T2</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    &quot;I love the interactive lessons and expert-led
                    workshops.&quot;
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Avatar>
                    <AvatarImage
                      alt="Testimonial 3"
                      src="/placeholder-avatar.jpg"
                    />
                    <AvatarFallback>T3</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-2">Alex Johnson</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    &quot;The supportive community has been invaluable to my
                    learning.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="events-section w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-6">
            <h3 className="text-2xl font-bold text-center mb-8">
              Upcoming Events
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center text-center p-4">
                  <h4 className="text-xl font-bold mb-2">
                    Webinar: Introduction to Zero-Knowledge Proofs
                  </h4>
                  <p className="mb-4">
                    Join us for a webinar on the basics of zero-knowledge
                    proofs.
                  </p>
                  <Button>Register</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center text-center p-4">
                  <h4 className="text-xl font-bold mb-2">
                    Workshop: Building with Zero-Knowledge Cryptography
                  </h4>
                  <p className="mb-4">
                    A hands-on workshop on building applications using
                    zero-knowledge cryptography.
                  </p>
                  <Button>Register</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center text-center p-4">
                  <h4 className="text-xl font-bold mb-2">
                    Meetup: Zero-Knowledge Cryptography in Practice
                  </h4>
                  <p className="mb-4">
                    Meetup for community members to share their experiences and
                    learnings.
                  </p>
                  <Button>Register</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
