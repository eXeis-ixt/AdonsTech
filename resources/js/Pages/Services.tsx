import { Cloud } from "@/Components/Cloud";
import Container from "@/Components/global/container";
import Wrapper from "@/Components/global/wrapper";
import ServiceDetails from "@/Components/ServiceDetails";
import { ShinyText } from "@/Components/Text";
import { BorderBeam } from "@/Components/ui/border-beam";
import BoxReveal from "@/Components/ui/box-reveal";
import FlickeringGrid from "@/Components/ui/flickering-grid";
import { RainbowButton } from "@/Components/ui/rainbow-button";
import SparklesText from "@/Components/ui/sparkles-text";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Link, Head } from "@inertiajs/react";

const Services = () => {
    return (
        <div>
            <Head>
                <title>Services</title>
            </Head>
            <DefaultLayout>
                <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
                    <Wrapper>
                        {/* <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-red-600 rounded-full blur-[10rem] -z-10"></div>
                    <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div> */}
                        <Container>
                            <ShinyText text="Our Services" />
                        </Container>
                        <Container>
                            <div className="flex flex-col items-center justify-center mt-[-80px]  w-11/12 md:w-full text-center">
                                <SparklesText
                                    className=" md:text-6xl text-2xl"
                                    text="We offer a variety of services that are designed to help you achieve your goals."
                                />
                                <Link href="/contact">
                                    <RainbowButton className=" mt-10">
                                        Contact us
                                    </RainbowButton>
                                </Link>
                            </div>
                        </Container>
                        <Container className=" mt-10">
                            <div>
                                <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
                                <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                                    <img
                                        className=" w-full "
                                        src="./images/Dashboard-Adons.png"
                                        alt=""
                                    />
                                </div>

                                <BorderBeam
                                    size={250}
                                    duration={12}
                                    delay={9}
                                    borderWidth={5}
                                    colorFrom="#5468fb"
                                    colorTo="#ff215c"
                                />
                            </div>
                        </Container>
                    </Wrapper>

                    <Wrapper className="flex mt-[120px] flex-col items-center justify-center py-12 relative">
                        <Container>
                            <div className=" grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5">
                                <div>
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
                                            At adons we believe in the power of
                                            creativity{" "}
                                            <span className="text-[#5468fb]">
                                                and minimalism
                                            </span>
                                        </h2>
                                    </BoxReveal>

                                    <BoxReveal
                                        boxColor={"#5468fb"}
                                        duration={0.5}
                                    >
                                        <p className="mt-[.5rem] text-[1rem]">
                                            We offer a variety of services that
                                            are designed to help you achieve
                                            your goals.
                                        </p>
                                    </BoxReveal>
                                    <BoxReveal
                                        boxColor={"#5468fb"}
                                        duration={0.3}
                                    >
                                        <div className=" mt-10">
                                            <Link href="/portfolio">
                                                <RainbowButton>
                                                    Portfolio
                                                </RainbowButton>
                                            </Link>
                                        </div>
                                    </BoxReveal>
                                </div>

                                <div className=" md:block hidden">
                                    <Cloud />
                                </div>
                            </div>
                        </Container>
                    </Wrapper>
                    <Wrapper>
                        <Container>
                            <ServiceDetails />
                        </Container>
                    </Wrapper>
                </section>
            </DefaultLayout>
        </div>
    );
};

export default Services;
