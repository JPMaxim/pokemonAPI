export const Form = ({handleSubmit, inputName, setInputName}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <div id="inputLabel">ENTER A POKEMON NAME:</div>
                    <input
                        id="textInput"
                        type="text"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                    />
                </label>
                <input id="inputSubmit" type="submit"/>
            </form>
        </div>
    )
}