export const Form = ({handleSubmit, inputName, setInputName}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter a pokemon name:
                    <input
                        type="text"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                    />
                </label>
                <input type="submit"/>
            </form>
        </div>
    )
}