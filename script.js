    const trackButton = document.getElementById('trackButton');
    let isRecording = false;

    function startRecording() {
        console.log("startRecording");
        isRecording = true;
        trackButton.textContent = 'Recording...';

        // Change the button color to red
        trackButton.style.backgroundColor = '#f44336'; // Red

        // Pulsing effect using setInterval
        let scale = 1;
        const interval = setInterval(() => {
            scale = scale === 1 ? 1.05 : 1; // Toggle scale
            trackButton.style.transform = `scale(${scale})`;
        }, 300);

        // Store the interval ID to clear it later
        trackButton.dataset.intervalId = interval;
    }

    function stopRecording() {
        isRecording = false;
        trackButton.textContent = 'Record';

        // Reset button style
        trackButton.style.backgroundColor = '#4CAF50'; // Green
        trackButton.style.transform = 'scale(1)'; // Reset scale

        // Clear the pulsing effect
        clearInterval(trackButton.dataset.intervalId);
    }

    trackButton.addEventListener('click', () => {
        if (!isRecording) {
            startRecording();
        } else {
            stopRecording();
        }
    });