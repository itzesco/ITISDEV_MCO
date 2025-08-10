// Global variables
let allAppointments = [];
let currentAppointmentId = null;
let branches = [];

// Initialize dashboard when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadDashboardStats();
    loadAppointments();
    loadBranches();
    setDefaultDate();
});

// Set default date to today
function setDefaultDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('dateFilter').value = today;
}

// Load dashboard statistics
async function loadDashboardStats() {
    try {
        const response = await fetch('/api/admin/dashboard/stats');
        const stats = await response.json();
        
        document.getElementById('totalAppointments').textContent = stats.totalAppointments;
        document.getElementById('todayAppointments').textContent = stats.todayAppointments;
        document.getElementById('pendingAppointments').textContent = stats.pendingAppointments;
        document.getElementById('completedAppointments').textContent = stats.completedAppointments;
    } catch (error) {
        console.error('Error loading dashboard stats:', error);
    }
}

// Load all appointments
async function loadAppointments() {
    try {
        const response = await fetch('/api/admin/appointments');
        allAppointments = await response.json();
        displayAppointments(allAppointments);
    } catch (error) {
        console.error('Error loading appointments:', error);
        showError('Failed to load appointments');
    }
}

// Load branches for filter
async function loadBranches() {
    try {
        const response = await fetch('/api/branches');
        branches = await response.json();
        
        const branchFilter = document.getElementById('branchFilter');
        branches.forEach(branch => {
            const option = document.createElement('option');
            option.value = branch.name;
            option.textContent = branch.name;
            branchFilter.appendChild(option);
        });
    } catch (error) {
        console.error('Error loading branches:', error);
    }
}

// Display appointments in table
function displayAppointments(appointments) {
    const tableContainer = document.getElementById('appointmentsTable');
    
    if (appointments.length === 0) {
        tableContainer.innerHTML = '<div class="no-appointments">No appointments found</div>';
        return;
    }
    
    let tableHTML = `
        <table class="appointments-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Customer</th>
                    <th>Service</th>
                    <th>Branch</th>
                    <th>Status</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    appointments.forEach(appointment => {
        const statusClass = `status-${appointment.status}`;
        const formattedDate = formatDate(appointment.appointmentDate);
        const formattedPrice = `₱${appointment.totalPrice || 0}`;
        
        tableHTML += `
            <tr>
                <td>${formattedDate}</td>
                <td>${appointment.appointmentTime}</td>
                <td>
                    <div><strong>${appointment.customerName}</strong></div>
                    <div style="font-size: 0.8rem; color: #718096;">
                        ${appointment.customerEmail}<br>
                        ${appointment.customerPhone}
                    </div>
                </td>
                <td>${appointment.serviceName}</td>
                <td>${appointment.branchName}</td>
                <td><span class="status-badge ${statusClass}">${appointment.status}</span></td>
                <td>${formattedPrice}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-primary btn-sm" onclick="editTime('${appointment._id}', '${appointment.appointmentTime}')">
                            <i class="fas fa-clock"></i> Time
                        </button>
                        <button class="btn btn-secondary btn-sm" onclick="changeStatus('${appointment._id}', '${appointment.status}')">
                            <i class="fas fa-edit"></i> Status
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="cancelAppointment('${appointment._id}')">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    tableHTML += '</tbody></table>';
    tableContainer.innerHTML = tableHTML;
}

// Filter appointments based on selected criteria
function filterAppointments() {
    const dateFilter = document.getElementById('dateFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;
    const branchFilter = document.getElementById('branchFilter').value;
    
    let filteredAppointments = allAppointments;
    
    if (dateFilter) {
        filteredAppointments = filteredAppointments.filter(app => app.appointmentDate === dateFilter);
    }
    
    if (statusFilter) {
        filteredAppointments = filteredAppointments.filter(app => app.status === statusFilter);
    }
    
    if (branchFilter) {
        filteredAppointments = filteredAppointments.filter(app => app.branchName === branchFilter);
    }
    
    displayAppointments(filteredAppointments);
}

// Reset all filters
function resetFilters() {
    document.getElementById('dateFilter').value = '';
    document.getElementById('statusFilter').value = '';
    document.getElementById('branchFilter').value = '';
    displayAppointments(allAppointments);
}

// Refresh appointments
function refreshAppointments() {
    loadAppointments();
    loadDashboardStats();
}

// Edit appointment time
function editTime(appointmentId, currentTime) {
    currentAppointmentId = appointmentId;
    document.getElementById('newTime').value = currentTime;
    document.getElementById('editTimeModal').style.display = 'block';
}

// Save new appointment time
async function saveNewTime() {
    const newTime = document.getElementById('newTime').value;
    
    if (!newTime) {
        showError('Please select a new time');
        return;
    }
    
    try {
        const response = await fetch(`/api/admin/appointments/${currentAppointmentId}/time`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ appointmentTime: newTime })
        });
        
        if (response.ok) {
            showSuccess('Appointment time updated successfully');
            closeModal('editTimeModal');
            refreshAppointments();
        } else {
            const error = await response.json();
            showError(error.message || 'Failed to update appointment time');
        }
    } catch (error) {
        console.error('Error updating appointment time:', error);
        showError('Failed to update appointment time');
    }
}

// Change appointment status
function changeStatus(appointmentId, currentStatus) {
    currentAppointmentId = appointmentId;
    document.getElementById('newStatus').value = currentStatus;
    document.getElementById('changeStatusModal').style.display = 'block';
}

// Save new appointment status
async function saveNewStatus() {
    const newStatus = document.getElementById('newStatus').value;
    
    if (!newStatus) {
        showError('Please select a new status');
        return;
    }
    
    try {
        const response = await fetch(`/api/admin/appointments/${currentAppointmentId}/status`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: newStatus })
        });
        
        if (response.ok) {
            showSuccess('Appointment status updated successfully');
            closeModal('changeStatusModal');
            refreshAppointments();
        } else {
            const error = await response.json();
            showError(error.message || 'Failed to update appointment status');
        }
    } catch (error) {
        console.error('Error updating appointment status:', error);
        showError('Failed to update appointment status');
    }
}

// Cancel appointment
async function cancelAppointment(appointmentId) {
    if (!confirm('Are you sure you want to cancel this appointment? This action cannot be undone.')) {
        return;
    }
    
    try {
        const response = await fetch(`/api/admin/appointments/${appointmentId}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            showSuccess('Appointment cancelled successfully');
            refreshAppointments();
        } else {
            const error = await response.json();
            showError(error.message || 'Failed to cancel appointment');
        }
    } catch (error) {
        console.error('Error cancelling appointment:', error);
        showError('Failed to cancel appointment');
    }
}

// Close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    currentAppointmentId = null;
}

// Close modal when clicking outside
window.onclick = function(event) {
    const editModal = document.getElementById('editTimeModal');
    const statusModal = document.getElementById('changeStatusModal');
    
    if (event.target === editModal) {
        closeModal('editTimeModal');
    }
    if (event.target === statusModal) {
        closeModal('changeStatusModal');
    }
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Show success message
function showSuccess(message) {
    showNotification(message, 'success');
}

// Show error message
function showError(message) {
    showNotification(message, 'error');
}

// Show notification
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    if (type === 'success') {
        notification.style.background = '#38a169';
    } else {
        notification.style.background = '#e53e3e';
    }
    
    notification.textContent = message;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Auto-refresh appointments every 30 seconds
setInterval(() => {
    loadDashboardStats();
}, 30000);
