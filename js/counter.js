document.querySelectorAll('.plus').forEach(plusButton => {
    plusButton.addEventListener('click', () => {
        const counter = plusButton.closest('.counter');
        const numInput = counter.querySelector('.num');
        const minusButton = counter.querySelector('.minus');

        // تحديث القيمة
        let currentValue = parseInt(numInput.dataset.foodIdOrders, 10) || 0;
        currentValue++;
        numInput.dataset.foodIdOrders = currentValue;
        numInput.value = currentValue;

        // إظهار زر "-" إذا كانت القيمة أكبر من 0
        if (currentValue > 0) {
            minusButton.style.display = 'block';
            numInput.style.display = 'block';
            plusButton.textContent = "+" 
        }
        else {
            plusButton.textContent = "اضف الي السلة" 
        }
    });
});

document.querySelectorAll('.minus').forEach(minusButton => {
    minusButton.addEventListener('click', () => {
        const counter = minusButton.closest('.counter');
        const numInput = counter.querySelector('.num');
        const plusButton = counter.querySelector('.plus');

        // تحديث القيمة
        let currentValue = parseInt(numInput.dataset.foodIdOrders, 10) || 0;
        if (currentValue > 0) {
            currentValue--;
            numInput.dataset.foodIdOrders = currentValue;
            numInput.value = currentValue;

            // إخفاء زر "-" إذا وصلت القيمة إلى 0
            if (currentValue === 0) {
                minusButton.style.display = 'none';
                numInput.style.display = 'none';
                plusButton.textContent = "اضف الي السلة" 
            }
        }
    });
});

document.querySelectorAll('.num').forEach(numInput => {
    // استمع لحدث input وحدث Enter
    numInput.addEventListener('input', handleInputChange);
    numInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            handleInputChange(e);
        }
    });

    function handleInputChange(event) {
        // تحديث قيمة dataset
        let currentValue = parseInt(numInput.value, 10) || 0; // قراءة القيمة من input
        numInput.dataset.foodIdOrders = currentValue;

        // إظهار أو إخفاء زر "-" بناءً على القيمة
        const minusButton = numInput.previousElementSibling; // افتراض أن الزر "-" هو العنصر السابق
        if (currentValue === 0) {
            minusButton.style.display = 'none';
            numInput.style.display = 'none';
        } else {
            minusButton.style.display = 'inline-block'; // إظهار الزر "-" إذا كانت القيمة أكبر من 0
            numInput.style.display = 'inline-block';
        }
    }
});

