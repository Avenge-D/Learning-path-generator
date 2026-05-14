// Avenge-R Dashboard - Client Side Script
// This script simulates live data for the UI preview.

const MOCK_TASKS = [
  { id: 'a3f1b2c4', name: 'send_email', status: 'COMPLETED', retries: 0 },
  { id: '9e7d1f0a', name: 'resize_image', status: 'RUNNING', retries: 1 },
  { id: 'c2b4e6f8', name: 'process_payment', status: 'PENDING', retries: 0 },
  { id: '1d3e5a7c', name: 'generate_report', status: 'FAILED', retries: 3 }
  ];

function updateStats() {
      document.getElementById('stat-pending').innerText = Math.floor(Math.random() * 10);
      document.getElementById('stat-running').innerText = Math.floor(Math.random() * 5);
      document.getElementById('stat-completed').innerText = 1240 + Math.floor(Math.random() * 50);
      document.getElementById('stat-failed').innerText = Math.floor(Math.random() * 3);
      document.getElementById('stat-dlq').innerText = 0;
}

function updateQueues() {
      document.getElementById('queue-ready').innerText = Math.floor(Math.random() * 15);
      document.getElementById('queue-scheduled').innerText = Math.floor(Math.random() * 10);
      document.getElementById('queue-dlq-redis').innerText = 0;
}

// Initial call
updateStats();
updateQueues();

// Update every 3 seconds
setInterval(() => {
      updateStats();
      updateQueues();
}, 3000);
