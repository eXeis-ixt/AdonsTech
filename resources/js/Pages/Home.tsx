import React from "react";
import { BorderBeam } from "@/Components/ui/border-beam";
import { Button } from "@/Components/ui/button";
import BoxReveal from "@/Components/ui/box-reveal";

import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import Wrapper from "@/Components/global/wrapper";
import Container from "@/Components/global/container";
import Meteors from "@/Components/ui/meteors";
import { RainbowButton } from "@/Components/ui/rainbow-button";

import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GitHubLogoIcon,
    GlobeIcon,
    InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/Components/ui/bento-grid";
import HyperText from "@/Components/ui/hyper-text";
import { Orbit } from "@/Components/Orbit";
import { VelocityScroll } from "@/Components/ui/scroll-based-velocity";
import { Earth } from "@/Components/earth";
import { Review } from "@/Components/reviews";

const features = [
    {
        Icon: FileTextIcon,
        name: "Save your files",
        description: "We automatically save your files as you type.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
        Icon: InputIcon,
        name: "Full text search",
        description: "Search through all your files in one place.",
        href: "/",
        cta: "Learn more",
        background: (
            <img
                src="https://adons.org/storage//vILowFv3zdqN9fFv5CVcElZNNIX7XU-metaTGFyYXZlbC10aGUtc2lsZW50LWtpbGxlci5wbmc=-.webp"
                className="absolute "
            />
        ),
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: GlobeIcon,
        name: "Multilingual",
        description: "Supports 100+ languages and counting.",
        href: "/",
        cta: "Learn more",
        background: (
            <img
                src="https://adons.org/image/feature/feature-6.png"
                className="absolute -right-20 -top-20 opacity-60"
            />
        ),
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
        Icon: CalendarIcon,
        name: "Calendar",
        description: "Use the calendar to filter your files by date.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        Icon: BellIcon,
        name: "Notifications",
        description:
            "Get notified when someone shares a file or mentions you in a comment.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
];

const Home = () => {
    return (
        <>
            <Head title="Home" />
            <DefaultLayout>
                {/* Hero */}
                <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
                    <Wrapper>
                        <Container>
                            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
                                <Meteors number={30} />
                                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-[#12131c] to-[#171717] bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                                    Innovate. Excel. Succeed!
                                </span>
                                <p className=" pt-10">
                                    Empowering your brand through creativity and
                                    technology. The solution to your
                                </p>
                                <div className=" mt-10">
                                    <RainbowButton>
                                        <Link href="/register">
                                            Get started
                                        </Link>
                                    </RainbowButton>
                                    ;
                                </div>
                            </div>
                        </Container>
                    </Wrapper>

                    <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                        <Container>
                            <BentoGrid className="lg:grid-rows-3">
                                {features.map((feature) => (
                                    <BentoCard
                                        key={feature.name}
                                        {...feature}
                                    />
                                ))}
                            </BentoGrid>
                        </Container>
                    </Wrapper>

                    <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                        {/* <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-red-600 rounded-full blur-[10rem] -z-10"></div>
                    <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div> */}
                        <Container>
                            <div className=" flex items-center justify-center text-center mt-10">
                                <HyperText
                                    className=" text-4xl font-bold text-black hover:text-[#5468fb]"
                                    text="About us"
                                />
                            </div>
                            <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 justify-between  gap-5">
                                <div>
                                    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
                                        <BoxReveal
                                            boxColor={"#5468fb"}
                                            duration={0.5}
                                        >
                                            <p className="text-[3.5rem] font-semibold">
                                                Adons Tech
                                                <span className="text-[#5468fb]">
                                                    .
                                                </span>
                                            </p>
                                        </BoxReveal>

                                        <BoxReveal
                                            boxColor={"#5468fb"}
                                            duration={0.5}
                                        >
                                            <h2 className="mt-[.5rem] text-[1rem]">
                                                At adons we believe in the power
                                                of creativity{" "}
                                                <span className="text-[#5468fb]">
                                                    and minimalism
                                                </span>
                                            </h2>
                                        </BoxReveal>

                                        <BoxReveal
                                            boxColor={"#5468fb"}
                                            duration={0.5}
                                        >
                                            <div className="mt-6">
                                                <p>
                                                    We create spcifically for
                                                    our clients business. With
                                                    over 5 years of experience
                                                    we know what our clients
                                                    wants ,
                                                </p>
                                                <p className=" pt-6 font-bold">
                                                    Our tech stack
                                                </p>
                                                <div className=" flex flex-col">
                                                    <span className="font-semibold text-[#5468fb]">
                                                        {" "}
                                                        React js
                                                    </span>
                                                    <span className="font-semibold text-[#5468fb]">
                                                        {" "}
                                                        Laravel
                                                    </span>
                                                    <span className="font-semibold text-[#5468fb]">
                                                        {" "}
                                                        Next js
                                                    </span>
                                                    <span className="font-semibold text-[#5468fb]">
                                                        {" "}
                                                        Tailwind CSS
                                                    </span>
                                                    <span className="font-semibold text-[#5468fb]">
                                                        {" "}
                                                        Vue Js
                                                    </span>
                                                </div>
                                            </div>
                                        </BoxReveal>

                                        <BoxReveal
                                            boxColor={"#5468fb"}
                                            duration={0.5}
                                        >
                                            <Button className="mt-[1.6rem] bg-black">
                                                <Link href="/contact">
                                                    Get a qoute
                                                </Link>
                                            </Button>
                                        </BoxReveal>
                                    </div>
                                </div>
                                <div>
                                    <Orbit />
                                </div>
                            </div>
                        </Container>
                    </Wrapper>

                    <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                        <div className=" text-center">
                            <HyperText
                                className=" text-4xl font-bold text-black hover:text-[#5468fb]"
                                text="What our clients say about us"
                            />
                        </div>
                        <Container>
                            <Review />
                        </Container>
                    </Wrapper>

                    <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                        {/* <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-red-600 rounded-full blur-[10rem] -z-10"></div>
                    <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div> */}
                        <Container>
                            <div className=" flex items-center justify-center text-center mt-10">
                                <HyperText
                                    className=" text-4xl font-bold text-black hover:text-[#5468fb]"
                                    text="Work with us"
                                />
                            </div>
                            <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 justify-between  gap-5">
                                <div>
                                    <Earth />
                                </div>
                                <div>
                                    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
                                        <BoxReveal
                                            boxColor={"#5468fb"}
                                            duration={0.5}
                                        >
                                            <p className="text-[3.5rem] font-semibold">
                                                Get your business up and running
                                                <span className="text-[#5468fb]">
                                                    .
                                                </span>
                                            </p>
                                        </BoxReveal>

                                        <BoxReveal
                                            boxColor={"#5468fb"}
                                            duration={0.5}
                                        >
                                            <h2 className="mt-[.5rem] text-[1rem]">
                                                Our experienced developer{" "}
                                                <span className="text-[#5468fb]">
                                                    will build your business in
                                                    no time
                                                </span>
                                            </h2>
                                        </BoxReveal>

                                        <BoxReveal
                                            boxColor={"#5468fb"}
                                            duration={0.5}
                                        >
                                            <div className="mt-6">
                                                <p>
                                                    We have created more than
                                                    200+ project and made tons
                                                    of open source template for
                                                    our customers and the
                                                    community

                                                </p>
                                            </div>
                                        </BoxReveal>

                                        <BoxReveal
                                            boxColor={"#5468fb"}
                                            duration={0.5}
                                        >
                                            <Button className=" flex items-center mt-[1.6rem] bg-black">
                                                <a href="/GitHub" target="_blank">
                                                GitHub
                                                </a>
                                                <GitHubLogoIcon className=" ml-2" />
                                            </Button>
                                        </BoxReveal>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </Wrapper>
                </section>
            </DefaultLayout>
        </>
    );
};

export default Home;
