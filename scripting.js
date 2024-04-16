let inputs = document.querySelectorAll('input[type="text"],  input[type="radio"]');
const questions =document.querySelectorAll('.question');
const progressBar = document.getElementById('progress');
const screens = document.querySelectorAll('.screen');
    let currentScreen = 0;
    let a =questions.length
    console.log(inputs)


    function updateProgress() {
        let filledInputs = 0;
        inputs.forEach(input => {
            if(input.type === 'text' && input.value.length >= 3){
                filledInputs++;
            } 
            else if(input.tagName === 'SELECT' && input.value !== ''){
                filledInputs++;
            }
            else if(input.type=== 'radio' && input.checked){
                filledInputs++;
            }
            
        }); 
        const progressPercentage = (filledInputs /  a) * 100;
        progressBar.style.width = progressPercentage + '%';
        if (filledInputs===3){
            showNextScreen()
        }
    }

    function showNextScreen() {
        (screens[currentScreen].style.display = 'none')
        currentScreen=+1
        if (currentScreen < screens.length) {
            screens[currentScreen].style.display = 'block';
            screens[currentScreen].querySelectorAll('input[type="text"], input[type="radio"]').forEach(input => {
                input.addEventListener('input', updateProgress);
        })
    }
        updateProgress()
    }

    screens[currentScreen].querySelectorAll('input[type="text"], input[type="radio"]').forEach(input => {
        input.addEventListener('input', updateProgress);
    }); 

        document.getElementById("select-button").addEventListener("mouseover", function() {
            var options = document.getElementById("select-options");
            options.style.display = options.style.display === "block" ? "none" : "block";
        });

        document.querySelectorAll("#select-options li").forEach(function(option) {
            option.addEventListener("click", function() {
                var value = this.getAttribute("data-value");
                var options=document.getElementById("select-options");
                document.getElementById("select-button").textContent = this.textContent;
                document.getElementById("select1").value = value;
                options.style.display = options.style.display === "block" ? "none" : "block";
            });
        });
        document.getElementById("select-button2").addEventListener("mouseover", function() {
            var options_1 = document.getElementById("select-options2");
            options_1.style.display = options_1.style.display === "block" ? "none" : "block";
        }); 
        document.querySelectorAll("#select-options2 li").forEach(function(option_1) {
            option_1.addEventListener("click", function() {
                var data = this.getAttribute("data-value");
                document.getElementById("select-button2").textContent = this.textContent;
                document.getElementById("select2").value = data;
                document.getElementsByTagName("UL").style.display = "none";
            });
        });