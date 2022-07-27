document.addEventListener("DOMContentLoaded", () => {
    let checkForPageLoad = setInterval(() => {
        if (document.querySelectorAll('[data-role = input-row]')[1]) {
            clearInterval(checkForPageLoad);
            setupCode();
        }
    }, 100);
    function setupCode() {
        function getCookie(name) {
            var cname = name + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(cname) == 0) {
                    return c.substring(cname.length, c.length);
                }
            }
            return "";
        }

        function setCookie(name, value, exp_days) {
            var d = new Date();
            d.setTime(d.getTime() + (exp_days * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toGMTString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
            getSavedValues()
        }

        let setting_firstNameInput = document.querySelectorAll('[data-role = input-row]')[1].children[0];
        let setting_lastNameInput = document.querySelectorAll('[data-role = input-row]')[1].children[1];
        let setting_emailInput = document.querySelectorAll('[data-role = input-row]')[2].children[0];
        let setting_phoneInput = document.querySelectorAll('[data-role = input-row]')[3].children[0];
        let setting_first_streetAddressInput = document.querySelectorAll('[data-role = input-row]')[4].children[0];
        let setting_second_streetAddressInput = document.querySelectorAll('[data-role = input-row]')[5].children[0];
        let setting_cityInput = document.querySelectorAll('[data-role = input-row]')[6].children[0];
        let setting_stateInput = document.querySelectorAll('[data-role = input-row]')[6].children[1].children[0];
        let setting_zipInput = document.querySelectorAll('[data-role = input-row]')[7].children[0];
        let setting_countryInput = document.querySelectorAll('[data-role = input-row]')[7].children[1].children[0];
        let setting_yearInput = document.querySelectorAll('[data-role = input-row]')[10].children[0];
        let setting_makeInput = document.querySelectorAll('[data-role = input-row]')[11].children[0];
        let setting_modelInput = document.querySelectorAll('[data-role = input-row]')[12].children[0];
        let setting_registeredLengthInput = document.querySelectorAll('[data-role = input-row]')[13].children[0];
        let setting_engineMakeInput = document.querySelectorAll('[data-role = input-row]')[14].children[0];
        let setting_engineHorsepowerInput = document.querySelectorAll('[data-role = input-row]')[15].children[0];
        let allSettingInputs = [
            setting_firstNameInput,
            setting_lastNameInput,
            setting_emailInput,
            setting_phoneInput,
            setting_first_streetAddressInput,
            setting_second_streetAddressInput,
            setting_cityInput,
            setting_stateInput,
            setting_zipInput,
            setting_countryInput,
            setting_yearInput,
            setting_makeInput,
            setting_modelInput,
            setting_registeredLengthInput,
            setting_engineMakeInput,
            setting_engineHorsepowerInput
        ]
        allSettingInputs.forEach((input) => {
            input.addEventListener("input", () => {
                saveCookieValue()
            })
            input.addEventListener("focus", () => {
                saveCookieValue()
            })
            input.addEventListener("blur", () => {
                saveCookieValue()
            })
        })        
        function saveCookieValue() {
            allSettingInputs.forEach((input) => {
                let cookieNameValue = "";
                if (input.getAttribute("placeholder") != null) {
                    if (!input.getAttribute("placeholder").includes("#")) {
                        cookieNameValue = `appForm_123_${input.getAttribute("placeholder").replaceAll(" ", "")}`;
                    }
                    else {
                        cookieNameValue = `appForm_123_${input.parentElement.previousElementSibling.innerHTML}`;
                    }
                }
                else {
                    cookieNameValue = `appForm_123_${input.parentElement.previousElementSibling.innerHTML}`;
                }
                if (input.getAttribute("data-role") === "input-container") {
                    setCookie(cookieNameValue, input.children[1].value)
                }
                else {
                    setCookie(cookieNameValue, input.value)
                }
                getSavedValues()
            })
            let firstDateInput = document.querySelector("div[data-role='date-wrapper']");
            setCookie("appForm_123_Date",firstDateInput.textContent.trim());
            getSavedValues()
        }

        let lastPage = document.querySelectorAll("div[data-role='page']")[3];
        let getting_firstNameInput = lastPage.querySelectorAll('[data-role = input-row]')[0].children[0];
        let getting_lastNameInput = lastPage.querySelectorAll('[data-role = input-row]')[0].children[1];
        let getting_emailInput = lastPage.querySelectorAll('[data-role = input-row]')[2].children[0];
        let getting_phoneInput = lastPage.querySelectorAll('[data-role = input-row]')[7].children[0];
        let getting_first_streetAddressInput = lastPage.querySelectorAll('[data-role = input-row]')[3].children[0];
        let getting_second_streetAddressInput = lastPage.querySelectorAll('[data-role = input-row]')[4].children[0];
        let getting_cityInput = lastPage.querySelectorAll('[data-role = input-row]')[5].children[0];
        let getting_stateInput = lastPage.querySelectorAll('[data-role = input-row]')[5].children[1];
        let getting_zipInput = lastPage.querySelectorAll('[data-role = input-row]')[6].children[0];
        let getting_countryInput = lastPage.querySelectorAll('[data-role = input-row]')[6].children[1].children[0];
        let getting_yearInput = lastPage.querySelectorAll('[data-role = input-row]')[9].children[0].children[1];
        let getting_makeInput = lastPage.querySelectorAll('[data-role = input-row]')[10].children[0].children[1];
        let getting_modelInput = lastPage.querySelectorAll('[data-role = input-row]')[11].children[0].children[1];
        let getting_registeredLengthInput = lastPage.querySelectorAll('[data-role = input-row]')[12].children[0].children[1];
        let getting_engineMakeInput = lastPage.querySelectorAll('[data-role = input-row]')[13].children[0].children[1];
        let getting_engineHorsepowerInput = lastPage.querySelectorAll('[data-role = input-row]')[14].children[0].children[1];
        let getting_dateInput = lastPage.querySelectorAll('[data-role = input-row]')[8].children[0].children[1];
        function getSavedValues() {
            getting_firstNameInput.value = getCookie(`appForm_123_First`);
            getting_lastNameInput.value = getCookie(`appForm_123_Last`);
            getting_emailInput.value = getCookie(`appForm_123_Email`);
            getting_phoneInput.value = getCookie(`appForm_123_Phone`);
            getting_first_streetAddressInput.value = getCookie(`appForm_123_StreetAddress`);
            getting_second_streetAddressInput.value = getCookie(`appForm_123_StreetAddressLine2`);
            getting_cityInput.value = getCookie(`appForm_123_City`);
            getting_stateInput.value = getCookie(`appForm_123_State`);
            getting_zipInput.value = getCookie(`appForm_123_Postal/ZipCode`);
            getting_countryInput.value = getCookie(`appForm_123_Country`);
            getting_yearInput.value = getCookie(`appForm_123_Year`);
            getting_makeInput.value = getCookie(`appForm_123_Make`);
            getting_modelInput.value = getCookie(`appForm_123_Model`);
            getting_registeredLengthInput.value = getCookie(`appForm_123_RegisteredLength`);
            getting_engineMakeInput.value = getCookie(`appForm_123_EngineMake`);
            getting_engineHorsepowerInput.value = getCookie(`appForm_123_EngineHorsepower`);
            getting_dateInput.value = getCookie(`appForm_123_Date`);
        }
    }
})