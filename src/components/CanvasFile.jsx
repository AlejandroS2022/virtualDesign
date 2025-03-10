import { useState, useEffect, useRef } from 'react';
import '@fontsource-variable/open-sans';
import '@fontsource-variable/montserrat';
import '@fontsource-variable/raleway';
import '../styles/canvas-file.css';

const CanvasFile = () => {
    const [data, setData] = useState([]);
    let transparency      = 0.8;
    let hasGrid           = true;
    let gridSize          = 12;
    let newChanges        = false;
    let currentSelection  = {};

    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);

    const getData = () => {
        const urlSample = "./sample-data.json";
        const url = "./data.json";

        const headers = new Headers();
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
        headers.append("Access-Control-Max-Age", "3600");
        headers.append("Access-Control-Allow-Headers", "x-requested-with, content-type");

        fetch(urlSample, {
            method: 'GET',
            headers: headers,
        })
        .then(function(response){
          return response.json();
        })
        .then(function(json) {
          setData(json);
        });
    }

    const changeTextParam = (action, key, value) => {
        const newData = data.texts[key];
        
        switch (action) {
            case "font":
                newData.font = value;
                setData({ ...data, texts: [...data.texts.slice(0, data.texts.length)] });
                break;
            case "fontSize":
                newData.fontSize = value;
                setData({ ...data, texts: [...data.texts.slice(0, data.texts.length)] });
                break;
            case "positionX":
                newData.x = value;
                setData({ ...data, texts: [...data.texts.slice(0, data.texts.length)] });
                break;
            case "positionY":
                newData.y = value;
                setData({ ...data, texts: [...data.texts.slice(0, data.texts.length)] });
                break;
        }
    }

    const convertCanvas = () => {
        setCanvas(canvasRef.current.toDataURL('image/png'));
    };

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.height = 1036;
        canvas.width  = 478;

        const context = canvas.getContext("2d");
        const img = new Image();

        img.onload = function() {
            context.drawImage(img, 0, 0);

            data.texts.map((textData) => {
                let fontSize = textData.fontSize ? textData.fontSize+"px" : "18px";
                let font = textData.font ? textData.font : "Times New Roman";
                
                context.font = fontSize+" "+font;
                context.fillStyle = "black";
                context.fillText(textData.text, textData.x, textData.y);
            })
        }

        img.setAttribute("src", data.image);
    }, [data])

    return (
        <>
            <div className='canvas-section'>
                <div className='canvas-options'>
                    { data.texts && data.texts.map((textData, key) => {
                        var fontSize = textData.fontSize || 18;
                        return (
                            <div className='canvas-text'>
                                <p>{textData.text}</p>
                                <div className='canvas-text-params'>
                                    <select onChange={(e) => changeTextParam("font", key, e.target.value)}>
                                        <option className='font-times' value='Times New Roman'>Times New Roman</option>
                                        <option className='font-arial' value='Arial'>Arial</option>
                                        <option className='font-openSans' value='Open Sans Variable'>Open Sans</option>
                                        <option className='font-montserrat' value='Montserrat Variable'>Montserrat</option>
                                        <option className='font-raleway' value='Raleway Variable'>Raleway</option>
                                    </select>
                                    <input type='number' placeholder='Font size' value={fontSize} onChange={(e) => changeTextParam("fontSize", key, e.target.value)} />
                                    <input type='number' placeholder='Position X' value={textData.x} onChange={(e) => changeTextParam("positionX", key, e.target.value)} />
                                    <input type='number' placeholder='Position Y' value={textData.y} onChange={(e) => changeTextParam("positionY", key, e.target.value)} />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <canvas ref={canvasRef} />
                </div>
            </div>

            <button onClick={convertCanvas}>Convert to Base 64 Image</button>
            {canvas && <img src={canvas} alt="Base 64 Image" />}
        </>
    )
}

export default CanvasFile;