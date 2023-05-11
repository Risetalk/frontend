import Image from 'next/image'
import teacher from '../public/student.jpg'

export default function TeacherDetail() {
    return (
        <section className='bg-[#222129] text-white'>
            <div>
                <h2></h2>
                <div>
                    <Image src={teacher} alt="teacher" width={400} height={450}/>
                    <div>
                        <h3>Savannah Nguyen</h3>
                        <span>tanya.hill@example.com</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor <br />
                            Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor <br />
                            Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor <br />
                        </p>
                        <div>
                            <div>iconX</div>
                            <div>iconX</div>
                            <div>iconX</div>
                        </div>
                    </div>
                    <div>
                        <div>img.teacher</div>
                        <div>img.teacher</div>
                        <div>img.teacher</div>
                        <div>img.teacher</div>
                    </div>
                </div>
            </div>

        </section>
    )
}