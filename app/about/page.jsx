'use client'
import Image from 'next/image'
import ContainerCreators from '@/components/ContainerCreators-'
import TeacherDetail from '@/components/TeacherDetail'
import logo from '../../public/images/principalLogo.png'

export default function AboutPage() {

    const creators = [
        {
            name:"Joel",
            last_name:"Vegas",
            booth:"Deployment",
            linkedin:"linkedin",
            github:"github",
            page:""
        },
        {
            name:"Jesse",
            last_name:"McCallums",
            booth:"Deployment",
            linkedin:"linkedin",
            github:"github",
            page:""
        },
        {
            name:"Nahuel",
            last_name:"Chamorro",
            booth:"Frontend",
            linkedin:"linkedin",
            github:"github",
            page:""
        },
        {
            name:"Eliza",
            last_name:"Ortiz",
            booth:"Frontend",
            linkedin:"linkedin",
            github:"github",
            page:""
        },
        {
            name:"Diego",
            last_name:"Ibañez",
            booth:"Backend",
            linkedin:"linkedin",
            github:"github",
            page:""
        },
        {
            name:"Miguel",
            last_name:"Miguel",
            booth:"Backend",
            linkedin:"https://www.linkedin.com/in/miguel-agustin-fernandez-aa1596248/",
            github:"https://github.com/Fer-Mig-Agus",
            page:""
        },
        {
            name:"Diego",
            last_name:"Caruso",
            booth:"Backend",
            linkedin:"",
            github:"",
            page:""
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
            </section>
            <section></section>
            {/* <ContainerCreators /> */}
            {/* <TeacherDetail /> */}
        </main>
    )
}