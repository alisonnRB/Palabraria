import React from 'react';
import './inputImg.css';

import { useState, useEffect } from 'react';
import x from '../../xis.png';

export default function Cadastra(props) {
    const [imagePreview, setImagePreview] = useState('');
    const [dell, setDell] = useState(false);

    useEffect(() => {
        if (props.view != '' && props.view != undefined) {
            const img = 'http://192.168.255.56/palabraria/img/' + props.view;
            setImagePreview(img);
            setDell(true);

            props.setAtt((prevImagens) => ({
                ...prevImagens,
                [props.com]: true,
            }));
        }
    }, [props.view]);


    const deletee = () => {
        if (dell) {
            return <img src={x} id='delete' onClick={handleDelete} />;
        }
    };

    const handleDelete = () => {
        props.setImagens((prevImagens) => ({
            ...prevImagens,
            [props.com]: null,
        }));

        props.setAtt((prevImagens) => ({
            ...prevImagens,
            [props.com]: false,
        }));

        setImagePreview('');
        setDell(false);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        props.setImagens((prevImagens) => ({
            ...prevImagens,
            [props.com]: file,
        }));
        if(props.com){
            props.setAtt((prevImagens) => ({
                ...prevImagens,
                [props.com]: false,
            }));
        }


        const reader = new FileReader();

        reader.onloadend = () => {
            setImagePreview(reader.result);
            setDell(true);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className="capaDoLivro">
                <div id='fileBoxC'>
                    <label htmlFor={"editFile" + props.com} className='labelBt'>
                        <div className="custom-input">
                            {imagePreview && <img src={imagePreview} style={{ width: '100%', height: '100%', borderRadius: '100%' }} />}
                        </div>
                    </label>
                </div>
                {deletee()}
                <input type="file" id={"editFile" + props.com} name="editFile" onChange={handleImageChange} />
            </div>
        </>
    );
}
