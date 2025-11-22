import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import Hero from './components/Hero';
import Details from './components/Details';
import CountdownTimer from './components/Countdown';
import RSVP from './components/RSVP';
import QRCodeSection from './components/QRCodeSection';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';

function App() {
    useEffect(() => {
        // Initial confetti burst
        const duration = 3000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#87ceeb', '#f4a261', '#2a9d8f']
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#87ceeb', '#f4a261', '#2a9d8f']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }, []);

    return (
        <div className="App">
            <AudioPlayer />
            <Hero />
            <Details />
            <CountdownTimer />
            <RSVP />
            <QRCodeSection />
            <Footer />
        </div>
    );
}

export default App;
