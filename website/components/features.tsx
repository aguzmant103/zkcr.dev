export default function Features() {
  return (
    <div className="container px-4 md:px-6">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Key Features
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our community offers a variety of features to enhance your learning
            experience.
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
            <p className="text-gray-500 dark:text-gray-400">
              Join workshops led by experts in the field.
            </p>
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
  );
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
  );
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
  );
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
  );
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
  );
}
