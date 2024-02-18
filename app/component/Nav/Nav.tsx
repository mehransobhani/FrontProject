"use client"
import {Disclosure} from "@headlessui/react";
import Link from "next/link";
import {Bars3Icon} from "@heroicons/react/24/solid";
import {XMarkIcon} from "@heroicons/react/24/solid";
import Header from "../Header/Header";
import {Fragment, useState} from "react";
import {usePathname} from "next/navigation";

export default function Nav() {
    const[openSubMenu,setOpenSubMenu]=useState<boolean>(false);
    function classNames(...classes: any) {
        return classes.filter(Boolean).join(" ");
    }

    const pathName=usePathname();
    interface menu {
        name: string;
        href: string;
        current: boolean;
        sub?: menu[]|null;
    }

    const navigation: menu[] = [
        {name: "صفحه اصلی", href: "/", current: pathName=="/", sub:null},
        {
            name: "خدمات",
            href: "#",
            current: false,
            sub: [  {
                name: "درخواست پشتیبانی آنلاین",
                href: "contact-us",
                current: pathName=="/contact-us"
            } ]
        },
        {name: "تماس با ما", href: "contact-us", current:  pathName=="/contact-us", sub: null},
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
                                            {navigation.map((item:menu,index:number) => (
                                                <Fragment key={index}>
                                                    <div className={"relative"} key={index}>
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className={classNames(
                                                                item.current
                                                                    ? "text-yellow-300"
                                                                    : "text-white  hover:text-yellow-200 ",
                                                                "text-base font-medium px-4 "
                                                            )}
                                                            aria-current={item.current ? "page" : undefined}
                                                            onClick={()=>{
                                                                item.sub?setOpenSubMenu(!openSubMenu):""
                                                            }}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                        {
                                                           ( item.sub && openSubMenu)? <>
                                                                <div
                                                                    className={"absolute top-10 right-0 w-56"}>
                                                                    <ul className="border border-gray-200 rounded overflow-hidden shadow-md">

                                                                        {
                                                                            item.sub.map((subItem:menu , index:number) => (
                                                                                <Link key={index}
                                                                                    className={classNames(
                                                                                        subItem.current
                                                                                            ? "text-yellow-600"
                                                                                            : "text-gray-800 ",
                                                                                     )}
                                                                                    href={subItem.href}>
                                                                                <li className="px-4 py-2  bg-white hover:bg-gray-100 cursor-pointer hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                                                                                    {subItem.name}

                                                                                </li>
                                                                                </Link>

                                                                            ))
                                                                        }
                                                                    </ul>

                                                                </div>
                                                            </> : ""
                                                        }
                                                    </div>
                                                </Fragment>
                                            ))}

                                        </div>
                                    </div>


                                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">

                                        {/* Mobile menu button*/}
                                        <Disclosure.Button
                                            className="inline-flex items-center justify-center rounded-md text-neutral-900  ">

                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6 text-white" aria-hidden="true"/>
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6 text-white"  aria-hidden="true"/>
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-4 min-h-screen border-t border-neutral-200  bg-white  ">
                                {navigation.map((item:menu,index:number) => (
                                        <Fragment key={index}>
                                            <Disclosure.Button
                                                key={item.name}
                                                as={item.sub?"span":"a"}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "text-yellow-600 "
                                                        : "text-gray-800  ",
                                                    "block py-4 text-base font-medium border-t border-neutral-200  text-right"
                                                )}
                                                aria-current={item.current ? "page" : undefined}
                                            >
                                                {item.name}
                                            </Disclosure.Button>

                                            {
                                                item.sub && item.sub.map((subItem:menu , index:number) => (
                                                    <Disclosure.Button
                                                        key={subItem.name}
                                                        as="a"
                                                        href={subItem.href}
                                                        className={classNames(
                                                            subItem.current
                                                                ? "text-yellow-600"
                                                                : "text-neutral-700  ",
                                                            "block py-2   text-base font-medium border-ht border-neutral-100  text-right"
                                                        )}
                                                        aria-current={subItem.current ? "page" : undefined}
                                                    >
                                                        {subItem.name}
                                                    </Disclosure.Button>
                                                ))
                                            }
                                        </Fragment>


                                    )
                                )}

                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    )
}
