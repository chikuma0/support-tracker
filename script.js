const totalAmount = 9.80; // Total amount in billion USD

const data = [
    { date: '2022-02-27', amount: 59300000, purpose: '🤲 緊急人道支援' },
    { date: '2022-03-04', amount: null, purpose: '🪖 軍事基本物資の供与（防弾チョッキ、ヘルメット、発電機、食料品）' },
    { date: '2022-03-24', amount: 53870000, purpose: '🤲 緊急人道支援' },
    { date: '2022-03-25', amount: 100000000, purpose: '💰 世界銀行と協力して融資' },
    { date: '2022-04-19', amount: 200000000, purpose: '💰 融資の増額' },
    { date: '2022-04-19', amount: null, purpose: '🪖 防護マスク、化学防護具、ドローン30機の供与' },
    { date: '2022-04-28', amount: 2300000, purpose: '🏥 医療機器の供与' },
    { date: '2022-05-19', amount: 300000000, purpose: '💰 融資の増額' },
    { date: '2022-05-27', amount: 1660000, purpose: '💰 緊急支援金' },
    { date: '2022-08-04', amount: null, purpose: '🚐 民間車両（バン）の供与' },
    { date: '2022-08-04', amount: null, purpose: '🪖 小型ドローン12機以上の供与' },
    { date: '2022-11-22', amount: 2570000, purpose: '⚡ 発電機と防寒支援' },
    { date: '2022-12-06', amount: 495370370, purpose: '🤲 人道支援' },
    { date: '2023-01-23', amount: 2570000, purpose: '⚡ 発電機237台とソーラーランタンの供与' },
    { date: '2023-02-14', amount: 550000, purpose: '🧣 防寒支援' },
    { date: '2023-02-21', amount: 5500000000, purpose: '💰 金融支援（信用保証と他の支援を含む）' },
    { date: '2023-02-23', amount: 23000000, purpose: '💰 MIGAのSURE信託基金への拠出' },
    { date: '2023-03-30', amount: 400000000, purpose: '🏗️ 緊急復興支援（フェーズ2）' },
    { date: '2023-03-30', amount: 70000000, purpose: '⚡ 重要エネルギーインフラの復旧支援' },
    { date: '2023-03-30', amount: 30000000, purpose: '🪖 NATOのCAP信託基金への拠出' },
    { date: '2023-04-21', amount: 471000000, purpose: '💰 世界銀行のURTFへの拠出' },
    { date: '2023-06-20', amount: 5000000, purpose: '🌊 洪水災害対応支援' },
    { date: '2023-06-23', amount: null, purpose: '🌊 洪水災害対応物資支援' },
    { date: '2023-07-20', amount: 1500000000, purpose: '💰 世界銀行融資のADVANCE信託基金による信用補完' },
    { date: '2023-09-05', amount: 70000000, purpose: '💰 HOPEプロジェクトのための世界銀行融資支援' },
    { date: '2023-09-28', amount: null, purpose: '⚡ エネルギーインフラ支援（変圧器5台の供与）' },
    { date: '2023-11-07', amount: 230000000, purpose: '💰 ARISEプロジェクトのための世界銀行融資支援' },
    { date: '2023-12-04', amount: 1200000000, purpose: '💰 INSPIREプロジェクトのための世界銀行融資支援' },
    { date: '2023-12-06', amount: 4500000000, purpose: '💰 金融支援（二国間協定で確認）' },
    { date: '2023-12-07', amount: 1000000000, purpose: '🤲 人道支援と復興' },
    { date: '2023-12-18', amount: 1086000000, purpose: '💰 PEACEプロジェクトのための世界銀行融資支援' },
    { date: '2024-01-07', amount: 37000000, purpose: '🪖 対ドローンシステムのためのNATO CAP信託基金への拠出' },
    { date: '2024-01-19', amount: 470000000, purpose: '💰 世界銀行のPEACE MDTFへの拠出' },
    { date: '2024-02-19', amount: 15800000000, purpose: '🏗️ 緊急復興支援（フェーズ3）', currency: 'JPY' },
    { date: '2024-03-26', amount: 984000000, purpose: '💰 成長基盤事業のための世界銀行融資支援' },
    { date: '2024-05-24', amount: 2000000000, purpose: '💰 世界銀行のADVANCEプログラムへの信用補完' }
];

function formatJapaneseNumber(num) {
    const units = ['', '万', '億', '兆'];
    let unitIndex = 0;
    while (num >= 10000 && unitIndex < units.length - 1) {
        num /= 10000;
        unitIndex++;
    }
    return num.toFixed(2).replace(/\.00$/, '') + units[unitIndex];
}

function formatCompactJapaneseNumber(num) {
    const units = ['', '万', '億', '兆'];
    let unitIndex = 0;
    while (num >= 10000 && unitIndex < units.length - 1) {
        num /= 10000;
        unitIndex++;
    }
    return num.toFixed(1).replace(/\.0$/, '') + units[unitIndex];
}

function formatJapaneseDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${year}年${parseInt(month)}月${parseInt(day)}日`;
}

async function getExchangeRate() {
    // For simplicity, we'll use a fixed exchange rate
    return 110;
}

function createSlide(entry, exchangeRate) {
    const slide = document.createElement('div');
    slide.className = 'slide';
    const japaneseDate = formatJapaneseDate(entry.date);
    
    const dateSpan = document.createElement('span');
    dateSpan.className = 'slide-date';
    dateSpan.textContent = japaneseDate;
    
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'slide-content-wrapper';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'slide-content';
    
    const purposeParts = entry.purpose.split(' ');
    const emoji = purposeParts.shift();
    const purposeText = purposeParts.join(' ');
    
    if (entry.amount !== null) {
        const amountSpan = document.createElement('span');
        amountSpan.className = 'slide-amount';
        const amountJPY = Math.round(entry.amount * exchangeRate);
        amountSpan.textContent = `${formatCompactJapaneseNumber(amountJPY)}円`;
        contentDiv.appendChild(amountSpan);
    }
    
    const emojiSpan = document.createElement('span');
    emojiSpan.className = 'slide-emoji';
    emojiSpan.textContent = emoji;
    contentDiv.appendChild(emojiSpan);
    
    const purposeSpan = document.createElement('span');
    purposeSpan.className = 'slide-purpose';
    purposeSpan.textContent = purposeText;
    contentDiv.appendChild(purposeSpan);
    
    contentWrapper.appendChild(contentDiv);
    
    slide.appendChild(dateSpan);
    slide.appendChild(contentWrapper);
    
    return slide;
}

function createFullList(exchangeRate) {
    const fullList = document.getElementById('full-list');
    fullList.innerHTML = '';
    data.forEach(entry => {
        const li = document.createElement('li');
        const japaneseDate = formatJapaneseDate(entry.date);
        const amountJPY = Math.round(entry.amount * exchangeRate);
        const amountText = `${formatCompactJapaneseNumber(amountJPY)}円 `;
        li.textContent = `${japaneseDate}: ${amountText}${entry.purpose}`;
        fullList.appendChild(li);
    });
}

function setupPopup() {
    const infoIcon = document.getElementById('info-icon');
    const popup = document.getElementById('popup');

    infoIcon.addEventListener('mouseenter', () => {
        popup.style.display = 'block';
    });

    popup.addEventListener('mouseleave', () => {
        popup.style.display = 'none';
    });
}

async function createCumulativeChart(exchangeRate) {
    const ctx = document.getElementById('cumulativeChart').getContext('2d');
    const yearlyData = data.reduce((acc, entry) => {
        const year = entry.date.split('-')[0];
        if (!acc[year]) acc[year] = 0;
        acc[year] += entry.amount * exchangeRate;
        return acc;
    }, {});

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(yearlyData),
            datasets: [{
                label: '支援金額 (円)',
                data: Object.values(yearlyData),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatJapaneseNumber(value) + '円';
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return formatJapaneseNumber(context.parsed.y) + '円';
                        }
                    }
                }
            }
        }
    });
}

async function updateDisplay() {
    const exchangeRate = await getExchangeRate();
    console.log("Exchange rate:", exchangeRate);

    const amountElement = document.getElementById('amount');
    const amountJapaneseElement = document.getElementById('amountJapanese');
    const lastUpdatedElement = document.getElementById('lastUpdated');

    const totalAmountJPY = Math.round(totalAmount * exchangeRate * 1000000000);
    
    amountElement.textContent = `${formatJapaneseNumber(totalAmountJPY)}円`;
    amountJapaneseElement.textContent = `(${totalAmount.toFixed(2)} billion USD)`;

    const lastUpdateDate = new Date('2024-06-30');
    lastUpdatedElement.textContent = `最終更新日: ${formatJapaneseDate(lastUpdateDate.toISOString().split('T')[0])}`;

    const slider = document.getElementById('slider');
    slider.innerHTML = '';
    const slides = data.map(entry => createSlide(entry, exchangeRate));
    slides.forEach(slide => slider.appendChild(slide));

    let currentSlide = 0;
    slides[currentSlide].style.opacity = 1;

    setInterval(() => {
        currentSlide = (currentSlide + 1) % data.length;
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.transform = `translateY(${(i - currentSlide) * 100}%)`;
            slides[i].style.opacity = i === currentSlide ? 1 : 0;
        }
    }, 5000);

    createFullList(exchangeRate);
    setupPopup();

    await createCumulativeChart(exchangeRate);
}

document.addEventListener('DOMContentLoaded', function() {
    updateDisplay().catch(error => console.error("Error in updateDisplay:", error));
});