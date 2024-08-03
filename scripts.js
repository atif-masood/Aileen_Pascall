// // scripts.js
// document.addEventListener('DOMContentLoaded', () => {
//     const vehicleTypeSelect = document.getElementById('vehicleType');
//     const vehicleNameSelect = document.getElementById('vehicleName');

//     const vehicleOptions = {
//         '7-seats': ['Inova 2022', 'Xpander', 'Grand Livina'],
//         '16-seats': ['Elf', 'Isuzu NKR'],
//         '18-seats': ['Hino RK8', 'Toyota Coaster'],
//         '25-seats': ['Hino RM', 'Mercedes-Benz Sprinter'],
//         '45-seats': ['Mercedes-Benz O500', 'Volvo B7R']
//     };

//     vehicleTypeSelect.addEventListener('change', () => {
//         const selectedType = vehicleTypeSelect.value;
//         const names = vehicleOptions[selectedType] || [];
//         vehicleNameSelect.innerHTML = '<option value="">Sélectionnez un véhicule</option>';

//         names.forEach(name => {
//             const option = document.createElement('option');
//             option.value = name;
//             option.textContent = name;
//             vehicleNameSelect.appendChild(option);
//         });

//         vehicleNameSelect.disabled = names.length === 0;
//     });

//     // Initialize Flatpickr
// });



