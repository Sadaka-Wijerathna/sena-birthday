const settingsButton = document.getElementById('settingsButton');
const settingsModal = document.getElementById('settingsModal');
const closeModal = document.querySelector('.close');
let pages = [];
const applySettingsButton = document.getElementById('applySettings');
let settings = {
    music: './media/hbdmusic1.mp3',
    countdown: 3,
    matrixText: 'HAPPYBIRTHDAY',
    matrixColor1: '#ff69b4', // Màu pink mẫu
    matrixColor2: '#ff1493', // Màu pink mẫu
    sequence: 'HAPPY|BIRTHDAY|TO|Bbii|❤',
    sequenceColor: '#ff69b4', // Màu pink mẫu
    gift: './image/happy3.gif',
    enableBook: true,
    pages: [
        // --- Cover (front) ---
        {
            image: './image/book-cover.png',
        },
        {
            image: './image/photos/p1.jpeg',
            content: 'Happy Birthday Bbii 💗'
        },

        // --- Leaf 2 ---
        {
            image: './image/photos/p2.jpeg',
            content: 'Happy Birthday Bbii 💗'
        },
        {
            image: './image/photos/p3.jpeg',
            content: 'As long as you’re smiling, I’m happy. Stay happy, my love.'
        },

        // --- Leaf 3 ---
        {
            image: './image/photos/p4.jpeg',
            content: 'As long as you’re smiling, I’m happy. Stay happy, my love.'
        },
        {
            image: './image/photos/p5.jpeg',
            content: 'Every moment with you is a gift I will always treasure. 🌸'
        },

        // --- Leaf 4 ---
        {
            image: './image/photos/p6.jpeg',
            content: 'You light up every room you walk into. Never stop shining. ✨'
        },
        {
            image: './image/photos/p7.jpeg',
            content: 'Wishing you a day as beautiful and wonderful as you are. 🌷'
        },

        // --- Leaf 5 ---
        {
            image: './image/photos/p8.jpeg',
            content: 'May this year bring you all the joy and love you deserve. 🌟'
        },
        {
            image: './image/photos/p9.jpeg',
            content: 'You make every day brighter just by being you. ⭐'
        },

        // --- Leaf 6 (back cover) ---
        {
            image: './image/photos/p10.jpeg',
            content: 'Here’s to you, Bbii — forever in my heart. ❤️'
        },
        {
            image: './image/book-cover.png',
            content: 'As long as you’re smiling, I’m happy. Stay happy, my love.'
        }
    ],
    enableBook: true,
    enableHeart: true,
    isSave: false,
};

// Biến global để lưu trạng thái checkbox isSave
window.lastIsSaveState = false;

const musicOptions = [
    { value: './music/happy-birthday.mp3', label: 'Happy Birthday (Miễn phí)' },
    { value: './music/happybirthday.mp3', label: 'Happy Birthday (Phiên bản 2)' },
    { value: './music/happybirthday_domixi.mp3', label: 'Happy Birthday (Độ Mixi)' },
    { value: './music/happybirtday_uia.mp3', label: 'Happy Birthday (Mèo UIA)' },
    { value: './music/music.mp3', label: 'Happy Birthday (Instrumental)' },
    { value: './music/postcardnam.mp3', label: 'Happy Birthday Podcast (Nam)' },
    { value: './music/podcardnu.mp3', label: 'Happy Birthday Podcast (Nữ)' },
    { value: './music/givemeyourforever.mp3', label: 'Give Me Your Forever' },
    { value: './music/perfect.mp3', label: 'Perfect' },
    { value: './music/phepmau.mp3', label: 'Phép màu' },
    { value: './music/lambantraianhe.mp3', label: 'Làm bạn trai anh nhé' },
    { value: './music/denbenanh.mp3', label: 'Đến bên anh' },
    { value: './music/anhnangcuaanh.mp3', label: 'Ánh nắng của anh' },
    { value: './music/dunglamtraitimanhdau.mp3', label: 'Đừng làm trái tim anh đau' },
    { value: './music/buiphan.mp3', label: 'Bụi phấn' },
    { value: './music/buocnhevaotimanh.mp3', label: 'Bước nhẹ vào tim anh' },
    { value: './music/codoidieu.mp3', label: 'Có đôi điều' },
    { value: './music/coem.mp3', label: 'Có em' },
    { value: './music/emnay.mp3', label: 'Em này' },
    { value: './music/emlacogiaovungcao.mp3', label: 'Em là cô giáo vùng cao' },
    { value: './music/emlacogiaovungcaoremix.mp3', label: 'Em là cô giáo vùng cao (Remix)' },
    { value: './music/lathuguithay.mp3', label: 'Lá thư gửi thầy' },
    { value: './music/loithayco.mp3', label: 'Lời thầy cô' },
    { value: './music/nguoithay.mp3', label: 'Người thầy' },
    { value: './music/nguoigieomamxanh.mp3', label: 'Người gieo mầm xanh' },
    { value: './music/nguoidautien.mp3', label: 'Người đầu tiên' },
    { value: './music/motdoi.mp3', label: 'Một đời' },
    { value: './music/minhcungnhaudongbang.mp3', label: 'Mình cùng nhau đóng băng' },
    { value: './music/neunhucohaitraitim.mp3', label: 'Nếu như có hai trái tim' },
    { value: './music/ngayxuaay.mp3', label: 'Ngày xưa ấy' },
    { value: './music/Như 1 vì tinh tú.mp3', label: 'Như 1 vì tinh tú' },
    { value: './music/tinhyeudieuky.mp3', label: 'Tình yêu diệu kỳ' },
    { value: './music/trentinhbanduoitinhyeu.mp3', label: 'Trên tình bạn dưới tình yêu' },
    { value: './music/tungngayyeuem.mp3', label: 'Từng ngày yêu em' },
    { value: './music/yeuemratnhieu.mp3', label: 'Yêu em rất nhiều' },
    { value: './music/suynghitronganh.mp3', label: 'Suy nghĩ trong anh' }
];
const gifOptions = [
    { value: '', label: 'None' },
    { value: './gif/happy.gif', label: 'Gif1' },
    { value: './gif/Cat Love GIF by KIKI.gif', label: 'Gif2' },
    { value: './gif/Happy-Birthday-GIF-by-BREAD-TR-unscreen.gif', label: 'Gif3' },
    { value: './gif/happy2.gif', label: 'Gif4' },
    { value: './gif/happy3.gif', label: 'Gif5' },
];
const musicPreviewButton = document.getElementById('musicPreviewButton');
const musicPreviewStatus = document.getElementById('musicPreviewStatus');
const musicPreviewAudio = new Audio();
musicPreviewAudio.preload = 'auto';
let currentPreviewTrack = '';

