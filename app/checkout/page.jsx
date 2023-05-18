import Checkout from "@/components/Checkout";
import Summary from "@/components/Summary";

export default function CheckOutPage() {
    return (
        <main>
            <section className="flex justify-around items-start px-[6.25rem] py-[2rem]">
                <Checkout/>
                <Summary/>
            </section>
        </main>

    )
}