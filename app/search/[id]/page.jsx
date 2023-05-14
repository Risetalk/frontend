import Image from "next/image"
import star from "../../../public/star-ico.png"
import Link from "next/link"
import SubSection from "@/components/SubSection"
import ContainerCards from "@/components/ContainerCards"

export default function BuyCourseDetail() {

    const reviews = [
        {
            id: "1",
            author: "Lina",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            stars: "5",
            time: "3",
            comment: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
        },
        {
            id: "2",
            author: "Lina",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            stars: "5",
            time: "3",
            comment: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
        }
    ]

    const recommended = [
        {
            id: "1",
            title: "AWS Certified solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
            tema: "Desing",
            duration: "3",
            author: "Lina",
            price: "100",
            offer: "80",
            img: "https://s3-alpha-sig.figma.com/img/59e9/1cde/877aacb096082025aaa7528e15f2789e?Expires=1684713600&Signature=K--3edUWPwgZeMYX0xqupY~RBHdmyZ7DAypqD~YmBRyEFIwAYHSgmFqZndnZsH60Xz89cX-ToQW~Ym6d7d2pfWwRE4YatIC3NOBljLr7iIkclBmNiz3MGqcgjUcTf7-mzgiCsX1LoFD0P2v9fn9pQfYyMePfMrRFgBu3vq7aj49SXOwMWG8wDNBtJEMCZUBU5QkJz0A17ddAzFB4dOv-DxOj7wx0UxOXfeI8hYWXXnWON7QaKsgvvd3sxnFzpQDH4dCvBzq8Yj-ZkWDH31lSNK0A4DUds9Ek6DLtdBHom3itatOQyjLAGSsRPLOwfLa9cvAi8avmxO9OYXQlXMsWsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            id: "2",
            title: "AWS Certified solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
            tema: "Desing",
            duration: "3",
            author: "Lina",
            price: "100",
            offer: "80",
            img: "https://s3-alpha-sig.figma.com/img/59e9/1cde/877aacb096082025aaa7528e15f2789e?Expires=1684713600&Signature=K--3edUWPwgZeMYX0xqupY~RBHdmyZ7DAypqD~YmBRyEFIwAYHSgmFqZndnZsH60Xz89cX-ToQW~Ym6d7d2pfWwRE4YatIC3NOBljLr7iIkclBmNiz3MGqcgjUcTf7-mzgiCsX1LoFD0P2v9fn9pQfYyMePfMrRFgBu3vq7aj49SXOwMWG8wDNBtJEMCZUBU5QkJz0A17ddAzFB4dOv-DxOj7wx0UxOXfeI8hYWXXnWON7QaKsgvvd3sxnFzpQDH4dCvBzq8Yj-ZkWDH31lSNK0A4DUds9Ek6DLtdBHom3itatOQyjLAGSsRPLOwfLa9cvAi8avmxO9OYXQlXMsWsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            id: "3",
            title: "AWS Certified solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
            tema: "Desing",
            duration: "3",
            author: "Lina",
            price: "100",
            offer: "80",
            img: "https://s3-alpha-sig.figma.com/img/59e9/1cde/877aacb096082025aaa7528e15f2789e?Expires=1684713600&Signature=K--3edUWPwgZeMYX0xqupY~RBHdmyZ7DAypqD~YmBRyEFIwAYHSgmFqZndnZsH60Xz89cX-ToQW~Ym6d7d2pfWwRE4YatIC3NOBljLr7iIkclBmNiz3MGqcgjUcTf7-mzgiCsX1LoFD0P2v9fn9pQfYyMePfMrRFgBu3vq7aj49SXOwMWG8wDNBtJEMCZUBU5QkJz0A17ddAzFB4dOv-DxOj7wx0UxOXfeI8hYWXXnWON7QaKsgvvd3sxnFzpQDH4dCvBzq8Yj-ZkWDH31lSNK0A4DUds9Ek6DLtdBHom3itatOQyjLAGSsRPLOwfLa9cvAi8avmxO9OYXQlXMsWsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            id: "4",
            title: "AWS Certified solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
            tema: "Desing",
            duration: "3",
            author: "Lina",
            price: "100",
            offer: "80",
            img: "https://s3-alpha-sig.figma.com/img/59e9/1cde/877aacb096082025aaa7528e15f2789e?Expires=1684713600&Signature=K--3edUWPwgZeMYX0xqupY~RBHdmyZ7DAypqD~YmBRyEFIwAYHSgmFqZndnZsH60Xz89cX-ToQW~Ym6d7d2pfWwRE4YatIC3NOBljLr7iIkclBmNiz3MGqcgjUcTf7-mzgiCsX1LoFD0P2v9fn9pQfYyMePfMrRFgBu3vq7aj49SXOwMWG8wDNBtJEMCZUBU5QkJz0A17ddAzFB4dOv-DxOj7wx0UxOXfeI8hYWXXnWON7QaKsgvvd3sxnFzpQDH4dCvBzq8Yj-ZkWDH31lSNK0A4DUds9Ek6DLtdBHom3itatOQyjLAGSsRPLOwfLa9cvAi8avmxO9OYXQlXMsWsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
    ]

    const education = [
        {
            id: 1,
            title: "FOR INSTRUCTORS",
            p: "TOTC’s school management software helps traditional and online schools manage scheduling,",
            offer: "50"
        },
        {
            id: 1,
            title: "FOR INSTRUCTORS",
            p: "TOTC’s school management software helps traditional and online schools manage scheduling,",
            offer: "50"
        },
        {
            id: 1,
            title: "FOR INSTRUCTORS",
            p: "TOTC’s school management software helps traditional and online schools manage scheduling,",
            offer: "50"
        },
    ]

    return (
        <main className="bg-white">
            <header>
                <Image className="w-[100%] h-[450px] object-cover" src={"https://s3-alpha-sig.figma.com/img/d46b/8d8d/cd4a8bb14061e62f8b1a3811aec52f49?Expires=1684713600&Signature=SQNiB-MukkvU-eMQe5N8Rvarts29uopR5LJYY2E8gXPfJ0e1-w9LJVQCDjWcFR7xzz6uCurNLo5F6yInNLQx5qQdFMoImtP0fwepCWcmeJrUrjWMiUa~r1WljzUY4zqKZ05DAgkYEiwcyRBqT1ixKiG6Q6Exi1EesZ8VjKzpwvufgdNu4-ks7FmK2GE9PkJ4wbTxWJTc7l7ApxQa5wscOoPZUecy35WSywQLNyqhjfPknmbSVq9e3GIAb8EdooRtzBJHOyIZC2~fzloo2NIRLkIEOCX5ZGr4sHt9-3BQBz9e4B72hEHwt23yIMUoJEnD78FB~TS-FisIYEx~wLBsvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} width={1574} height={1212} alt="img-header" />
            </header>

            <section className="flex pb-[6.25rem]">
                <div className="w-[60%] mt-[5rem] ">
                    <div className="w-[80%]  mx-[auto]">
                        <ul className="flex justify-between mb-[5.188rem]">
                            <li className="py-4 px-[3.125rem] bg-[#0000001A] rounded-[0.75rem]">Overview</li>
                            <li className="py-4 px-[3.125rem] bg-[#0000001A] rounded-[0.75rem]">Overview</li>
                            <li className="py-4 px-[3.125rem] bg-[#0000001A] rounded-[0.75rem]">Overview</li>
                            <li className="py-4 px-[3.125rem] bg-[#0000001A] rounded-[0.75rem]">Overview</li>
                        </ul>

                        <div className="bg-[#CCD5DEB8] pt-[3.125rem] pb-[2rem] rounded-[1.25rem]">
                            <div>
                                <div className="flex w-[90%] mx-[auto] gap-x-8">
                                    <div className="text-black py-[1.5rem] px-[3rem] bg-[#FFFFFF] rounded-[1.25rem] text-center">
                                        <h2 className="font-semibold text-[1.875rem] leading-[2.813rem] text-[#00000080]">4 out of 5</h2>

                                        <ul className="flex justify-center gap-x-[0.2rem] my-[1rem]">
                                            <li><Image className="text-black" src={star} alt="star-icon" width={22} height={60} /></li>
                                            <li><Image className="text-black" src={star} alt="star-icon" width={22} height={60} /></li>
                                            <li><Image className="text-black" src={star} alt="star-icon" width={22} height={60} /></li>
                                            <li><Image className="text-black" src={star} alt="star-icon" width={22} height={60} /></li>
                                            <li><Image className="text-black" src={star} alt="star-icon" width={22} height={60} /></li>
                                        </ul>
                                        <span className="font-normal text-[1.25rem] leading-[1.875rem] text-[#00000080]">Top Raiting</span>
                                    </div>

                                    <ul className="flex flex-col justify-between text-black">
                                        <li className="font-normal text-[1.25rem] leading-[1.875rem] text-[#00000080]">5 Stars</li>
                                        <li className="font-normal text-[1.25rem] leading-[1.875rem] text-[#00000080]">4 Stars</li>
                                        <li className="font-normal text-[1.25rem] leading-[1.875rem] text-[#00000080]">3 Stars</li>
                                        <li className="font-normal text-[1.25rem] leading-[1.875rem] text-[#00000080]">2 Stars</li>
                                        <li className="font-normal text-[1.25rem] leading-[1.875rem] text-[#00000080]">1 Stars</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="text-black mt-[2.6rem] w-[90%] mx-[auto] ">
                                {
                                    reviews.map(rew => {
                                        return (
                                            <article key={rew.id} className="pt-[1.5rem]" >
                                                <div className="flex justify-between items-end">
                                                    <div className="flex items-end gap-x-[0.75rem]">
                                                        <Image className="w-[70px] h-[70px] rounded-full object-cover object-top" src={rew.imgAuthor} width={400} height={400} alt="img-author" />
                                                        <div>
                                                            <span className="font-medium text-[1.125rem] leading-[1.688] text-[#000000]">{rew.author}</span>
                                                            <div>Stars</div>
                                                        </div>
                                                    </div>
                                                    <span className="font-medium text-0.875rem] leading-[1.583rem] text-[#696984]">{rew.time} Month</span>
                                                </div>

                                                <p className="font-normal text-[1.125rem] mt-[1.5rem] leading-[2.25rem] text-[#696984]">{rew.comment}</p>
                                                {
                                                    rew.id < reviews.length
                                                        ? <hr className="mt-[1.438rem] bg-[#696984] h-[2px]" />
                                                        : <></>
                                                }
                                            </article>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-[40%]">
                    <article>

                        <div className="text-black w-[60%] pt-4">
                            <div className="flex items-center justify-between mb-[1.875rem]">
                                <span className="font-semibold text-[2.4rem] leading-[4.219rem]">$49.65</span>
                                <span className="font-semibold text-[1.4rem] leading-[2.625rem] text-[#00000080] line-through">$99.99</span>
                                <span className="font-semibold text-[1.4rem] leading-[2.625rem] text-[#00000080]">40% off</span>
                            </div>
                            <p className="font-semibold text-[1.125rem] leading-[1.875rem] text-[#222129] text-center mb-[2.188rem]">11 hour left at this price</p>
                            <Link className="block font-bold text-[1.25rem] leading-[1.875rem] text-center text-[#FFFFFF] py-[1.125rem] w-full bg-[#222129] rounded-[0.75rem]" href={`#`}>Buy Now</Link>
                        </div>
                    </article>

                    <article>

                        <div className="text-black w-[60%] text-center align-center">
                            <SubSection title="This Course included" />
                            <SubSection title="Training 5 or more people" />
                            <SubSection title="Share this course" />
                        </div>
                    </article>
                </div>

            </section>

            <section className="bg-[#22212921] pt-[4rem] pb-[13.313rem]">
                <div className="w-[87%]  m-[auto]">
                    <ContainerCards key={5} title={"Marketing Articles"} link={"See all"} array={recommended} />
                </div>
            </section>

            <section className="text-[black]">
                <article className="flex w-[85%] mx-[auto] py-[11rem] gap-x-[2rem]">
                    <div className="w-[50%]">
                        <h2 className="font-medium text-[2.25rem] leading-[3.6rem] mb-[1.875rem]">Everything you can do in a physical classroom,<strong className="font-medium text-[2.25rem] leading-[3.6rem] text-[#F0713D]">you can do with TOTC</strong></h2>
                        <p className="font-normal text-[1.5rem] leading-[2.7rem] text-[#696984] mb-[1.875rem]">TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                        <Link href={`#`} className="font-normal text-[1.375rem] leading-[2.5rem] text-[#696984] underline ">Learn more</Link>
                    </div>

                    <div className="w-[50%] flex justify-center">
                        <div className="relative">
                            <div className="z-20">
                                <Image src={"https://s3-alpha-sig.figma.com/img/7a80/a7af/42c44b95173f6bb18529bebd58808a65?Expires=1684713600&Signature=kQwqNuKb3M4erJ2c1a8~Hq9alDbdtFRCCgy6zBW4oYB-~JQamYIDRrprlW20oMXwOBFTOCaLgVZKFIGdAAzAU88Ln-u~v09rqOYa2OSkES~EWeBUQFJLy0xwciJtPfRiJ3I0eRYmwmK2OZc7YYg-oIQLwodo3AWhyDZdi0m3-TNZ62AfRKV5h3n~W8EArTa~Z-mJCobgbV4UdPkIwSVAS3C6FEuUxGftPT1aAUBuvig-EoWyyDmOShsr~aUS8unkIVoUEQ85cjotlCFNZGEC~nzXhvFAb6gdPeC6FTmhV7VjYX5cSa0rq8DvZOgyf0UbwKPmc3UyYxjUJ6Pe8-uQKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4 "} alt="imagen-section" width={600} height={300} />
                            </div>
                            <div className="absolute bg-[#FF986F] h-[180px] w-[180px] rounded-[1.25rem] z-[1] bottom-[-20px] right-[-20px]"></div>
                            <div className="absolute bg-[#000] h-[180px] w-[180px] rounded-[1.25rem] z-[1] top-[-20px] left-[-20px]"></div>
                        </div>
                    </div>

                </article>
            </section>

            <section>
                                
            </section>
        </main>
    )
}