function getSelectedMusicLabel() {
    const musicSelect = document.getElementById('backgroundMusic');
    if (!musicSelect) return '';
    const selectedOption = musicSelect.options[musicSelect.selectedIndex];
    return selectedOption ? selectedOption.textContent : '';
}

function getIdlePreviewMessage() {
    const label = getSelectedMusicLabel();
    return label ? `Đã chọn: ${label}` : 'Chọn bài nhạc rồi nhấn "Nghe thử"';
}

function setMusicPreviewState({ message, isPlaying }) {
    if (musicPreviewButton) {
        musicPreviewButton.textContent = isPlaying ? '⏸ Dừng nghe thử' : '▶ Nghe thử';
        if (isPlaying) {
            musicPreviewButton.classList.add('playing');
        } else {
            musicPreviewButton.classList.remove('playing');
        }
    }
    if (musicPreviewStatus && message) {
        musicPreviewStatus.textContent = message;
    }
}

function stopMusicPreview(customMessage) {
    musicPreviewAudio.pause();
    musicPreviewAudio.currentTime = 0;
    currentPreviewTrack = '';
    setMusicPreviewState({
        message: customMessage || getIdlePreviewMessage(),
        isPlaying: false
    });
}

function handleMusicPreview() {
    const musicSelect = document.getElementById('backgroundMusic');
    if (!musicSelect || !musicSelect.value) {
        setMusicPreviewState({
            message: 'Vui lòng chọn một bài nhạc trước khi nghe thử',
            isPlaying: false
        });
        return;
    }

    const selectedSrc = musicSelect.value;
    const selectedLabel = getSelectedMusicLabel();

    if (currentPreviewTrack === selectedSrc && !musicPreviewAudio.paused) {
        stopMusicPreview();
        return;
    }

    currentPreviewTrack = selectedSrc;
    musicPreviewAudio.pause();
    musicPreviewAudio.currentTime = 0;
    musicPreviewAudio.src = selectedSrc;

    musicPreviewAudio.play().then(() => {
        setMusicPreviewState({
            message: `Đang phát: ${selectedLabel}`,
            isPlaying: true
        });
    }).catch(error => {
        console.error('Không thể phát nhạc xem thử:', error);
        stopMusicPreview('Không phát được bản nghe thử. Vui lòng thử lại.');
    });
}

function attachMusicSelectChangeListener() {
    const musicSelect = document.getElementById('backgroundMusic');
    if (!musicSelect) return;
    musicSelect.onchange = () => {
        stopMusicPreview();
    };
}

if (musicPreviewButton) {
    musicPreviewButton.addEventListener('click', handleMusicPreview);
}

musicPreviewAudio.addEventListener('ended', () => stopMusicPreview());
musicPreviewAudio.addEventListener('pause', () => {
    if (musicPreviewAudio.currentTime === 0) {
        setMusicPreviewState({
            message: getIdlePreviewMessage(),
            isPlaying: false
        });
    }
});
musicPreviewAudio.addEventListener('error', () => {
    stopMusicPreview('Không phát được bản nghe thử. Vui lòng thử lại.');
});

stopMusicPreview();

