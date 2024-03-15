import { ChecoutSteps } from "@/types/checkout-steps"
import { Dispatch, SetStateAction } from "react"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCheckoutStore } from "@/stores/checkout-store"
import { Form } from "../ui/form"

const formSchema = z.object({
    name: z.string().min(2, 'Preencha seu nome')
})

type Props = {
    setStep: Dispatch<SetStateAction<ChecoutSteps>>
}
export const StepUser = ({ setStep }: Props) => {
    const { name, setName } = useCheckoutStore(state => state)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setName(values.name)
        setStep('address')
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">

            </form>
        </Form>
    )
}