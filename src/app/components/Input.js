import { useState } from "react";

export default function Input({ texto, submitValue, pHolder, valueLimit }) {

    const [fpotencia, setFpotencia] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = e => {
        setFpotencia(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (fpotencia === '') {
            setError('Name must be filled out');
        } else {
            console.log('Form submitted:', fpotencia);
            setFpotencia('');
            setError('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                <label className="font-semibold" name="fpotencia" onChange={handleInputChange}>Potência</label> <br />
                <div className="flex mb-6">
                    <input name="watts" type="text " placeholder={pHolder} className="w-24 h-10 flex-1 px-3 py-2 border-l-2 border-y-2 border-sky-950" />
                    <span className="h-10 flex-none px-3 py-2 bg-opacity-10 bg-gray-400 text-gray-600 rounded-r border-2 border-sky-950">{texto}</span>
                </div>
                <input type="submit" value={submitValue} />
            </form>
            <p className="m-10 font-semibold">
                <span className="text-red-500">! </span>
                {valueLimit}
            </p>
        </div>

    )
}