// Định nghĩa các mẫu màu sẵn (chỉ 3 mẫu + tùy chỉnh)
const colorThemes = {
    pink: {
        matrixColor1: '#ff69b4',
        matrixColor2: '#ff1493',
        sequenceColor: '#ff69b4',
        name: 'Hồng ngọt ngào'
    },
    blue: {
        matrixColor1: '#87ceeb',
        matrixColor2: '#4169e1',
        sequenceColor: '#1e90ff',
        name: 'Xanh dương mát mẻ'
    },
    purple: {
        matrixColor1: '#dda0dd',
        matrixColor2: '#9370db',
        sequenceColor: '#8a2be2',
        name: 'Tím mộng mơ'
    },
    custom: {
        matrixColor1: '#ffb6c1',
        matrixColor2: '#ffc0cb',
        sequenceColor: '#d39b9b',
        name: 'Tùy chỉnh màu'
    }
};

// Tạo hàm reset chung có thể tái sử dụng
function resetWebsiteState() {

    // Reset website state
    const book = document.getElementById('book');
    const bookContainer = document.querySelector('.book-container');
    const canvas = document.querySelector('.canvas');
    const matrixCanvas = document.getElementById('matrix-rain');
    const giftImageElement = document.getElementById('gift-image');
    const contentDisplay = document.getElementById('contentDisplay');
    const fireworkContainer = document.getElementById('fireworkContainer');
    const birthdayAudio = document.getElementById('birthdayAudio');

    S.initialized = false;
    // Ẩn sao khi reset
    if (typeof hideStars === 'function') {
        hideStars();
    }

    // Hide book and related elements
    if (book) {
        book.style.display = 'none';
        book.classList.remove('show');
    }
    if (bookContainer) {
        bookContainer.style.display = 'none';
        bookContainer.classList.remove('show');
    }
    if (contentDisplay) {
        contentDisplay.classList.remove('show');
    }
    if (giftImageElement) {
        giftImageElement.style.display = 'none';
        giftImageElement.style.animation = '';
    }
    if (fireworkContainer) {
        fireworkContainer.style.display = 'none';
        fireworkContainer.style.opacity = '0';
        fireworkContainer.innerHTML = '';
    }

    // Remove any existing heart photos
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => photo.remove());

    // Reset canvas visibility
    if (canvas) {
        canvas.style.display = 'block';
    }
    if (matrixCanvas) {
        matrixCanvas.style.display = 'block';
    }

    // Reset book state
    if (typeof currentPage !== 'undefined') {
        currentPage = 0;
    }
    if (typeof isBookFinished !== 'undefined') {
        isBookFinished = false;
    }
    if (typeof isFlipping !== 'undefined') {
        isFlipping = false;
    }
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => {
        page.classList.remove('flipped', 'flipping');
    });

    // Apply music settings
    if (birthdayAudio && window.settings) {
        birthdayAudio.src = window.settings.music;
        if (typeof isPlaying !== 'undefined' && isPlaying) {
            birthdayAudio.play().catch(error => {
            });
        }
    }

    // Reset and restart matrix rain với màu mới
    if (window.settings && typeof matrixChars !== 'undefined') {
        matrixChars = window.settings.matrixText.split('');

        if (typeof matrixInterval !== 'undefined' && matrixInterval) {
            clearInterval(matrixInterval);
            matrixInterval = null;
            if (matrixCanvas) {
                const matrixCtx = matrixCanvas.getContext('2d');
                matrixCtx.clearRect(0, 0, matrixCanvas.width, matrixCanvas.height);
            }
        }
        if (typeof initMatrixRain === 'function') {
            initMatrixRain();
        }
    }

    // Update gift image
    if (giftImageElement && window.settings) {
        if (window.settings.gift && window.settings.gift !== '') {
            giftImageElement.src = window.settings.gift;
        } else {
            giftImageElement.src = '';
        }
    }

    // ✅ Update pages and recreate book với debug
    if (window.settings && window.settings.pages) {
        pages = window.settings.pages;
        createPages();
    }

    // Reset and restart the sequence với màu mới
    if (typeof S !== 'undefined' && S.UI && window.settings) {
        S.UI.reset(true);
        const sequence = `|#countdown ${window.settings.countdown}|${window.settings.sequence}|#gift|`;
        S.UI.simulate(sequence);
    }

}

// Function để khởi tạo default settings
function initializeDefaultSettings() {

    window.settings = {
        music: './media/hbdmusic1.mp3',
        countdown: 3,
        matrixText: 'HAPPYBIRTHDAY',
        matrixColor1: '#ff69b4', // Màu pink mẫu
        matrixColor2: '#ff1493', // Màu pink mẫu
        sequence: 'HAPPY|BIRTHDAY|TO|Bbii|❤',
        sequenceColor: '#ff69b4', // Màu pink mẫu
        gift: './image/happy3.gif',
        enableBook: true,
        enableHeart: true,
        isSave: false,
        colorTheme: 'pink',
        pages: [
        // --- Cover (front) ---
        {
            image: './image/book-cover.png',
        },
        {
            image: './image/photos/p1.jpeg',
            content: 'Happy Birthday Bbii 💗'
        },

        // --- Leaf 2 ---
        {
            image: './image/photos/p2.jpeg',
            content: 'Happy Birthday Bbii 💗'
        },
        {
            image: './image/photos/p3.jpeg',
            content: 'As long as you’re smiling, I’m happy. Stay happy, my love.'
        },

        // --- Leaf 3 ---
        {
            image: './image/photos/p4.jpeg',
            content: 'As long as you’re smiling, I’m happy. Stay happy, my love.'
        },
        {
            image: './image/photos/p5.jpeg',
            content: 'Every moment with you is a gift I will always treasure. 🌸'
        },

        // --- Leaf 4 ---
        {
            image: './image/photos/p6.jpeg',
            content: 'You light up every room you walk into. Never stop shining. ✨'
        },
        {
            image: './image/photos/p7.jpeg',
            content: 'Wishing you a day as beautiful and wonderful as you are. 🌷'
        },

        // --- Leaf 5 ---
        {
            image: './image/photos/p8.jpeg',
            content: 'May this year bring you all the joy and love you deserve. 🌟'
        },
        {
            image: './image/photos/p9.jpeg',
            content: 'You make every day brighter just by being you. ⭐'
        },

        // --- Leaf 6 (back cover) ---
        {
            image: './image/photos/p10.jpeg',
            content: 'Here’s to you, Bbii — forever in my heart. ❤️'
        },
        {
            image: './image/book-cover.png',
            content: 'As long as you’re smiling, I’m happy. Stay happy, my love.'
        }
        ]
    };

    pages = window.settings.pages;
}

