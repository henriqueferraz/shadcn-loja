import { ChecoutSteps } from "@/types/checkout-steps"
import { Dispatch, SetStateAction } from "react"

type Props = {
    setStep: Dispatch<SetStateAction<ChecoutSteps>>
}
export const StepAddress = ({ setStep }: Props) => {
    return (
        <div>
            ...
        </div >
    )
}