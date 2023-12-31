import React, {useState} from 'react'

const UtileForm = (props) => {

    const handleUppercase = () => {
        console.log("text change" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Uppercase is Enable", "success");
    
    }

    const handleLowercase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Lowercase is Enable", "success");
    }

    const handleCleartext = () => {
        setText(" ");
        props.showAlert("Clear Chat", "success");
    }

    const handleChange = (event) => {
        console.log("change"); 
        setText(event.target.value);
    }

    const handeCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleSpecialCharacter = () => {
    
        const specialCharsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+/g;

        const newText = text.replace(specialCharsRegex, '');
        setText(newText);

        props.showAlert("Special Characters Removed", "success");
    }

    const handleReverse = () => {
        const reversedText = text.split('').reverse().join('');
        setText(reversedText);
    
        props.showAlert("Text Reversed", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState(" ");

    return(
        <>    
        <div className="mb-3 my-4">
            <h2 className={`text-${props.mode === '#111439'?'light':props.mode === 'danger'?'light':props.mode === 'primary' ? 'light' : 'dark'} my-3`} style={{fontFamily:'auto'}}>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <div className="button-container">   
            <div className="button">
                <button className={`btn btn-primary border bg-${props.mode==='danger'?'danger':'primary'} my-1`} onClick={handleUppercase}>Convert To UpperCase</button>
                <button className={`btn btn-primary border bg-${props.mode==='danger'?'danger':'primary'} my-1`} onClick={handleLowercase}>Convert To LowerCase</button>
                <button className={`btn btn-primary border bg-${props.mode==='danger'?'danger':'primary'} my-1`}  onClick={handleCleartext}>Clear Text</button>
                <button className={`btn btn-primary border bg-${props.mode==='danger'?'danger':'primary'} my-1`}  onClick={handeCopy}>Copy text</button>
                <button className={`btn btn-primary border bg-${props.mode==='danger'?'danger':'primary'} my-1`}  onClick={handleSpecialCharacter}>Remove Special Character</button>
                <button className={`btn btn-primary border bg-${props.mode==='danger'?'danger':'primary'} my-1`}  onClick={handleReverse}>Reverse Text</button>
                <button className={`btn btn-primary border bg-${props.mode==='danger'?'danger':'primary'} my-1`}  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            </div>
            
        </div>  

        <div className="container my-4">
            <h1 className={`text-${props.mode === '#111439'?'light':props.mode === 'danger'?'light':props.mode === 'primary' ? 'light' : 'dark'}`} style={{fontFamily:'auto'}}>Your Text Summery</h1>
            <p className={`text-${props.mode === '#111439'?'light':props.mode === 'danger'?'light':props.mode === 'primary' ? 'light' : 'dark'}`} style={{fontFamily:'auto'}}>{text.split(" ").filter((element) => {return element.length !== 0}).length} Words And {text.length} Character</p>
            <p className={`text-${props.mode === '#111439'?'light':props.mode === 'danger'?'light':props.mode === 'primary' ? 'light' : 'dark'}`} style={{fontFamily:'auto'}}>{0.008 * text.split(/\s+/).filter((element) => {return element.length !== 0}).length}Minutes To Read</p>
            <h2 className={`text-${props.mode === '#111439'?'light':props.mode === 'danger'?'light':props.mode === 'primary' ? 'light' : 'dark'}`}style={{fontFamily:'auto'}}>Preview</h2>
            <p className={`text-${props.mode === '#111439'?'light':props.mode === 'danger'?'light':props.mode === 'primary' ? 'light' : 'dark'}`}style={{fontFamily:'auto'}}>{text.length>0?text:"Enter something in the textbox above to preview it here" }</p>
        </div>

        </>    
    )
};

export default UtileForm