function addNewPage() {
    if (settings.pages.length < 20) {
        // ✅ Lưu dữ liệu form trước khi thêm trang mới
        saveFormDataToSettings();

        // Thêm trang mới
        settings.pages.push({ image: '', content: '' });

        // Populate modal lại
        populateModal();

        // Cập nhật pricing
        updatePricingFromModal();
    }
}

function removePage(index) {
    if (settings.pages.length > 1) {
        // ✅ Lưu dữ liệu form trước khi xóa trang
        saveFormDataToSettings();

        // Xóa trang
        settings.pages.splice(index, 1);

        // Populate modal lại
        populateModal();

        // Cập nhật pricing
        updatePricingFromModal();
    }
}


// Sửa lại hàm handleColorThemeChange để lưu theme được chọn
function handleColorThemeChange(selectedTheme) {
    const matrixColor1Input = document.getElementById('matrixColor1');
    const matrixColor2Input = document.getElementById('matrixColor2');
    const sequenceColorInput = document.getElementById('sequenceColor');
    const customColorSection = document.getElementById('customColorSection');
    const sequenceColorSection = document.getElementById('sequenceColorSection');

    // Lưu theme được chọn vào settings
    settings.colorTheme = selectedTheme;

    // Cập nhật trạng thái active của các nút
    const allButtons = document.querySelectorAll('.color-theme-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));

    const activeButton = document.querySelector(`[data-theme="${selectedTheme}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    // Hiển thị/ẩn phần tùy chỉnh màu
    if (selectedTheme === 'custom') {
        customColorSection.style.display = 'flex';
        sequenceColorSection.style.display = 'block';
    } else {
        customColorSection.style.display = 'none';
        sequenceColorSection.style.display = 'none';

        // Chỉ cập nhật màu nếu không phải custom
        const theme = colorThemes[selectedTheme];
        if (theme && matrixColor1Input && matrixColor2Input && sequenceColorInput) {
            matrixColor1Input.value = theme.matrixColor1;
            matrixColor2Input.value = theme.matrixColor2;
            sequenceColorInput.value = theme.sequenceColor;

            // Cập nhật settings với màu mới
            settings.matrixColor1 = theme.matrixColor1;
            settings.matrixColor2 = theme.matrixColor2;
            settings.sequenceColor = theme.sequenceColor;

            // Trigger change event để cập nhật preview nếu có
            matrixColor1Input.dispatchEvent(new Event('input'));
            matrixColor2Input.dispatchEvent(new Event('input'));
            sequenceColorInput.dispatchEvent(new Event('input'));
        }
    }
}




// Thêm event listeners cho custom color inputs để tự động chuyển sang custom theme
function addCustomColorListeners() {
    const matrixColor1Input = document.getElementById('matrixColor1');
    const matrixColor2Input = document.getElementById('matrixColor2');
    const sequenceColorInput = document.getElementById('sequenceColor');

    if (matrixColor1Input) {
        matrixColor1Input.addEventListener('input', function () {
            // Chỉ cập nhật settings khi đang ở chế độ custom
            if (settings.colorTheme === 'custom') {
                settings.matrixColor1 = this.value;

                // Cập nhật preview nếu có
                const matrixColor1Preview = document.getElementById('matrixColor1Preview');
                if (matrixColor1Preview) {
                    matrixColor1Preview.style.backgroundColor = this.value;
                }
            }
        });
    }

    if (matrixColor2Input) {
        matrixColor2Input.addEventListener('input', function () {
            if (settings.colorTheme === 'custom') {
                settings.matrixColor2 = this.value;

                const matrixColor2Preview = document.getElementById('matrixColor2Preview');
                if (matrixColor2Preview) {
                    matrixColor2Preview.style.backgroundColor = this.value;
                }
            }
        });
    }

    if (sequenceColorInput) {
        sequenceColorInput.addEventListener('input', function () {
            if (settings.colorTheme === 'custom') {
                settings.sequenceColor = this.value;

                const sequenceColorPreview = document.getElementById('sequenceColorPreview');
                if (sequenceColorPreview) {
                    sequenceColorPreview.style.backgroundColor = this.value;
                }
            }
        });
    }
}

// Sửa lại hàm detectCurrentColorTheme để ưu tiên colorTheme đã lưu
function detectCurrentColorTheme() {
    // Nếu đã có colorTheme được lưu, sử dụng nó
    if (settings.colorTheme) {
        return settings.colorTheme;
    }

    const matrixColor1Input = document.getElementById('matrixColor1');
    const matrixColor2Input = document.getElementById('matrixColor2');
    const sequenceColorInput = document.getElementById('sequenceColor');

    if (matrixColor1Input && matrixColor2Input && sequenceColorInput) {
        const currentMatrix1 = matrixColor1Input.value;
        const currentMatrix2 = matrixColor2Input.value;
        const currentSequence = sequenceColorInput.value;

        // Tìm mẫu màu phù hợp nhất (bao gồm cả custom)
        for (const [themeKey, theme] of Object.entries(colorThemes)) {
            if (theme.matrixColor1 === currentMatrix1 &&
                theme.matrixColor2 === currentMatrix2 &&
                theme.sequenceColor === currentSequence) {
                return themeKey;
            }
        }
    }

    // Mặc định trả về pink nếu không tìm thấy
    return 'pink';
}
function saveFormDataToSettings() {
    try {
        // Lưu các settings cơ bản
        const musicSelect = document.getElementById('backgroundMusic');
        if (musicSelect) settings.music = musicSelect.value;

        const countdownSelect = document.getElementById('countdownTime');
        if (countdownSelect) settings.countdown = parseInt(countdownSelect.value) || 3;

        const enableBookSelect = document.getElementById('enableBook');
        if (enableBookSelect) settings.enableBook = enableBookSelect.value === 'true';

        const enableHeartSelect = document.getElementById('enableHeart');
        if (enableHeartSelect) settings.enableHeart = enableHeartSelect.value === 'true';

        const isSaveCheckbox = document.getElementById('isSave');
        if (isSaveCheckbox) settings.isSave = isSaveCheckbox.checked;

        const giftSelect = document.getElementById('giftImage');
        if (giftSelect) settings.gift = giftSelect.value;

        const matrixTextInput = document.getElementById('matrixText');
        if (matrixTextInput) settings.matrixText = matrixTextInput.value;

        const matrixColor1Input = document.getElementById('matrixColor1');
        if (matrixColor1Input) settings.matrixColor1 = matrixColor1Input.value;

        const matrixColor2Input = document.getElementById('matrixColor2');
        if (matrixColor2Input) settings.matrixColor2 = matrixColor2Input.value;

        const sequenceInput = document.getElementById('sequenceText');
        if (sequenceInput) settings.sequence = sequenceInput.value;

        const sequenceColorInput = document.getElementById('sequenceColor');
        if (sequenceColorInput) settings.sequenceColor = sequenceColorInput.value;

        // Lưu mẫu màu đã chọn
        const activeButton = document.querySelector('.color-theme-btn.active');
        if (activeButton) {
            settings.colorTheme = activeButton.getAttribute('data-theme');
        }

        // Lưu dữ liệu các trang...
        settings.pages.forEach((page, index) => {
            const fileInput = document.getElementById(`pageImage${index}`);
            const contentInput = document.getElementById(`pageContent${index}`);

            if (fileInput && fileInput.files.length > 0) {
                const newImageURL = URL.createObjectURL(fileInput.files[0]);
                settings.pages[index].image = newImageURL;
                settings.pages[index].selectedFile = fileInput.files[0];
            }

            if (contentInput) {
                settings.pages[index].content = contentInput.value;
            }
        });

    } catch (error) {
        console.error('Error saving form data:', error);
    }
}

// Hàm cập nhật giá từ modal
function updatePricingFromModal() {
    if (window.pricingCalculator) {
        const currentModalSettings = {
            music: document.getElementById('backgroundMusic')?.value || './music/happybirtday_uia.mp3',
            enableBook: document.getElementById('enableBook')?.value === 'true',
            enableHeart: document.getElementById('enableHeart')?.value === 'true',
            isSave: document.getElementById('isSave')?.checked || false,
            pages: settings.pages || []
        };

        window.pricingCalculator.updateFromSettings(currentModalSettings);
    }
}

// Hàm cập nhật hiển thị hạn sử dụng
function updateExpireDateDisplay() {
    const isSaveCheckbox = document.getElementById('isSave');
    const expireDateElement = document.getElementById('expireDate');
    const expireContainer = expireDateElement?.parentElement;

    if (isSaveCheckbox && expireDateElement && expireContainer) {
        if (isSaveCheckbox.checked) {
            expireDateElement.textContent = t('saveForever');
            expireDateElement.style.color = '#4caf50'; // Màu xanh lá
            expireContainer.innerHTML = `⏳ ${t('expireText')} <b id="expireDate" style="color: #4caf50;">${t('saveForever')}</b>`;
        } else {
            expireDateElement.textContent = t('thirtyDays');
            expireDateElement.style.color = ''; // Màu mặc định
            expireContainer.innerHTML = `⏳ ${t('expireText')} <b id="expireDate">${t('thirtyDays')}</b>`;
        }
    }
}
function createPages() {

    book.innerHTML = '';
    const totalLogicalPages = pages.length;
    const totalPhysicalPages = Math.ceil(totalLogicalPages / 2);

    for (let physicalPageIndex = 0; physicalPageIndex < totalPhysicalPages; physicalPageIndex++) {
        const page = document.createElement('div');
        page.classList.add('page');
        page.dataset.page = physicalPageIndex;

        const frontLogicalIndex = physicalPageIndex * 2;
        const backLogicalIndex = frontLogicalIndex + 1;


        const front = document.createElement('div');
        front.classList.add('page-front');

        if (frontLogicalIndex < pages.length && pages[frontLogicalIndex]) {
            const frontPageData = pages[frontLogicalIndex];

            if (frontPageData.image) {
                const frontImg = document.createElement('img');
                frontImg.src = frontPageData.image;
                frontImg.onerror = function () {
                    const placeholderText = frontLogicalIndex === 0 ? 'Bìa Sách' : `Trang ${frontLogicalIndex + 1}`;
                    this.src = createPlaceholderImage(placeholderText);
                };
                front.appendChild(frontImg);
            } else {
                front.classList.add('empty-page');
                front.textContent = t('emptyPage');
            }
        } else {
            front.classList.add('empty-page');
            front.textContent = t('emptyPage');
        }

        const back = document.createElement('div');
        back.classList.add('page-back');

        if (backLogicalIndex < pages.length && pages[backLogicalIndex]) {
            const backPageData = pages[backLogicalIndex];

            if (backPageData.image) {
                const backImg = document.createElement('img');
                backImg.src = backPageData.image;
                backImg.onerror = function () {
                    const placeholderText = `Trang ${backLogicalIndex + 1}`;
                    this.src = createPlaceholderImage(placeholderText);
                };
                back.appendChild(backImg);
            } else {
                back.classList.add('empty-page');
                back.textContent = t('emptyPage');
            }
        } else {
            const endImg = document.createElement('img');
            endImg.src = './image/theend.jpg';
            endImg.onerror = function () {
                back.classList.add('empty-page');
                back.textContent = t('endOfBook');
            };
            back.appendChild(endImg);
        }

        page.appendChild(front);
        page.appendChild(back);
        book.appendChild(page);

        page.addEventListener('click', (e) => {
            if (!isFlipping) {
                const rect = page.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const pageWidth = rect.width;
                if (clickX < pageWidth / 2 && page.classList.contains('flipped')) {
                    prevPage();
                } else if (clickX >= pageWidth / 2 && !page.classList.contains('flipped')) {
                    nextPage();
                }
            }
        });
    }

    photoUrls = pages.filter(page => page.image && !page.image.includes('book-cover')).map(page => page.image);

    // ✅ FIX: Tính toán z-index cho tất cả pages sau khi tạo
    if (typeof calculatePageZIndexes === 'function') {
        calculatePageZIndexes();
    }
}


// Sửa DOMContentLoaded: KHÔNG gọi startWebsite ở đây nữa
document.addEventListener('DOMContentLoaded', function () {
    const book = document.getElementById('book');
    const bookContainer = document.querySelector('.book-container');
    if (book) {
        book.style.display = 'none';
        book.classList.remove('show');
    }
    if (bookContainer) {
        bookContainer.style.display = 'none';
        bookContainer.classList.remove('show');
    }

    createPages();
    // ✅ Khởi tạo settings trước khi khởi tạo pricing
    const websiteId = window.birthdayAPI?.getWebsiteIdFromURL();
    if (websiteId) {
        const googleAuthContainer = document.getElementById('googleAuthContainer');
        if (googleAuthContainer) googleAuthContainer.style.display = 'none';
        loadWebsiteFromServer();
    } else {
        // --- TAMBAHKAN KODE LOADING DI SINI ---

        // 1. Munculkan UI Loading
        createLoadingUI();

        // 2. Siapkan pengaturan di background
        initializeDefaultSettings();
        try { applyLoadedSettings(); } catch(e) { console.warn('applyLoadedSettings deferred:', e); }

        if (window.initializePricingCalculator) {
            try { window.initializePricingCalculator(); } catch(e) {}
        }
        if (window.pricingCalculator) {
            try { window.pricingCalculator.updatePricing(); } catch(e) {}
        }

        window.isWebsiteReady = true;

        // 3. Remove loading and start website
        setTimeout(() => {
            removeLoadingUI();

            if (typeof tryStartWebsiteWhenLandscape === 'function') {
                tryStartWebsiteWhenLandscape();
            } else if (typeof checkOrientation === 'function') {
                checkOrientation();
            } else if (typeof startWebsite === 'function') {
                startWebsite();
            }
        }, 1500);
    }
});
// Tạo UI loading
function createLoadingUI() {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'loadingOverlay';

    loadingOverlay.innerHTML = `
    <div class="loading-content">
        <div class="loading-spinner"></div>
        <h2>${t('loading')}</h2>
        <p>${t('waitingIsHappiness')}</p>
    </div>
`;


    // Thêm CSS cho loading UI
    const loadingStyles = document.createElement('style');
    loadingStyles.textContent = `
        #loadingOverlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: black;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 99999;
            animation: fadeIn 0.3s ease-in-out;
        }
        
        .loading-content {
            text-align: center;
            color: white;
            padding: 20px;
        }
        
        .loading-spinner {
            width: 30px;
            height: 30px;
            border: 4px solid rgba(51, 10, 58, 0.3);
            border-top: 4px solid #fff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        
      .loading-content h2 {
        font-size: 24px;
        margin-bottom: 10px;
        font-family: 'Pacifico', Arial, sans-serif;
    }
    
    .loading-content p {
        font-size: 16px;
        opacity: 0.8;
        font-family: 'Pacifico', Arial, sans-serif;
    }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;

    document.head.appendChild(loadingStyles);
    document.body.appendChild(loadingOverlay);

    return loadingOverlay;
}

// Xóa UI loading
function removeLoadingUI() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.style.animation = 'fadeOut 0.3s ease-in-out';
        setTimeout(() => {
            loadingOverlay.remove();
        }, 300);
    }
}

