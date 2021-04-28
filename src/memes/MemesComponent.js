import React from 'react'

function MemesComponent(props) {
    return (
        <div>
            <form className="meme-form" onSubmit={props.hundleSubmit}>
                <input
                    type="text"
                    name="topText"
                    placeholder="top text"
                    value={props.state.topText}
                    onChange={props.hundleChange} />
                <input
                    type="text"
                    name="bottomText"
                    placeholder="bottom text" 
                    value={props.state.bottomText} 
                    onChange={props.hundleChange}/>
                <button>Generate</button>
            </form>
            <div className="meme">
                <img  src={props.state.img} alt=""/>
                <h2 className="top">{props.state.topText}</h2>
                <h2 className="bottom">{props.state.bottomText} </h2>
            </div>
        </div>
    )
}
export default MemesComponent