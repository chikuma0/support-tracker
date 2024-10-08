const totalAmount = 9.80 + 13.36; // Total amount in billion USD (allocations + commitments)
console.log('Expected total amount (USD):', totalAmount);

const data = [
    { date: '2022-02-27', amount: 59300000, purpose: '🤲 緊急人道支援', status: 'Allocation' },
    { date: '2022-03-04', amount: null, purpose: '🪖 軍事基本物資の供与（防弾チョッキ、ヘルメット、発電機、食料品）', status: 'Allocation' },
    { date: '2022-03-24', amount: 53870000, purpose: '🤲 緊急人道支援', status: 'Allocation' },
    { date: '2022-03-25', amount: 100000000, purpose: '💰 世界銀行と協力して融資', status: 'Allocation' },
    { date: '2022-04-19', amount: 200000000, purpose: '💰 融資の増額', status: 'Allocation' },
    { date: '2022-04-19', amount: null, purpose: '🪖 防護マスク、化学防護具、ドローン30機の供与', status: 'Allocation' },
    { date: '2022-04-28', amount: 2300000, purpose: '🏥 医療機器の供与', status: 'Allocation' },
    { date: '2022-05-19', amount: 300000000, purpose: '💰 融資の増額', status: 'Allocation' },
    { date: '2022-05-27', amount: 1660000, purpose: '💰 緊急支援金', status: 'Allocation' },
    { date: '2022-08-04', amount: null, purpose: '🚐 民間車両（バン）の供与', status: 'Allocation' },
    { date: '2022-08-04', amount: null, purpose: '🪖 小型ドローン12機以上の供与', status: 'Allocation' },
    { date: '2022-11-22', amount: 2570000, purpose: '⚡ 発電機と防寒支援', status: 'Allocation' },
    { date: '2022-12-06', amount: 495370370, purpose: '🤲 人道支援', status: 'Allocation' },
    { date: '2023-01-23', amount: 2570000, purpose: '⚡ 発電機237台とソーラーランタンの供与', status: 'Allocation' },
    { date: '2023-02-14', amount: 550000, purpose: '🧣 防支援', status: 'Allocation' },
    { date: '2023-02-21', amount: 5500000000, purpose: '💰 金融支援（信用保証と他の支援を含む）', status: 'Commitment' },
    { date: '2023-02-23', amount: 23000000, purpose: '💰 MIGAのSURE信託基金への拠出', status: 'Allocation' },
    { date: '2023-03-30', amount: 400000000, purpose: '🏗️ 緊急復興支援（フェーズ2）', status: 'Allocation' },
    { date: '2023-03-30', amount: 70000000, purpose: '⚡ 重要エネルギーインフラの復旧支援', status: 'Allocation' },
    { date: '2023-03-30', amount: 30000000, purpose: '🪖 NATOCAP信託基金への拠出', status: 'Allocation' },
    { date: '2023-04-21', amount: 471000000, purpose: '💰 世銀行URTFへの拠出', status: 'Allocation' },
    { date: '2023-06-20', amount: 5000000, purpose: '🌊 洪水災害対応支援', status: 'Allocation' },
    { date: '2023-06-23', amount: null, purpose: '🌊 洪水災害対応物資支援', status: 'Allocation' },
    { date: '2023-07-20', amount: 1500000000, purpose: '💰 世界銀行融資のADVANCE信託基金による信用補完', status: 'Allocation' },
    { date: '2023-09-05', amount: 70000000, purpose: '💰 HOPEプロジェクトのための世界銀行融支援', status: 'Allocation' },
    { date: '2023-09-28', amount: null, purpose: '⚡ エネルギーインフラ支援（変圧器5台の供与）', status: 'Allocation' },
    { date: '2023-11-07', amount: 230000000, purpose: '💰 ARISEプロジェクトのための世界銀行融資支援', status: 'Allocation' },
    { date: '2023-12-04', amount: 1200000000, purpose: '💰 INSPIREプロジェクトのための世界銀行融資支援', status: 'Allocation' },
    { date: '2023-12-06', amount: 4500000000, purpose: '💰 金融支援（二国間協定で確認）', status: 'Commitment' },
    { date: '2023-12-07', amount: 1000000000, purpose: '🤲 人道支援と復興', status: 'Commitment' },
    { date: '2023-12-18', amount: 1086000000, purpose: '💰 PEACEプロジェクトのための世界銀行融資支援', status: 'Allocation' },
    { date: '2024-01-07', amount: 37000000, purpose: '🪖 対ドローンシステムのためのNATO CAP信託基金への拠出', status: 'Allocation' },
    { date: '2024-01-19', amount: 470000000, purpose: '💰 世界銀行のPEACE MDTFへの拠出', status: 'Allocation' },
    { date: '2024-02-19', amount: 15800000000, purpose: '🏗️ 緊急復興支援（フェーズ3）', currency: 'JPY', status: 'Commitment' },
    { date: '2024-03-26', amount: 984000000, purpose: '💰 成長基盤事業のための世界銀行融資支援', status: 'Allocation' },
    { date: '2024-05-24', amount: 2000000000, purpose: '💰 世界銀行のADVANCEプログラムへの信用補完', status: 'Allocation' }
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
    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        return data.rates.JPY;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        return 140; // Fallback to an approximate current rate if API fails
    }
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
        const amountJPY = entry.currency === 'JPY' ? entry.amount : Math.round(entry.amount * exchangeRate);
        const amountSpan = document.createElement('span');
        amountSpan.className = 'slide-amount';
        amountSpan.textContent = formatCompactJapaneseNumber(amountJPY) + '円';
        amountSpan.title = formatLargeJapaneseNumber(amountJPY) + '円';
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
        let amountText = '';
        if (entry.amount !== null) {
            const amountJPY = entry.currency === 'JPY' ? entry.amount : Math.round(entry.amount * exchangeRate);
            amountText = `${formatCompactJapaneseNumber(amountJPY)}円 `;
        }

        const statusEmoji = entry.status === 'Allocation' ? '✅' : '';
        const statusText = entry.status === 'Allocation' ? '割当済' : '確定済';
        const statusClass = entry.status === 'Allocation' ? 'status-allocated' : 'status-committed';

        li.innerHTML = `
            <span class="date">${japaneseDate}</span>: 
            <span class="amount">${amountText}</span>
            <span class="purpose">${entry.purpose}</span> 
            <span class="status ${statusClass}">${statusEmoji} ${statusText}</span>
        `;
        fullList.appendChild(li);
    });
}

