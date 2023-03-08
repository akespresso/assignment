import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen mx-auto">
      <nav className="relative z-20 py-5 border-b border-gray-200 shadow-sm bg-background">
        <div className="flex items-center mx-auto lg:px-6 max-w-7xl px-14">
          <div className="flex flex-row items-center">
            <Link
              className="text-link hover:text-link-light transition-colors no-underline [&_code]:text-link [&_code]:hover:text-link-light [&_code]:transition-colors"
              href="/"
            >
              <Image
                src="https://res.cloudinary.com/drhrbob2m/image/upload/v1675303246/favicons/apple-120x120-touch-icon_a8pjpk.png"
                width={32}
                height={32}
                alt="Quantum"
              />
            </Link>
            <ul className="flex items-center content-center">
              <li className="ml-2 text-gray-200">
                <svg
                  viewBox="0 0 24 24"
                  width={32}
                  height={32}
                  stroke="currentColor"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M16.88 3.549L7.12 20.451" />
                </svg>
              </li>
              <li className="font-medium">
                <Link
                  className="text-link hover:text-link-light transition-colors no-underline [&_code]:text-link [&_code]:hover:text-link-light [&_code]:transition-colors text-accents-6 duration-200 hover:text-accents-8 cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                  href="/"
                >
                  Quantum
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </div>
  )
}
