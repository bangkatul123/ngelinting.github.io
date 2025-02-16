const message = document.getElementById('message');
const changeButton = document.getElementById('change-message');

const messages = [
    "Semoga harimu dipenuhi kebahagiaan dan tawa!",
        "Selamat ulang tahun! Semoga semua impianmu menjadi kenyataan.",
            "Di hari bahagiamu ini, semoga kamu selalu diberikan kesehatan dan kesuksesan.",
                "Ulang tahun ini adalah awal dari petualangan baru yang menarik!"
                ];

                let currentMessageIndex = 0;

                changeButton.addEventListener('click', () => {
                    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
                        message.textContent = messages[currentMessageIndex];
                        });
                        