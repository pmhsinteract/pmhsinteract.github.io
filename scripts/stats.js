const SHEET_ID = '10Khtfbc9ZEcLBH04-xTK-fNqxIaxTVBwHy2C8qq_7ZM';
const SHEET_NAME = 'Total Volunteer Hours';
const SHEET_URL = `https://opensheet.elk.sh/${SHEET_ID}/${encodeURIComponent(SHEET_NAME)}`;

async function fetchSheetData() {
    try {
        const res = await fetch(SHEET_URL);
        const json = await res.json();
        console.log("Fetched JSON:", json);
        return json;
    } catch (err) {
        document.getElementById('result').textContent = 'Failed to load data.';
        return null;
    }
}

async function searchStudent() {
    const input = document.getElementById('studentIdInput').value.trim();
    const resultDiv = document.getElementById('result');
    const bar = document.getElementById('loadingBar');
    const container = document.getElementById('loadingBarContainer');

    resultDiv.innerHTML = '';
    if (!input) {
        resultDiv.textContent = 'Please enter your Student ID.';
        return;
    }

    // Reset and show loading bar
    bar.style.width = '0%';
    container.style.display = 'block';

    let progress = 0;
    const interval = setInterval(() => {
        progress += 2;
        bar.style.width = `${progress}%`;
        if (progress >= 90) clearInterval(interval); // Stop at 90% for realism
    }, 20);

    const data = await fetchSheetData();
    clearInterval(interval);
    bar.style.width = '100%';

    setTimeout(() => {
        container.style.display = 'none';
        if (!data) return;

        if (!Array.isArray(data)) {
            resultDiv.textContent = 'Unexpected data format received from the server.';
            return;
        }

        const student = data.find(row => row['ID'] === input);

        if (student) {
            resultDiv.innerHTML = `
                <p><strong>First Name:</strong> ${student['First'] || 'N/A'}</p>
                <p><strong>Last Name:</strong> ${student['Last'] || 'N/A'}</p>
                <p><strong>Student ID:</strong> ${student['ID'] || 'N/A'}</p>
                <p><strong>Service Hours:</strong> ${student['Total Hours'] || 'N/A'}</p>
            `;
        } else {
            resultDiv.textContent = 'Student ID not found.';
        }
    }, 300); // Wait a bit to finish the 100% animation
}
