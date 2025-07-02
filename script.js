function calculateExposure() {
    const tools = [
        { id: 'toolA', magnitude: 3.0 },
        { id: 'toolB', magnitude: 4.5 },
        { id: 'toolC', magnitude: 2.0 }
        // Add more tools as needed
    ];

    let totalExposure = 0;

    tools.forEach(tool => {
        const duration = parseFloat(document.getElementById(tool.id).value) || 0;
        totalExposure += tool.magnitude * Math.sqrt(duration);
    });

    let resultText = `Total Daily Exposure: ${totalExposure.toFixed(2)} m/s²`;

    if (totalExposure > 5) {
        resultText += " - Exceeds ELV! Immediate action required.";
    } else if (totalExposure > 2.5) {
        resultText += " - Exceeds EAV. Take action to reduce exposure.";
    } else {
        resultText += " - Within safe limits.";
    }

    document.getElementById('result').innerText = resultText;
}
