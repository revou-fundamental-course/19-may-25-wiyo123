 function convert() {
            const celsiusInput = document.getElementById('celsius');
            const fahrenheitInput = document.getElementById('fahrenheit');
            const calculationText = document.getElementById('calculation-text');
            
            if (celsiusInput.value === '') {
                alert('Masukkan suhu dalam Celsius terlebih dahulu');
                return;
            }
            
            const celsius = parseFloat(celsiusInput.value);
            const fahrenheit = (celsius * 9/5) + 32;
            
            fahrenheitInput.value = fahrenheit.toFixed(2);
            
            // Menampilkan cara kalkulasi
            calculationText.innerHTML = `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
        }
        
        function reset() {
            document.getElementById('celsius').value = '';
            document.getElementById('fahrenheit').value = '';
            document.getElementById('calculation-text').innerHTML = '';
        }
        
        function reverse() {
            const celsiusInput = document.getElementById('celsius');
            const fahrenheitInput = document.getElementById('fahrenheit');
            const calculationText = document.getElementById('calculation-text');
            
            if (fahrenheitInput.value === '') {
                alert('Tidak ada nilai Fahrenheit untuk dikonversi balik');
                return;
            }
            
            const fahrenheit = parseFloat(fahrenheitInput.value);
            const celsius = (fahrenheit - 32) * 5/9;
            
            celsiusInput.value = celsius.toFixed(2);
            fahrenheitInput.value = '';
            
            // Menampilkan cara kalkulasi
            calculationText.innerHTML = `(${fahrenheit}°F - 32) × 5/9 = ${celsius.toFixed(2)}°C`;
        }