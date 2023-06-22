
// mengambil element html form dan tombol reverse
const form = document.getElementById('form');
const reverseButton = document.getElementById('reverse');

// mengambil element html label dari input suhu dan hasil 
const theSuhuLabel = document.getElementById('theSuhuLabel');
const theHasilLabel = document.getElementById('theHasilLabel');

// sebagai indikator
let celsiusToFahrenheit = true;
    // jika true = Celsius ke Fahrenheit
    // jika false = Fahrenheit ke Celsius

// membuat event apa yg akan terjadi jika tombol reverse di klik
reverseButton.addEventListener('click', (e) => {
    
    // pengkondisian indikator
    if (celsiusToFahrenheit) {
        celsiusToFahrenheit = false;
        theSuhuLabel.textContent = 'Fahrenheit ke Celsius';
    } else {
        celsiusToFahrenheit = true;
        theSuhuLabel.textContent = 'Celsius ke Fahrenheit';
    }
})

// membuat event apa yg akan terjadi jika tombol submit di klik
form.addEventListener('submit', (e) => {
    // menghilangkan sifat default submit agar tidak otomatis direfresh
    e.preventDefault();

    // mengambil elemen input suhu dan hasil
    const theSuhu = document.getElementById('theSuhu');
    const theHasil = document.getElementById('theHasil');

    // hasil dari form adalah string
        // disini saya paksakan ubah jadi number
    const suhu = parseFloat(theSuhu.value);

    // pengkondisian jika user tidak mengisikan apapun
    if (theSuhu.value.length < 1) {
        theHasil.value = `kolom input tidak boleh kosong`
        return false
    } 
    // pengkondisian jika user mengisikan string
    if (isNaN(suhu)) {
        theHasil.value = `anda harus mengetikkan angka`
        return false
    }

    // pengkondisian jika celsius ke fahrenheit
    if (celsiusToFahrenheit) {
        // rumus celsius ke fahrenheit
        const hasilCelsius = suhu * 9 / 5 + 32
        // menampilkan hasil ke input hasil
        theHasil.value = `${hasilCelsius} \u00B0F`
        
    } 
    
    // pengkondisian jika fahrenheit ke celsius
    else {
        // rumus fahrenheit ke celsius
        const hasilFahrenheit = 5 / 9 * (suhu - 32);
        // menampilkan hasil ke input hasil
        theHasil.value = `${hasilFahrenheit} \u00B0C`
    }
}
)