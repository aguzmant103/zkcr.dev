/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WvBNxIdHF9K
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <LockIcon className="h-6 w-6" />
          <span className="sr-only">Zero Knowledge Community</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Zero Knowledge Costa Rica Community
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  A community dedicated to learning and sharing knowledge about zero-knowledge cryptography.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our community offers a variety of features to enhance your learning experience.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 md:grid-cols-3 items-center justify-center gap-8 lg:gap-12 [&>img]:mx-auto">
                <div className="flex flex-col items-center">
                  <BookOpenIcon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Interactive Lessons</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Learn at your own pace with our interactive lessons.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <UserIcon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Expert-led Workshops</h3>
                  <p className="text-gray-500 dark:text-gray-400">Join workshops led by experts in the field.</p>
                </div>
                <div className="flex flex-col items-center">
                  <TextIcon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Supportive Community</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Connect with other learners in our supportive online community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Testimonials</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear from our satisfied community members.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 md:grid-cols-3 items-center justify-center gap-8 lg:gap-12 [&>img]:mx-auto">
                <div className="flex flex-col items-center">
                  <Avatar>
                    <AvatarImage alt="Testimonial 1" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>T1</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-2">John Doe</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    "The community has been a great resource for my learning journey."
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Avatar>
                    <AvatarImage alt="Testimonial 2" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>T2</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    "I love the interactive lessons and expert-led workshops."
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Avatar>
                    <AvatarImage alt="Testimonial 3" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>T3</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-2">Alex Johnson</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    "The supportive community has been invaluable to my learning."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Zero Knowledge Community. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact Us
          </Link>
        </nav>
        <div className="flex gap-2 mt-2 sm:mt-0">
          <Link href="#">
            <TwitterIcon className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#">
            <FacebookIcon className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#">
            <InstagramIcon className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}

function BookOpenIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LockIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function TextIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  )
}


function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function UserIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
