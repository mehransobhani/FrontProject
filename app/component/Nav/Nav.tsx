"use client"
import {Disclosure} from "@headlessui/react";
import Link from "next/link";
import {Bars3Icon} from "@heroicons/react/24/solid";
import {XMarkIcon} from "@heroicons/react/24/solid";
import Header from "../Header/Header";

export default function Nav(props:{bg:string}) {
    function classNames(...classes: any) {
        return classes.filter(Boolean).join(" ");
    }

    interface menu {
        name: string;
        href: string;
        current: boolean;
        sub?: menu[];
    }

    const navigation: menu[] = [
        {name: "صفحه اصلی", href: "/", current: false, sub: []},
        {
            name: "خدمات",
            href: "#services",
            current: false,
            sub: [{name: "خدماتخدماتخدمات", href: "#services", current: true}, {
                name: "خدwdwdwdwdمات",
                href: "#services",
                current: false
            }, {
                name: "خدwdwdwdwdمات",
                href: "#services",
                current: false
            }, {
                name: "خدwdwdwdwdمات",
                href: "#services",
                current: false
            }]
        },
        {name: "تماس با ما", href: "#faq", current: false, sub: []},
    ];
    return (
        <>

            <Disclosure
                as="nav"
                className={` fixed top-0 left-0 right-0 text-white  border-b border-neutral-200 backdrop-blur-sm  bg-sky-600  z-20  `}
            >
                {({open}: { open: any }) => (
                    <>
                                    <Header />

                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">

                                <div className="flex flex-1 items-center justify-start">

                                    <div className="hidden sm:mx-6 sm:block">
                                        <div className="flex  items-start ">
                                            {navigation.map((item) => (
                                                <>
                                                    <div className={"relative"}>
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current
                                                                    ? "text-rose-500"
                                                                    : "text-white  hover:text-rose-500",
                                                                "text-base font-medium px-4 "
                                                            )}
                                                            aria-current={item.current ? "page" : undefined}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                        {
                                                            item.sub ? <>
                                                                <div
                                                                    className={"absolute top-10 right-0 hidden "}>
                                                                    <ul className="border border-gray-200 rounded overflow-hidden shadow-md">

                                                                        {
                                                                            item.sub.map((subItem) => (
                                                                                <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                                                                                    {subItem.name}

                                                                                </li>

                                                                            ))
                                                                        }
                                                                    </ul>

                                                                </div>
                                                            </> : ""
                                                        }
                                                    </div>
                                                </>
                                            ))}

                                        </div>
                                    </div>


                                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">

                                        {/* Mobile menu button*/}
                                        <Disclosure.Button
                                            className="inline-flex items-center justify-center rounded-md text-neutral-900  ">

                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-4 min-h-screen border-t border-neutral-200  bg-white  ">
                                {navigation.map((item) => (
                                        <>
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "text-rose-500 "
                                                        : "text-white  ",
                                                    "block py-4 text-base font-medium border-b border-neutral-200  text-right"
                                                )}
                                                aria-current={item.current ? "page" : undefined}
                                            >
                                                {item.name}
                                            </Disclosure.Button>

                                            {
                                                item.sub && item.sub.map((subItem) => (
                                                    <Disclosure.Button
                                                        key={subItem.name}
                                                        as="a"
                                                        href={subItem.href}
                                                        className={classNames(
                                                            item.current
                                                                ? "text-rose-500 "
                                                                : "text-neutral-700  ",
                                                            "block py-4  pr-10 text-base font-medium border-b border-neutral-200  text-right"
                                                        )}
                                                        aria-current={subItem.current ? "page" : undefined}
                                                    >
                                                        {subItem.name}
                                                    </Disclosure.Button>
                                                ))
                                            }
                                        </>


                                    )
                                )}
                                <div
                                    className={"block py-4 text-base font-medium border-b border-neutral-200  text-center bg-rose-500 text-white mt-64"}>
                                    <button>
                                        <Link
                                            href="https://github.com/humberni/halley"
                                            target="_blank"
                                            className=" block"
                                        >

                            <span className={""}>
                                ورود

                            </span>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    )
}
