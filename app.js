window.addEventListener("DOMContentLoaded", provinceGet);

const provinceselect = document.getElementById("province");

const districtceselect = document.getElementById("district");



function provinceGet(e) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "province.json", true);

    xhr.onload = function () {

        let provinces = JSON.parse(this.responseText);

        provinces.forEach(province => {
            provinceselect.innerHTML += `<option value="${province.plaka_kodu}">${province.il_adi}</option>`;
        });

    }

    xhr.send();
}


provinceselect.addEventListener("click", districteGet)



function districteGet() {

    const xhr = new XMLHttpRequest();

    districtceselect.innerHTML= "<option>İlçe Seçiniz</option>";

    xhr.open("GET", "province.json", true);

    xhr.onload = function () {

        let provinces = JSON.parse(this.responseText);

        provinces.forEach(province => {
            if (provinceselect.value == province.plaka_kodu) {

                districtceselect.removeAttribute("disabled");
                let districtes = province.ilceler;
                districtes.forEach(districte => {
                    districtceselect.innerHTML +=`<option value="${districte.ilce_adi}">${districte.ilce_adi}</option>`
                });
            }

        });

    }

    xhr.send();
}