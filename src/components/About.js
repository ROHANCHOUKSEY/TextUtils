import React from "react";

const About = (props) => {

  // const [mystyle, setMystyle] = useState( {color: 'black', backgroundColor: 'white'});

  let mystyle = {
    color:props.mode === '#111439' ? 'white' : 'black',
    backgroundColor: props.mode === '#111439' ?'#111439' : 'white',
    fontFamily: 'serif',
    border:'none'
  }

   
  return (
    <div className="container" style={mystyle}>
      <h1>About Us</h1> 
      <div className="About_details" style={{fontFamily:'serif'}}>
      <strong>TextUtils</strong> is a web-based text utility application that offers a range of text manipulation and analysis tools. With TextUtils, users can easily convert text to Uppercase and Lowercase, Copy Sentences,Clear the Text,Remove Special Character, Reverse Text,count words and Characters,  Remove extra spaces, and even estimate how many minutes it takes to read a given text.      </div>
      <div className="accordion" style={{marginTop: '16px'}} id="accordionExample">
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse "
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body border-${props.mode==='#111439'?'2px solid light':'none'}`} style={mystyle}>
              Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reportes the number of words and characters. Thus it is suitable for writing text with word/ character limit. 
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
            This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters facebook, blog, books, excel document, pdf document, essays, ets.
            </div>
          </div>
        </div>
      </div>   
    </div>
  );
};

export default About;
