document.addEventListener('DOMContentLoaded', function() {
    const rentOwnSelect = document.getElementById('rentOwn');
    const landlordPermissionDiv = document.getElementById('landlordPermissionDiv');
    const otherPetsSelect = document.getElementById('otherPets');
    const otherPetsDetailsDiv = document.getElementById('otherPetsDetailsDiv');
    const haveVetSelect = document.getElementById('haveVet');
    const vetDetailsDiv = document.getElementById('vetDetailsDiv');

    rentOwnSelect.addEventListener('change', function() {
        if (this.value === 'rent') {
            landlordPermissionDiv.style.display = 'block';
        } else {
            landlordPermissionDiv.style.display = 'none';
        }
    });

    otherPetsSelect.addEventListener('change', function() {
        if (this.value === 'yes') {
            otherPetsDetailsDiv.style.display = 'block';
        } else {
            otherPetsDetailsDiv.style.display = 'none';
        }
    });

    haveVetSelect.addEventListener('change', function() {
        if (this.value === 'yes') {
            vetDetailsDiv.style.display = 'block';
        } else {
            vetDetailsDiv.style.display = 'none';
        }
    });
});
