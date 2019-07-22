





function TriggerToast() {
    document.getElementById("ToastForm").style.display = "block";
    document.getElementById("EinzahlenForm").style.display = "none";
}

function TriggerToast2() {
    document.getElementById("ToastForm2").style.display = "block";
    document.getElementById("AuszahlForm").style.display = "none";
}

function openEinzahlen() {
    document.getElementById("EinzahlenForm").style.display = "block";
}
function openAuszahlen() {
    document.getElementById("AuszahlenForm").style.display = "block";
}

function CloseEinzahlen() {
    document.getElementById("EinzahlenForm").style.display = "none";
}
function CloseAuszahlen() {
    document.getElementById("AuszahlenForm").style.display = "none";
}