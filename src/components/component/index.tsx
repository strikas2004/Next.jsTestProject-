/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/hN9Flqtc6y7
 */
"use client"
import Link from "next/link"
import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
import { ContactInformation } from "./contact-information"
import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd'
import Image from 'next/image';
import { useRouter } from "next/navigation";
export function Index() {

  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [showContactInformation, setShowContactInformation] = useState(false);
  const showDefaultDrawer = () => {

    setOpen(true);
  };
  const showLargeDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setShowContactInformation(true);
  };
  return (
    <>
      <div className="flex flex-col min-h-[100dvh] items-center justify-center">

        <header className="px-4  lg:px-3  flex items-center">
          <Image
            src="/logo.png"
            className="mx-auto"
            alt="Description of the image"
            width={200}
            height={200}
          />
          {/* Add navigation links here if needed */}
        </header>

        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    {"Unleash your skin Clinic's Potential"}
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {"These simple Strategies lead to crore+ Revenue per Year!! A short that will change the way you run the SkinClinic bussiness"}
                  </p>
                </div>
                <div className="space-x-4">
                  {/* <Button className="inline-flex h-12  items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    onClick={showLargeDrawer}>
                    {"Get Register Your Self"}
                  </Button> */}

                </div>

              </div>
            </div>
          </section>
          <section className="w-full  md:py-8 lg:py-8">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <Image
                src="/indexIMage.png"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                alt="Description of the image"
                width={550}
                height={30}
              />

              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{"DISCOVER HOW TO MAKE PATIENT AQUISITION EASY....."}</h2>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {"✅ Without offering Heavy Discounts to attract Patients."}
                  </p>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {"✅ Without getting Frustration from the Competition."}
                  </p>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {"✅ Without wasting money on ineffective Marketing agencies."}
                  </p>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {"✅ Without encountering any staff-related issues."}
                  </p>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {"✅ Without Constantly Worring about Patient retention"}
                  </p>
                </div>
                <div className="flex space-x-4">
                  <Button className="inline-flex h-12  items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    onClick={showLargeDrawer}>
                    {"Watch Now for Free!!"}
                  </Button>
                  <Link
                    className="inline-flex h-12 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                    href="#"
                  >
                    {"Learn more"}
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {"Anything If want to add here"}
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {" Let your team focus on shipping features instead of managing by your Self."}
                </p>
              </div>

              {/* <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div> */}
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">{"© 2024 All rights reserved."}</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">

            {/* <Button className="inline-flex   items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              onClick={() => {
                router.push("/detailsScreen")
              }}>
              {"Terms of Service"}
            </Button>
            <Button className="inline-flex   items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              onClick={() => {
                router.push("/detailsScreen")
              }}>
              {"Privacy"}
            </Button> */}
          </nav>
        </footer>
      </div>
      <Drawer
        title={`Get Register Your Self`}
        placement="right"
        size={'large'}
        onClose={onClose}
        open={open}
      // extra={
      //   <Space>
      //     <Button className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
      //       onClick={onClose}>Cancel</Button>
      //     <Button className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
      //       onClick={onClose}>
      //       OK
      //     </Button>
      //   </Space>
      // }
      >
        <div >
          <ContactInformation />
        </div>
      </Drawer>
    </>
  )
}


