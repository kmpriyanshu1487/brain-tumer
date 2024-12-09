import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="hero">
            <div className="image-display">
                {imagePreview ? <img src={imagePreview} alt="Uploaded Preview" className="preview-image" /> : 'No image uploaded'}
            </div>
            <div className="upload-image">
                <input
                    type="file"
                    onChange={handleImageUpload}
                    accept="image/*"
                />
                <button className="hero-btn">Upload</button>
            </div>
        </div>
    );
};

export default Hero;
