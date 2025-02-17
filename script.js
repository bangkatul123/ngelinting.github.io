const message = document.getElementById('message');
const changeButton = document.getElementById('change-message');

const messages = [
    "Semoga harimu dipenuhi kebahagiaan dan tawa!",
        "Tahun telah berganti! Mari buat perubahan padw tqhun ini.",
            "Di Tahun ini, semoga kamu selalu diberikan kesehatan dan kesuksesan.",
                "Tahun ini adalah awal dari petualangan baru yang menarik!"
                ];

                let currentMessageIndex = 0;

                changeButton.addEventListener('click', () => {
                    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
                        message.textContent = messages[currentMessageIndex];
                        });
                        