function setupPopup() {
    const infoIcon = document.getElementById('info-icon');
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.close-button');

    infoIcon.addEventListener('click', () => {
        createFullList(140); // Use a default exchange rate for simplicity
        popup.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    popup.addEventListener('mouseleave', () => {
        popup.style.display = 'none';
    });
}

async function createCumulativeChart(exchangeRate) {
    try {
        const ctx = document.getElementById('cumulativeChart').getContext('2d');
        const yearlyData = data.reduce((acc, entry) => {
            const year = entry.date.split('-')[0];
            if (!acc[year]) acc[year] = { allocated: 0, committed: 0 };
            if (entry.amount !== null) {
                const amountJPY = entry.currency === 'JPY' ? entry.amount : entry.amount * exchangeRate;
                if (entry.status === 'Allocation') {
                    acc[year].allocated += amountJPY;
                } else {
                    acc[year].committed += amountJPY;
                }
            }
            return acc;
        }, {});

        const years = Object.keys(yearlyData);
        const allocatedData = years.map(year => yearlyData[year].allocated);
        const committedData = years.map(year => yearlyData[year].committed);

        const totalAllocated = allocatedData.reduce((sum, value) => sum + value, 0);
        const totalCommitted = committedData.reduce((sum, value) => sum + value, 0);

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [...years, '合計'],
                datasets: [
                    {
                        label: '割当済 (円)',
                        data: [...allocatedData, totalAllocated],
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    },
                    {
                        label: '確定済 (円)',
                        data: [...committedData, totalCommitted],
                        backgroundColor: 'rgba(255, 159, 64, 0.6)',
                        borderColor: 'rgba(255, 159, 64, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        stacked: true,
                        ticks: {
                            callback: function(value) {
                                return formatJapaneseNumber(value) + '円';
                            }
                        }
                    },
                    x: {
                        stacked: true
                    }
                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            let label = data.datasets[tooltipItem.datasetIndex].label || '';
                            if (label) {
                                label += ': ';
                            }
                            const value = tooltipItem.yLabel;
                            label += formatLargeJapaneseNumber(value) + '円';
                            return label;
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error("Error creating chart:", error);
    }
}

function calculateAndVerifyTotals(data, exchangeRate, expectedTotalUSD) {
    let yearlyAllocations = {};
    let yearlyCommitments = {};
    let overallAllocations = 0;
    let overallCommitments = 0;

    data.forEach(entry => {
        const year = entry.date.split('-')[0];
        if (!yearlyAllocations[year]) yearlyAllocations[year] = 0;
        if (!yearlyCommitments[year]) yearlyCommitments[year] = 0;
        
        if (entry.amount !== null) {
            const amountJPY = entry.currency === 'JPY' ? entry.amount : entry.amount * exchangeRate;
            if (entry.status === 'Allocation') {
                yearlyAllocations[year] += amountJPY;
                overallAllocations += amountJPY;
            } else if (entry.status === 'Commitment') {
                yearlyCommitments[year] += amountJPY;
                overallCommitments += amountJPY;
            }
        }
    });

    const overallTotal = overallAllocations + overallCommitments;
    const expectedTotalJPY = expectedTotalUSD * exchangeRate * 1000000000;
    
    console.log('Yearly Allocations (JPY):', yearlyAllocations);
    console.log('Yearly Commitments (JPY):', yearlyCommitments);
    console.log('Overall Allocations (JPY):', overallAllocations);
    console.log('Overall Commitments (JPY):', overallCommitments);
    console.log('Overall Total (JPY):', overallTotal);
    console.log('Expected Total (JPY):', expectedTotalJPY);
    console.log('Difference:', overallTotal - expectedTotalJPY);
    console.log('Difference Percentage:', ((overallTotal - expectedTotalJPY) / expectedTotalJPY) * 100 + '%');

    // Add this detailed breakdown
    data.forEach(entry => {
        if (entry.amount !== null) {
            const amountJPY = entry.currency === 'JPY' ? entry.amount : entry.amount * exchangeRate;
            console.log(`${entry.date} - ${entry.purpose}: ${amountJPY.toFixed(2)} JPY (${entry.status})`);
        }
    });

    return { yearlyAllocations, yearlyCommitments, overallAllocations, overallCommitments, overallTotal };
}

async function updateDisplay() {
    let exchangeRate;
    try {
        exchangeRate = await getExchangeRate();
    } catch (error) {
        console.error("Error fetching exchange rate:", error);
        exchangeRate = 140; // Use a default rate if fetching fails
    }
    console.log("Current exchange rate:", exchangeRate);

    const { overallAllocations, overallCommitments } = calculateAndVerifyTotals(data, exchangeRate, totalAmount);

    const grandTotalJPY = overallAllocations + overallCommitments;
    const allocatedTotalJPY = overallAllocations;
    const committedTotalJPY = overallCommitments;

    const amountElement = document.getElementById('amount');
    const amountJapaneseElement = document.getElementById('amountJapanese');

    amountElement.textContent = `${formatJapaneseNumber(grandTotalJPY)}円`;
    amountJapaneseElement.textContent = `(割当済: ${formatJapaneseNumber(allocatedTotalJPY)}円、確定済: ${formatJapaneseNumber(committedTotalJPY)}円)`;

    const sliderContainer = document.getElementById('slider-container');
    const slider = document.getElementById('slider');
    if (sliderContainer && slider) {
        slider.innerHTML = ''; // Clear existing slides
        data.forEach(entry => {
            const slide = createSlide(entry, exchangeRate);
            slider.appendChild(slide);
        });
        console.log('Slides created:', slider.children.length);
        setupSlider(); // Call this after creating slides
    } else {
        console.error('Slider container or slider element not found');
    }

    await createCumulativeChart(exchangeRate);

    const lastUpdateDate = new Date(Math.max(...data.map(entry => new Date(entry.date))));
    document.getElementById('lastUpdated').textContent = `最終更新日: ${formatJapaneseDate(lastUpdateDate.toISOString().split('T')[0])}`;
}

function setupSlider() {
    const slider = document.getElementById('slider');
    const slides = slider ? slider.querySelectorAll('.slide') : [];
    let currentIndex = 0;

    console.log('Number of slides:', slides.length);

    if (!slider || slides.length === 0) {
        console.error('Slider or slides not found');
        return;
    }

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'flex';
                setTimeout(() => {
                    slide.classList.add('active');
                    slide.classList.remove('inactive');
                }, 20);
            } else {
                slide.classList.remove('active');
                slide.classList.add('inactive');
                setTimeout(() => {
                    slide.style.display = 'none';
                    slide.classList.remove('inactive');
                }, 400);
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Auto-slide every 4 seconds (reduced from 5)
    setInterval(nextSlide, 4000);

    showSlide(currentIndex);
}

function formatLargeJapaneseNumber(num) {
    const units = ['', '万', '億', '兆'];
    let unitIndex = 0;
    while (num >= 10000 && unitIndex < units.length - 1) {
        num /= 10000;
        unitIndex++;
    }
    return Math.floor(num).toLocaleString() + units[unitIndex];
}

function setupShareButton() {
    const shareButton = document.getElementById('shareButton');
    if (shareButton) {
        shareButton.addEventListener('click', async () => {
            const shareData = {
                title: '日本政府が送ったウクライナへの支援金',
                url: 'https://jpua.xyz'
            };

            if (navigator.share) {
                try {
                    await navigator.share(shareData);
                } catch (err) {
                    console.error('Error sharing:', err);
                }
            } else {
                // Fallback to copying URL to clipboard
                navigator.clipboard.writeText(shareData.url).then(() => {
                    alert('URLがクリップボードにコピーされました');
                }, (err) => {
                    console.error('Could not copy text: ', err);
                });
            }
        });
    }
}

// Call this function when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateDisplay()
        .then(() => {
            setupSlider();
            setupPopup();
            setupShareButton();
            calculateAndVerifyTotals(data, 140, totalAmount);
        })
        .catch(error => console.error("Error in updateDisplay:", error));
});