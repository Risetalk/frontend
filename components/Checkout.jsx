import Image from "next/image"

export default function Checkout() {
    return (
        <article className="flex flex-col p-[3.125rem] shadow-2xl w-[60%] rounded-[1.25rem]">
            <h2 className="font-semibold text-[2rem] leading-[3.375rem] text-[#252641]">Checkout</h2>
            <span className="font-semibold text-[1rem] leading-[1.688rem] text-[#5B5B5B] mt-[0.75rem]">Cart Type</span>
            <div className="flex gap-x-[1.6rem] mt-[2.2rem] mb-[5rem]">
                <Image className="w-[120px] border-2 h-[60px] object-cover" src={"https://s3-alpha-sig.figma.com/img/008b/55b3/54350959de9d71c666d0f2b6c3e74480?Expires=1685318400&Signature=FHx5gIShy~Vv-9BRY2IYx45b-1xYMpVPmiD8cr30qeYvWxEdHrJjONo5J9ilPkrmezTksQaVnEE8I~hFLVCYtHecCK45v89C~fEonVNcw7i9R1krdqz6-1-9ZMKo1e0Poo~8VX~r62j0qtMTe2219-gGWcgjpqDwaqrIfW9fUom4-miO0LDA12ZDrjuUOg9AbmBPGZcBkWZIdyFeHVxHmXAhdUiJ4EkX4UoMyJKGt3ndErXf-bSgEvRest6tRcb8T~XzzvUEUTi3eiU1bD7aYtzl711ya1BhzcRQwUQSAm44FF8zR~xyuEB6bJ1~ATFbbTwmpJPhq5qGG6efVMBbJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                    alt="paypal" width={200} height={100} />
                <Image className="w-[120px] border-2 h-[60px] object-cover" src={"https://s3-alpha-sig.figma.com/img/008b/55b3/54350959de9d71c666d0f2b6c3e74480?Expires=1685318400&Signature=FHx5gIShy~Vv-9BRY2IYx45b-1xYMpVPmiD8cr30qeYvWxEdHrJjONo5J9ilPkrmezTksQaVnEE8I~hFLVCYtHecCK45v89C~fEonVNcw7i9R1krdqz6-1-9ZMKo1e0Poo~8VX~r62j0qtMTe2219-gGWcgjpqDwaqrIfW9fUom4-miO0LDA12ZDrjuUOg9AbmBPGZcBkWZIdyFeHVxHmXAhdUiJ4EkX4UoMyJKGt3ndErXf-bSgEvRest6tRcb8T~XzzvUEUTi3eiU1bD7aYtzl711ya1BhzcRQwUQSAm44FF8zR~xyuEB6bJ1~ATFbbTwmpJPhq5qGG6efVMBbJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                    alt="paypal" width={200} height={100} />
                <Image className="w-[120px] border-2 h-[60px] object-cover" src={"https://s3-alpha-sig.figma.com/img/008b/55b3/54350959de9d71c666d0f2b6c3e74480?Expires=1685318400&Signature=FHx5gIShy~Vv-9BRY2IYx45b-1xYMpVPmiD8cr30qeYvWxEdHrJjONo5J9ilPkrmezTksQaVnEE8I~hFLVCYtHecCK45v89C~fEonVNcw7i9R1krdqz6-1-9ZMKo1e0Poo~8VX~r62j0qtMTe2219-gGWcgjpqDwaqrIfW9fUom4-miO0LDA12ZDrjuUOg9AbmBPGZcBkWZIdyFeHVxHmXAhdUiJ4EkX4UoMyJKGt3ndErXf-bSgEvRest6tRcb8T~XzzvUEUTi3eiU1bD7aYtzl711ya1BhzcRQwUQSAm44FF8zR~xyuEB6bJ1~ATFbbTwmpJPhq5qGG6efVMBbJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                    alt="paypal" width={200} height={100} />
                <Image className="w-[120px] border-2 h-[60px] object-cover" src={"https://s3-alpha-sig.figma.com/img/008b/55b3/54350959de9d71c666d0f2b6c3e74480?Expires=1685318400&Signature=FHx5gIShy~Vv-9BRY2IYx45b-1xYMpVPmiD8cr30qeYvWxEdHrJjONo5J9ilPkrmezTksQaVnEE8I~hFLVCYtHecCK45v89C~fEonVNcw7i9R1krdqz6-1-9ZMKo1e0Poo~8VX~r62j0qtMTe2219-gGWcgjpqDwaqrIfW9fUom4-miO0LDA12ZDrjuUOg9AbmBPGZcBkWZIdyFeHVxHmXAhdUiJ4EkX4UoMyJKGt3ndErXf-bSgEvRest6tRcb8T~XzzvUEUTi3eiU1bD7aYtzl711ya1BhzcRQwUQSAm44FF8zR~xyuEB6bJ1~ATFbbTwmpJPhq5qGG6efVMBbJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
                    alt="paypal" width={200} height={50} />
            </div>

            <div className="flex flex-col gap-y-[1.8rem]">
                <label htmlFor="">
                    <span className="block font-bold text-[1rem] leading-[1.688rem] text-[#5B5B5B] mb-[0.625rem]">Name on Card</span>
                    <input type="text" placeholder="Enter name on Card"
                        className="font-normal text-[1rem] leading-[1.688rem] py-[1.063rem] px-[1.25rem] border-[1px] border-[#D9D9D9] rounded-[0.625rem] w-[100%]"
                    />
                </label>
                <label htmlFor="">
                    <span className="block font-bold text-[1rem] leading-[1.688rem] text-[#5B5B5B] mb-[0.625rem]">Card Number</span>
                    <input type="text" placeholder="Enter Card Number"
                        className="font-normal text-[1rem] leading-[1.688rem] py-[1.063rem] px-[1.25rem] border-[1px] border-[#D9D9D9] rounded-[0.625rem]  w-[100%]"
                    />
                </label>

                <div className="flex justify-between gap-x-[2.25rem]">
                    <label className="inline-block w-[50%]" htmlFor="">
                        <span className="block font-bold text-[1rem] leading-[1.688rem] text-[#5B5B5B] mb-[0.625rem]">Expiration Date ( MM/YY )</span>
                        <input type="text" placeholder="Enter Expiration Date"
                            className="font-normal text-[1rem] leading-[1.688rem] py-[1.063rem] px-[1.25rem] border-[1px] border-[#D9D9D9] rounded-[0.625rem] w-[100%]"
                        />
                    </label>
                    <label className="inline-block w-[50%]" htmlFor="">
                        <span className="block font-bold text-[1rem] leading-[1.688rem] text-[#5B5B5B] mb-[0.625rem]">CVC</span>
                        <input type="text" placeholder="Enter CVC"
                            className="font-normal text-[1rem] leading-[1.688rem] py-[1.063rem] px-[1.25rem] border-[1px] border-[#D9D9D9] rounded-[0.625rem] w-[100%]"
                        />
                    </label>
                </div>

            </div>
                <label className="block flex gap-x-[0.4rem] mb-[3.125rem] my-[0.6rem]" htmlFor="" >
                    <input  type="checkbox" name="" id="" />
                    <span className="font-normal text-[1rem] leading-[1.688rem] text-[#9D9B9B]">Save my information for faster checkout</span>
                </label>

            <button className="font-normal text-[1.625rem] leading-[2.438rem]  text-[#FFFFFF] text-center bg-[#222129] w-[100&] rounded-[0.75rem] py-[1.125rem]">Confirm Payment</button>
        </article>
    )
}