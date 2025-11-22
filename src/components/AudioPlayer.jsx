import React, { useState, useRef } from 'react';
import { Music, Pause } from 'lucide-react';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(true); // Autoplay if possible
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 100
        }}>
            <audio
                ref={audioRef}
                autoPlay
                loop
                src="https://cdn.pixabay.com/download/audio/2022/07/26/audio_2a079c67a9.mp3?filename=celebration-113985.mp3"
            />
            <button
                onClick={togglePlay}
                style={{
                    background: '#f4a261',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                }}
            >
                {isPlaying ? <Pause size={24} /> : <Music size={24} />}
            </button>
        </div>
    );
};

export default AudioPlayer;
