import React from 'react';
import './inputImg.css';

import { useState } from 'react';



export default function Cadastra(props) {
    const [imagePreview, setImagePreview] = useState('');


    const handleImageChange = (event) => {
        const file = event.target.files[0];
        props.setImagens((prevImagens) => ({
            ...prevImagens,
            [props.com]: file,
        }));

        const reader = new FileReader();

        reader.onloadend = () => {
            setImagePreview(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className="capaDoLivro">
                <div id='fileBoxC'>
                    <label htmlFor={"editFile"+props.com} className='labelBt'>
                        <div className="custom-input">
                            {imagePreview && <img src={imagePreview} style={{ width: '100%', height: '100%' }} />}
                        </div>
                    </label>
                </div>

                <input type="file" id={"editFile"+props.com} name="editFile" onChange={handleImageChange} />
            </div>
        </>
    );
}
