
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: linear-gradient(135deg, #240018, #58152e, #9e3658);
    color: #fff;
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
}

.welcome {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
    text-align: center;
}

.welcome-content {
    max-width: 600px;
    animation: fadeIn 1.5s ease;
}

.heart-icon {
    font-size: 65px;
    margin-bottom: 20px;
    animation: heartbeat 1.5s infinite;
}

.small-text {
    color: #ffc6d7;
    letter-spacing: 2px;
    font-size: 12px;
    text-transform: uppercase;
    margin-bottom: 20px;
}

h1 {
    font-family: 'Dancing Script', cursive;
    font-size: clamp(45px, 9vw, 75px);
    color: #ffcfdf;
    line-height: 1.2;
    margin-bottom: 20px;
}

.subtitle {
    font-size: 14px;
    color: #f8dce6;
    margin-bottom: 35px;
    line-height: 1.8;
}

button {
    background: #ffb5ca;
    color: #54152f;
    border: none;
    padding: 15px 27px;
    border-radius: 30px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 5px 20px #ff9bbd44;
}

button:hover {
    background: white;
    transform: translateY(-4px);
}

.hidden {
    display: none !important;
}

.letter-section {
    padding: 45px 15px;
    animation: fadeIn 1.2s ease;
}

.letter {
    max-width: 750px;
    margin: auto;
    padding: clamp(25px, 6vw, 55px);
    background: #fff8f5;
    color: #57313d;
    border-radius: 18px;
    box-shadow: 0 15px 60px #16000d66;
    position: relative;
}

.top-decoration,
.bottom-heart {
    text-align: center;
    color: #d95d86;
    font-size: 35px;
}

.date {
    text-align: center;
    color: #b56b83;
    font-size: 12px;
    letter-spacing: 2px;
    margin: 15px 0 25px;
}

.letter h1 {
    color: #a33c61;
    font-size: clamp(38px, 8vw, 54px);
    text-align: center;
    margin-bottom: 25px;
}

.letter p {
    font-size: 14px;
    line-height: 2;
    margin-bottom: 19px;
    text-align: left;
}

.letter .intro {
    font-family: 'Dancing Script', cursive;
    font-size: 30px;
    color: #b53c67;
}

.highlight {
    background: #ffe6ed;
    border-left: 4px solid #d65c84;
    padding: 16px 18px;
    border-radius: 5px;
    color: #943653;
    font-weight: 500;
}

.ending {
    text-align: center;
    margin-top: 40px;
    border-top: 1px dashed #d9a3b4;
    padding-top: 30px;
}

.ending h2 {
    font-family: 'Dancing Script', cursive;
    font-size: clamp(30px, 7vw, 43px);
    color: #bc416b;
    margin-bottom: 15px;
}

.ending p {
    text-align: center;
}

.signature {
    font-family: 'Dancing Script', cursive;
    font-size: 27px !important;
    color: #a33c61;
    margin-top: 25px;
}

.bottom-heart {
    margin-top: 25px;
}

.final-message {
    text-align: center;
    max-width: 600px;
    margin: 55px auto 20px;
    padding: 20px;
}

.final-message h2 {
    font-family: 'Dancing Script', cursive;
    font-size: 42px;
    color: #ffcada;
    margin-bottom: 20px;
}

.final-message p {
    font-size: 14px;
    line-height: 2;
    color: #ffe5ed;
}

.final-message .forever {
    font-family: 'Dancing Script', cursive;
    font-size: 30px;
    color: #ffc0d4;
    margin-top: 20px;
}

.heart {
    position: fixed;
    bottom: -20px;
    color: #ffb2cb;
    pointer-events: none;
    animation: floatUp linear forwards;
    z-index: 10;
}

@keyframes floatUp {
    to {
        transform: translateY(-110vh) rotate(360deg);
        opacity: 0;
    }
}

@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media(max-width: 600px) {

    .welcome {
        padding: 20px;
    }

    .letter-section {
        padding: 20px 10px;
    }

    .letter {
        padding: 25px 20px;
        border-radius: 12px;
    }

    .letter p {
        font-size: 13px;
        line-height: 1.85;
        margin-bottom: 17px;
    }

    .letter .intro {
        font-size: 27px;
    }

    .signature {
        font-size: 25px !important;
    }

    .final-message {
        margin-top: 35px;
    }
}
