const tipOptions = [
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
    setTip: React.Dispatch<React.SetStateAction<number>>

}

export default function TipPrecentageForm({ setTip }:TipPrecentageFormProps) {
    return (
        <div>
            <h3>Popinas</h3>
            <form action="">
                {tipOptions.map(tip => (
                    <div className="flex gap-2" key={tip.id}>
                        <label htmlFor={tip.id}>{tip.label}</label>
                        <input
                            id={tip.id}
                            type="radio"
                            value={tip.value}
                            name="tip"
                            onChange={ e => setTip(+e.target.value)}
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