window.isWebsiteReady = false;
// Hàm load dữ liệu từ server
// Sửa lỗi logic enableBook
async function loadWebsiteFromServer() {
    const websiteId = window.birthdayAPI.getWebsiteIdFromURL();

    if (!websiteId) {
        initializeDefaultSettings();
        applyLoadedSettings();
        window.isWebsiteReady = true;
        if (typeof startWebsite === 'function') tryStartWebsiteWhenLandscape();;
        return;
    }


    // Ẩn settings button, settings hint và pricing UI khi load từ server
    const settingsButton = document.getElementById('settingsButton');
    const settingsHint = document.getElementById('settingsHint');
    const pricingContainer = document.getElementById('pricingContainer');

    if (settingsButton) {
        settingsButton.style.display = 'none';
    }

    if (settingsHint) {
        settingsHint.style.display = 'none';
    }

    if (pricingContainer) {
        pricingContainer.style.display = 'none';
    }

    //     // Ẩn nút chuyển ngôn ngữ ở đây
    const languageSwitchBtn = document.getElementById('langSwitchBtn');
    if (languageSwitchBtn) {
        languageSwitchBtn.style.display = 'none';
    }

    // Hiển thị loading UI
    const loadingOverlay = createLoadingUI();

    try {
        // Gọi API để lấy dữ liệu
        const result = await window.birthdayAPI.getBirthdayWebsiteByWebsiteId(websiteId);

        if (result.success && result.data) {

            // Cập nhật settings từ dữ liệu server
            const serverSettings = result.data.settings;

            // Kiểm tra status và ẩn copyright nếu PAID
            const status = result.data.status;
            const copyrightElement = document.querySelector('.copyright');

            if (status === 'PAID' && copyrightElement) {
                copyrightElement.style.display = 'none';
            } else {
            }

            // ✅ Sửa logic enableBook và enableHeart
            window.settings = {
                music: serverSettings.music || './music/happybirtday_uia.mp3',
                countdown: serverSettings.countdown || 3,
                matrixText: serverSettings.matrixText || 'HAPPYBIRTHDAY',
                matrixColor1: serverSettings.matrixColor1 || '#ffb6c1',
                matrixColor2: serverSettings.matrixColor2 || '#ffc0cb',
                sequence: serverSettings.sequence || 'HAPPY|BIRTHDAY|TO|YOU|❤',
                sequenceColor: serverSettings.sequenceColor || '#d39b9b',
                gift: serverSettings.gift || '',
                // ✅ Sửa logic boolean - kiểm tra chính xác giá trị
                enableBook: serverSettings.enableBook === true,
                enableHeart: serverSettings.enableHeart === true,
                isSave: serverSettings.isSave === true || false, // Backward compatibility
                pages: serverSettings.pages || []
            };

            // Cập nhật pages global variable
            pages = window.settings.pages;


            // Đợi một chút để user thấy loading (UX tốt hơn)
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Xóa loading UI
            removeLoadingUI();

            resetWebsiteState();
            window.isWebsiteReady = true;
            if (typeof startWebsite === 'function') tryStartWebsiteWhenLandscape();;


        } else {
            throw new Error(result.error || 'Không thể tải dữ liệu từ server');
        }

    } catch (error) {

        initializeDefaultSettings();
        applyLoadedSettings();
        window.isWebsiteReady = true;
        if (typeof startWebsite === 'function') tryStartWebsiteWhenLandscape();;
    }
}

