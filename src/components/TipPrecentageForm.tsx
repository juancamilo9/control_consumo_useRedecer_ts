import { OrderActions } from "../reducers/order-reducer"

const tipOptions = [
    {
        id: 'tip-0',
        value: .0,
        label: '0%'
    },
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPrecentageFormProps ={
    tip:number
    dispatch: React.Dispatch<OrderActions>

}

export default function TipPrecentageForm({tip, dispatch }:TipPrecentageFormProps) {
    return (
        <div>
            <h3>Popinas</h3>
            <form action="">
                {tipOptions.map(tipOp => (
                    <div className="flex gap-2" key={tipOp.id}>
                        <label htmlFor={tipOp.id}>{tipOp.label}</label>
                        <input
                            id={tipOp.id}
                            type="radio"
                            value={tipOp.value}
                            name="tip"
                            onChange={ e => dispatch({type:'add-tip', payload:{value:+e.target.value}})}
                            checked={tipOp.value===tip}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
