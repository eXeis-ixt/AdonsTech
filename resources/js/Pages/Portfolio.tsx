import React from "react";
import BlurFade from "@/Components/ui/blur-fade";
import DefaultLayout from "@/Layouts/DefaultLayout";
import Wrapper from "@/Components/global/wrapper";
import Container from "@/Components/global/container";
import { Head } from "@inertiajs/react";

// const images = Array.from({ length: 9 }, (_, i) => {
//     const isLandscape = i % 2 === 0;
//     const width = isLandscape ? 800 : 600;
//     const height = isLandscape ? 600 : 800;
//     return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
// });

const Portfolio = ({portfolios} : {portfolios : any}) => {
    return (
        <>
            <DefaultLayout>
                <Head>
                    <title>
                        Portfolios
                    </title>
                </Head>
                <Wrapper>
                    <Container className=" mt-10">
                        <section id="photos">
                            <div className="gird grid-cols-1 md:gird-cols-3 gap-5 sm:columns-3">
                                {portfolios.map((portfolio) => (
                                    <BlurFade
                                        key={portfolios}
                                        delay={0.25 * 0.05}
                                        inView
                                    >
                                        <img
                                            className="mb-4 size-full rounded-lg object-contain"
                                            src={portfolio.image}
                                            alt={`$portfolio.alt`}
                                        />
                                    </BlurFade>
                                ))}
                            </div>
                        </section>
                    </Container>
                </Wrapper>
            </DefaultLayout>
        </>
    );
};

export default Portfolio;