// Cập nhật event listener cho apply settings để sử dụng hàm reset chung
applySettingsButton.addEventListener('click', () => {
    // Kiểm tra enableBook trước
    const enableBookSelect = document.getElementById('enableBook');
    const isBookEnabled = enableBookSelect ? enableBookSelect.value === 'true' : false;

    // Kiểm tra nếu sách được bật nhưng không có trang hoặc tất cả trang đều trống
    if (isBookEnabled) {
        if (settings.pages.length === 0) {
            alert('❌ Sách cần có trang!\n\nVui lòng thêm ít nhất 1 trang cho sách hoặc tắt tính năng sách.');
            return;
        }

        // // Kiểm tra xem có ít nhất 1 trang có ảnh không
        // const hasValidPage = settings.pages.some(page => page.image && page.image.trim() !== '');
        // if (!hasValidPage) {
        //     alert('❌ Sách cần có trang!\n\nVui lòng thêm ít nhất 1 trang có ảnh cho sách hoặc tắt tính năng sách.');
        //     return;
        // }
    }

    // Kiểm tra logic trang trước khi áp dụng
    const totalPages = settings.pages.length;

    if (totalPages > 1 && totalPages % 2 === 0) {
        alert(`❌ ${t('invalidPageStructure')}\n\n${t('currentPages', { total: totalPages })}\n${t('bookStructureGuide')}\n\n${t('pleaseAddOrRemovePage')}`);

        return;
    }

    // Cập nhật settings từ form
    settings.music = document.getElementById('backgroundMusic').value;
    settings.countdown = parseInt(document.getElementById('countdownTime').value) || 3;
    settings.matrixText = document.getElementById('matrixText').value || 'HAPPYBIRTHDAY';
    settings.matrixColor1 = document.getElementById('matrixColor1').value;
    settings.matrixColor2 = document.getElementById('matrixColor2').value;
    settings.sequence = document.getElementById('sequenceText').value || 'HAPPY|BIRTHDAY|MY|CUTEE|LITTLE|SWARALI|❤';
    settings.sequenceColor = document.getElementById('sequenceColor').value;
    settings.gift = document.getElementById('giftImage').value;

    // Lưu mẫu màu đã chọn
    const activeButton = document.querySelector('.color-theme-btn.active');
    if (activeButton) {
        settings.colorTheme = activeButton.getAttribute('data-theme');
    }

    settings.enableBook = document.getElementById('enableBook').value === 'true';
    settings.enableHeart = document.getElementById('enableHeart').value === 'true';
    settings.isSave = document.getElementById('isSave')?.checked || false;

    // Cập nhật trạng thái global
    window.lastIsSaveState = settings.isSave;

    const newPages = [];
    settings.pages.forEach((page, index) => {
        const fileInput = document.getElementById(`pageImage${index}`);
        const contentInput = document.getElementById(`pageContent${index}`);

        const newPage = {};
        if (fileInput.files.length > 0) {
            newPage.image = URL.createObjectURL(fileInput.files[0]);
        } else {
            newPage.image = page.image;
        }
        if (contentInput) {
            newPage.content = contentInput.value;
        }
        newPages.push(newPage);
    });
    settings.pages = newPages;

    // Cập nhật pricing
    if (window.pricingCalculator) {
        window.pricingCalculator.updateFromSettings(settings);
    }

    // Cập nhật window.settings
    window.settings = settings;

    // Sử dụng hàm reset chung
    resetWebsiteState();

    stopMusicPreview();

    // Close modal
    settingsModal.style.display = 'none';

    // Ensure website is started
    if (typeof startWebsite === 'function') {
        tryStartWebsiteWhenLandscape();;
    }
});

