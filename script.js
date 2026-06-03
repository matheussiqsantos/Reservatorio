const btnAdd = document.getElementById('btn-add');
const btnReset = document.getElementById('btn-reset');
const currentVolumeText = document.getElementById('current-volume');
const tankFill = document.getElementById('tank-fill');
const criticalAlert = document.getElementById('critical-alert');
const monitorPanel = document.getElementById('monitor-panel');

let currentVolume = 0;
const MAX_VOLUME = 1000;
const INCREMENT_VALUE = 200;


function updateInterface() {

    currentVolumeText.textContent = currentVolume;

    const fillPercentage = (currentVolume / MAX_VOLUME) * 100;
    tankFill.style.width = `${fillPercentage}%`;

    
    if (currentVolume >= MAX_VOLUME) {
        
        criticalAlert.innerHTML = "⚠️RISCO DE TRANSBORDAMENTO⚠️";
        criticalAlert.classList.remove('hidden');
        monitorPanel.classList.add('panel-critical');
        tankFill.classList.add('tank-critical');
        
        
        btnAdd.disabled = true;
        btnAdd.style.opacity = '0.5';
        btnAdd.style.cursor = 'not-allowed';
        
    } else {
       
        criticalAlert.classList.add('hidden');
        monitorPanel.classList.remove('panel-critical');
        tankFill.classList.remove('tank-critical');
        
        btnAdd.disabled = false;
        btnAdd.style.opacity = '1';
        btnAdd.style.cursor = 'pointer';
    }
}

// 4. Função para simular a entrada de líquido
function addFluid() {

    if (currentVolume + INCREMENT_VALUE <= MAX_VOLUME) {
        currentVolume += INCREMENT_VALUE;
    } else {
        currentVolume = MAX_VOLUME;
    }
    
    updateInterface();
}

function resetTank() {
    currentVolume = 0;
    updateInterface();
}

btnAdd.addEventListener('click', addFluid);
btnReset.addEventListener('click', resetTank);

updateInterface();