document.addEventListener('DOMContentLoaded', function() {
    const phoneLinks = document.querySelectorAll('.phone');

    phoneLinks.forEach(phoneLink => {
        let fullPhoneNumber = phoneLink.getAttribute('href').replace('tel:', '');
        let displayedPhoneNumber = fullPhoneNumber.slice(0, -4) + 'xxxx';

        let dynamicContent = phoneLink.querySelector('.dynamic-content');
        dynamicContent.textContent = displayedPhoneNumber;

        let isHidden = true;

        phoneLink.addEventListener('click', function(event) {
            event.preventDefault();

            if (isHidden) {
                dynamicContent.textContent = fullPhoneNumber;
            } else {
                window.location.href = 'tel:' + fullPhoneNumber;
            }

            isHidden = !isHidden;
        });
    });
});