function isAndroid() {
    return /android/i.test(navigator.userAgent);
}
const fullscreenBtn = document.getElementById('fullscreenBtn');
fullscreenBtn.style.zIndex = 9009999;

function updateFullscreenBtnVisibility() {
    if (
        fullscreenBtn &&
        isAndroid() &&
        !document.fullscreenElement // Chỉ hiện nếu chưa fullscreen
    ) {
        fullscreenBtn.style.display = 'block';

        // Ẩn nút sau 3 giây nếu chưa bấm
        if (fullscreenBtn.hideTimeout) clearTimeout(fullscreenBtn.hideTimeout);
        fullscreenBtn.hideTimeout = setTimeout(() => {
            fullscreenBtn.style.display = 'none';
        }, 2500);
    } else if (fullscreenBtn) {
        fullscreenBtn.style.display = 'none';
        if (fullscreenBtn.hideTimeout) clearTimeout(fullscreenBtn.hideTimeout);
    }
}

updateFullscreenBtnVisibility();

fullscreenBtn.onclick = function () {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            elem.requestFullscreen();
        }
    } else {
        alert(t('fullscreenNotSupported'));
    }
    // Ẩn nút ngay khi bấm
    fullscreenBtn.style.display = 'none';
    if (fullscreenBtn.hideTimeout) clearTimeout(fullscreenBtn.hideTimeout);
};

// Ẩn nút nếu user chuyển sang fullscreen bằng cách khác
document.addEventListener('fullscreenchange', function () {
    updateFullscreenBtnVisibility();
});
function isLandscapeMode() {
    return window.innerWidth > window.innerHeight;
}

function tryStartWebsiteWhenLandscape() {
    if (window.isWebsiteReady && typeof startWebsite === 'function') {
        if (isLandscapeMode()) {
            startWebsite();
        } else {
            // Đợi đến khi landscape mới start
            window.addEventListener('resize', function onResize() {
                if (isLandscapeMode()) {
                    startWebsite();
                    window.removeEventListener('resize', onResize);
                }
            });
        }
    }
}
