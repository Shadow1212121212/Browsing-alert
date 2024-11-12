let tracking = false;
let timer;
let timeSpent = 0;
let maxTimeLimit = 15 * 60;  // القيمة الافتراضية هي 15 دقيقة
let alertSound = document.getElementById('alertSound');

// بدء التتبع
function startTracking() {
    // تحديد المدة الزمنية بناءً على اختيار المستخدم
    let selectedTime = document.getElementById('timeSelect').value;
    maxTimeLimit = selectedTime * 60;  // تحويل الدقائق إلى ثواني

    tracking = true;
    timeSpent = 0;
    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;
    document.getElementById('restartButton').disabled = false;
    document.getElementById('message').textContent = `يتم تتبع الوقت الآن... (${selectedTime} دقائق)`;

    timer = setInterval(() => {
        timeSpent++;
        if (timeSpent >= maxTimeLimit) {
            alertSound.play();
            alert(`لقد قضيت ${selectedTime} دقيقة على وسائل التواصل الاجتماعي!`);
        }
    }, 1000); // التحديث كل ثانية
}

// إيقاف التتبع
function stopTracking() {
    clearInterval(timer);
    tracking = false;
    document.getElementById('startButton').disabled = false;
    document.getElementById('stopButton').disabled = true;
    document.getElementById('restartButton').disabled = false;
    document.getElementById('message').textContent = "تم إيقاف التتبع.";
}

// إعادة تشغيل التتبع
function restartTracking() {
    if (tracking) {
        clearInterval(timer);
    }
    timeSpent = 0;
    startTracking();
}
