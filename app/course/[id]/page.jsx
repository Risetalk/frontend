import Image from "next/image"
import star from "../../../public/star-ico.png"
import Link from "next/link"

export default function CourseDetail() {

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

    return (
        <main className="bg-white">
            <header>
                <Image className="w-[100%] h-[450px] object-cover" src={"https://s3-alpha-sig.figma.com/img/d46b/8d8d/cd4a8bb14061e62f8b1a3811aec52f49?Expires=1684713600&Signature=SQNiB-MukkvU-eMQe5N8Rvarts29uopR5LJYY2E8gXPfJ0e1-w9LJVQCDjWcFR7xzz6uCurNLo5F6yInNLQx5qQdFMoImtP0fwepCWcmeJrUrjWMiUa~r1WljzUY4zqKZ05DAgkYEiwcyRBqT1ixKiG6Q6Exi1EesZ8VjKzpwvufgdNu4-ks7FmK2GE9PkJ4wbTxWJTc7l7ApxQa5wscOoPZUecy35WSywQLNyqhjfPknmbSVq9e3GIAb8EdooRtzBJHOyIZC2~fzloo2NIRLkIEOCX5ZGr4sHt9-3BQBz9e4B72hEHwt23yIMUoJEnD78FB~TS-FisIYEx~wLBsvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} width={1574} height={1212} alt="img-header" />
            </header>

            <section className="flex">
                <div className="w-[60%] bg-red-400">
                    <div className="w-[80%] bg-blue-300 mx-[auto]">
                        <ul className="flex justify-between mb-[5.188rem]">
                            <li className="py-4 px-[3.125rem] bg-[#0000001A] rounded-[0.75rem]">Overview</li>
                            <li className="py-4 px-[3.125rem] bg-[#0000001A] rounded-[0.75rem]">Overview</li>
                            <li className="py-4 px-[3.125rem] bg-[#0000001A] rounded-[0.75rem]">Overview</li>
                            <li className="py-4 px-[3.125rem] bg-[#0000001A] rounded-[0.75rem]">Overview</li>
                        </ul>

                        <div className="bg-[#CCD5DEB8] pt-[3.125rem]">
                            <div>
                                <div className="flex bg-green-400 w-[90%] mx-[auto] gap-x-8">
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

                            <div className="text-black mt-[4rem] w-[90%] mx-[auto] ">
                                {
                                    reviews.map(rew => {
                                        return (
                                            <article key={rew.id}>
                                                <div>
                                                    <Image className="w-[20px] h-[20px] rounded-full" src={rew.imgAuthor} width={400} height={400} alt="img-author" />
                                                    <span>{rew.author}</span>
                                                    <div>Stars</div>
                                                </div>

                                                <span>{rew.time} Month</span>
                                                <p>{rew.comment}</p>

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
                        <Image src={"https://s3-alpha-sig.figma.com/img/d46b/8d8d/cd4a8bb14061e62f8b1a3811aec52f49?Expires=1684713600&Signature=SQNiB-MukkvU-eMQe5N8Rvarts29uopR5LJYY2E8gXPfJ0e1-w9LJVQCDjWcFR7xzz6uCurNLo5F6yInNLQx5qQdFMoImtP0fwepCWcmeJrUrjWMiUa~r1WljzUY4zqKZ05DAgkYEiwcyRBqT1ixKiG6Q6Exi1EesZ8VjKzpwvufgdNu4-ks7FmK2GE9PkJ4wbTxWJTc7l7ApxQa5wscOoPZUecy35WSywQLNyqhjfPknmbSVq9e3GIAb8EdooRtzBJHOyIZC2~fzloo2NIRLkIEOCX5ZGr4sHt9-3BQBz9e4B72hEHwt23yIMUoJEnD78FB~TS-FisIYEx~wLBsvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} alt="img-course" width={400} height={400} />
                        <div>
                            <span>$49.65</span>
                            <span>$99.99</span>
                            <span>40% off</span>
                            <p>11 hour left at this price</p>
                            <Link href={`#`}>Buy Now</Link>
                        </div>
                    </article>

                    <article>
                        <div className="component">
                            <h3>This Course included</h3>
                            <ul>
                                <li>Money</li>
                                <li>Back</li>
                                <li>certicaction</li>
                                <li>modules</li>
                            </ul>
                        </div>
                    </article>


                    <article>
                        training
                    </article>
                    <article>
                        Share
                    </article>
                </div>

            </section>
            <h1>Estoy es course detail</h1>
        </main>
    )
}