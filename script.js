// Initialize the gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
});

// new
function toggleImages(section, button) {
    const container = document.getElementById(`${section}-gallery`);
    if (!container) return;
            
    const hiddenImages = container.querySelectorAll('.extra');
    const allHidden = Array.from(hiddenImages).every(img => img.style.display === 'none' || !img.style.display);
    
    hiddenImages.forEach(img => {
        img.style.display = allHidden ? 'block' : 'none';
    });
    
    
    if (button) {
        button.textContent = allHidden ? 'View Less' : 'View More';
    }
}

const triggerTabList = document.querySelectorAll('#galleryTabs buttons')
triggerTabList.forEach(triggerEl => {
    const tabTrigger = new Bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', event => {
        event.preventDefault()
        tabTrigger.show()
    })
})