const openButtons = document.querySelectorAll(".open-btn");

openButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal");
        const targetModal = document.getElementById(modalId);

        // Open the targeted modal
        if (targetModal) {
            targetModal.showModal();
            document.body.style.overflow = "hidden";
        }
    });
});

// Close the Modal if the user clicks the modal content box
const allModals = document.querySelectorAll("dialog");
allModals.forEach(modal => {
    modal.addEventListener("click", (e) => {
        const rect = modal.getBoundingClientRect();
        const isInDialog = (
            e.clientX >= rect.left && 
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
        );
        if (!isInDialog) {
            modal.close();
        }
    });

    modal.addEventListener("close", () => {
        document.body.style.overflow = "";
    });
});