document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable');
    const dropzones = document.querySelectorAll('.dropzone');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text/plain', e.target.id);
        });
    });

    dropzones.forEach(dropzone => {
        dropzone.addEventListener('dragover', e => {
            e.preventDefault(); // Necessary for the drop event to fire.
        });

        dropzone.addEventListener('drop', e => {
            e.preventDefault();
            const id = e.dataTransfer.getData('text/plain');
            const draggable = document.getElementById(id);
            dropzone.appendChild(draggable);
            draggable.style.width = '90px'; // Adjust size upon drop
        });
    });
});