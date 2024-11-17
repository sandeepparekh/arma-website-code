// JavaScript for modal functionality
const modalOverlay = document.getElementById('modalOverlay');
const openModalButtons = document.querySelectorAll('#open-modal-btn');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelModalBtn = document.getElementById('cancelModalBtn');
const submitBtn = document.getElementById('submitBtn');

// Open modal when any button with the class `open-modal-btn` is clicked
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modalOverlay.style.display = 'block';
    });
});

// Close modal
const closeModal = () => {
    modalOverlay.style.display = 'none';
};

closeModalBtn.addEventListener('click', closeModal);
cancelModalBtn.addEventListener('click', closeModal);

// Close modal on clicking outside
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    alert('This is a UAT site. The form can only be submitted when switched to the production environment.');
    closeModal();
});