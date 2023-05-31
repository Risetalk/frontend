'use client'
import Image from 'next/image'
import ContainerCreators from '@/components/ContainerCreators-'
import TeacherDetail from '@/components/TeacherDetail'
import logo from '../../public/images/principalLogo.png'
import joel from '../../public/images/joel.jpg'
import jesse from '../../public/images/jesse.jpg'
import eliza from '../../public/images/eliza.jpg'
import miguel from '../../public/images/miguel.jpg'
import diego from '../../public/images/diego.jpg'
import diegocaruso from '../../public/images/diegocaruso.jpg'
import github from '../../public/github.png'
import linkedin from '../../public/linkedin.png'
import Link from 'next/link'

export default function AboutPage() {

    const creators = [
        {
            name: "Joel",
            last_name: "Vegas",
            img_profile: { joel },
            booth: "Deployment",
            linkedin: "linkedin",
            github: "github",
            page: ""
        },
        {
            name: "Jesse",
            last_name: "McCallums",
            img_profile: { jesse },
            booth: "Deployment",
            linkedin: "linkedin",
            github: "github",
            page: ""
        },
        {
            name: "Nahuel",
            last_name: "Chamorro",
            img_profile: "",
            booth: "Frontend",
            linkedin: "linkedin",
            github: "github",
            page: ""
        },
        {
            name: "Eliza",
            last_name: "Ortiz",
            img_profile: { eliza },
            booth: "Frontend",
            linkedin: "https://www.linkedin.com/in/elizabeth-ortiz-rivas/",
            github: "https://github.com/LizOrtizR",
            page: ""
        },
        {
            name: "Diego",
            last_name: "Ibañez",
            img_profile: { diego },
            booth: "Backend",
            linkedin: "https://www.linkedin.com/in/diego-iba%C3%B1ez-09202822a/",
            github: "https://github.com/DiegoLIbanez",
            page: ""
        },
        {
            name: "Miguel",
            last_name: "Miguel",
            img_profile: { miguel },
            booth: "Backend",
            linkedin: "https://www.linkedin.com/in/miguel-agustin-fernandez-aa1596248/",
            github: "https://github.com/Fer-Mig-Agus",
            page: ""
        },
        {
            name: "Diego",
            last_name: "Caruso",
            img_profile: { diegocaruso },
            booth: "Backend",
            linkedin: "https://www.linkedin.com/in/diego-caruso-433864237/",
            github: "https://github.com/Diegoc24",
            page: ""
        },
    ]

    return (
        <main className='pt-[4rem]'>
            <section className='flex flex-col pt-[4rem] w-[80%] mx-[auto]'>
                <h2 className='w-[100%]'>Info de la empresa.</h2>
                <div className='flex justify-center'>
                    <p className='w-[40%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tempora mollitia deleniti fuga sunt. Inventore, eos perspiciatis quaerat consequatur aliquam delectus quibusdam soluta quis, facilis repellendus, deleniti doloribus omnis veniam!</p>
                    <Image
                        className='w-[40%]'
                        src={logo} alt='logo-img' width={500} height={500} />
                </div>
            </section>

            <section>
                <h2>Developers</h2>
                <div className='flex flex-wrap w-[80%] mx-[auto] justify-around'>
                    <div className='w-[25%]'>
                        <Image className='w-[100%]' src={joel} alt='photo-joel' width={500} height={500} />
                        <h2>Joel Vegas</h2>
                        <h3>Deployment</h3>
                        <div>
                            <Link href={""}>
                                <Image src={linkedin} alt='linkedin-ico' width={60} height={60} />
                            </Link>
                            <Link href={"https://github.com/JOEL18VEGAS"}>
                                <Image src={github} alt='github-ico' width={60} height={60} />
                            </Link>
                        </div>
                    </div>

                    <div className='w-[25%]'>
                        <Image className='w-[100%]' src={jesse} alt='photo-jesse' width={500} height={500} />
                        <h2>Jesse MacCallums</h2>
                        <h3>Devployment</h3>
                        <div>
                            <Link href={""}>
                                <Image src={linkedin} alt='linkedin-ico' width={60} height={60} />
                            </Link>
                            <Link href={""}>
                                <Image src={github} alt='github-ico' width={60} height={60} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <Image src={""} alt='photo-nahuel' width={500} height={500} />
                        <h2>Nahuel Chamorro</h2>
                        <h3>Frontend</h3>
                        <div>
                            <Link href={"https://github.com/nahucham18"}>
                                <Image src={linkedin} alt='linkedin-ico' width={60} height={60} />
                            </Link>
                            <Link href={"https://github.com/nahucham18"}>
                                <Image src={github} alt='github-ico' width={60} height={60} />
                            </Link>
                        </div>
                    </div>
                    {/* <div>
                        <Image src={ } alt='' width={ } height={ } />
                        <h2>{ }</h2>
                        <h3>{ }</h3>
                        <div>
                            <Link href={ }>
                                <Image src={linkedin} alt='linkedin-ico' width={60} height={60} />
                            </Link>
                            <Link href={ }>
                                <Image src={github} alt='github-ico' width={60} height={60} />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image src={ } alt='' width={ } height={ } />
                        <h2>{ }</h2>
                        <h3>{ }</h3>
                        <div>
                            <Link href={ }>
                                <Image src={linkedin} alt='linkedin-ico' width={60} height={60} />
                            </Link>
                            <Link href={ }>
                                <Image src={github} alt='github-ico' width={60} height={60} />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image src={ } alt='' width={ } height={ } />
                        <h2>{ }</h2>
                        <h3>{ }</h3>
                        <div>
                            <Link href={ }>
                                <Image src={linkedin} alt='linkedin-ico' width={60} height={60} />
                            </Link>
                            <Link href={ }>
                                <Image src={github} alt='github-ico' width={60} height={60} />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Image src={ } alt='' width={ } height={ } />
                        <h2>{ }</h2>
                        <h3>{ }</h3>
                        <div>
                            <Link href={ }>
                                <Image src={linkedin} alt='linkedin-ico' width={60} height={60} />
                            </Link>
                            <Link href={ }>
                                <Image src={github} alt='github-ico' width={60} height={60} />
                            </Link>
                        </div>
                    </div> */}
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
            <section></section>
            {/* <ContainerCreators /> */}
            {/* <TeacherDetail /> */}
        </main>
    )
}