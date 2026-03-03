
const productData = {
    earbuds: [
        { name: 'AudioLuxe Elite', price: '$199', image: 'earbuds1', description: 'Premium wireless earbuds with ANC' },
        { name: 'AudioLuxe Air', price: '$129', image: 'earbuds7', description: 'Lightweight earbuds for everyday use' },
        { name: 'AudioLuxe Sport', price: '$149', image: 'earbuds8', description: 'Water-resistant earbuds for active lifestyle' },
        { name: 'AudioLuxe Mini', price: '$99', image: 'earbuds9', description: 'Compact earbuds with great sound' }
    ],
    headphones: [
        { name: 'AudioLuxe Studio', price: '$299', image: 'headphones1', description: 'Over-ear studio headphones' },
        { name: 'AudioLuxe Travel', price: '$199', image: 'headphones2', description: 'Noise-canceling travel headphones' },
        { name: 'AudioLuxe Wireless', price: '$179', image: 'headphones3', description: 'Bluetooth on-ear headphones' }
    ],
    speakers: [
        { name: 'AudioLuxe Boom', price: '$149', image: 'speaker1', description: 'Portable Bluetooth speaker' },
        { name: 'AudioLuxe Home', price: '$299', image: 'speaker2', description: 'Smart home speaker with AI' },
        { name: 'AudioLuxe Party', price: '$399', image: 'speaker3', description: 'High-power party speaker' }
    ],
    accessories: [
        { name: 'Charging Case Pro', price: '$49', image: 'acc1', description: 'Extra charging case' },
        { name: 'Ear Tips Set', price: '$19', image: 'acc2', description: 'Multiple size ear tips' },
        { name: 'Cable Kit', price: '$29', image: 'acc3', description: 'Charging and audio cables' }
    ]
};

const featureProducts = {
    sound: [
        { name: 'AudioLuxe Elite', price: '$199', image: 'earbuds1', description: 'Premium sound quality' },
        { name: 'AudioLuxe Studio', price: '$299', image: 'headphones1', description: 'Studio-grade audio' },
        { name: 'AudioLuxe Boom', price: '$149', image: 'speaker1', description: '360° sound experience' }
    ],
    anc: [
        { name: 'AudioLuxe Elite', price: '$199', image: 'earbuds1', description: 'Advanced ANC technology' },
        { name: 'AudioLuxe Travel', price: '$199', image: 'headphones2', description: 'Superior noise cancellation' }
    ],
    battery: [
        { name: 'AudioLuxe Elite', price: '$199', image: 'earbuds1', description: '30-hour battery life' },
        { name: 'AudioLuxe Boom', price: '$149', image: 'speaker1', description: '24-hour playtime' }
    ],
    water: [
        { name: 'AudioLuxe Sport', price: '$149', image: 'earbuds8', description: 'IPX7 water resistant' },
        { name: 'AudioLuxe Boom', price: '$149', image: 'speaker1', description: 'IPX5 water resistant' }
    ],
    calls: [
        { name: 'AudioLuxe Elite', price: '$199', image: 'earbuds1', description: 'Crystal clear calls' },
        { name: 'AudioLuxe Travel', price: '$199', image: 'headphones2', description: 'Professional call quality' }
    ],
    bluetooth: [
        { name: 'AudioLuxe Elite', price: '$199', image: 'earbuds1', description: 'Bluetooth 5.3' },
        { name: 'AudioLuxe Wireless', price: '$179', image: 'headphones3', description: 'Stable wireless connection' }
    ]
};

// Gallery data with real image URLs (Unsplash)
const galleryData = {
    ergonomic: {
        title: 'Ergonomic Design',
        mainImage: 'https://m.media-amazon.com/images/I/51V2wflThBL._AC_SL1500_.jpg',
        images: [
            'https://images.squarespace-cdn.com/content/v1/5beb251ab40b9dd2724c2f46/b44d9f4f-e4d6-4e90-8a4b-4fa5387c97b8/SoundPEATS+Engine4+sound+quality+review.jpg',
            'https://m.media-amazon.com/images/I/619eApxKoeL._AC_.jpg',
            'https://m.media-amazon.com/images/I/61MgPeUAfvL.jpg',
            'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6546/6546239_rd.jpg',
            'https://ac3filter.b-cdn.net/wp-content/uploads/Earbuds-Mesh.jpg',
            'https://m.media-amazon.com/images/I/51B6+Iyd3ML.jpg'
        ],
        description: 'Designed for maximum comfort during extended wear. The ergonomic shape ensures a secure fit that stays comfortable all day long.',
        features: [
            'Custom-molded ear tips for perfect fit',
            'Lightweight design (5.4g per earbud)',
            'Multiple ear tip sizes included',
            'Secure fit for active lifestyle'
        ],
        products: ['AudioLuxe Elite', 'AudioLuxe Air', 'AudioLuxe Sport']
    },
    comfort: {
        title: 'Comfortable Fit',
        mainImage: 'https://m.media-amazon.com/images/I/71iBJ8MknGL._AC_SL1500_.jpg',
        images: [
            'https://cdn.shopify.com/s/files/1/0362/2465/files/blog_d5000-exploded-eng-2.jpg?677',
            'https://sm.pcmag.com/t/pcmag_au/review/a/audio-tech/audio-technica-ath-m20xbt_57vz.3840.jpg',
            'https://m.media-amazon.com/images/I/91bmzyheflL._AC_.jpg',
            'https://m.media-amazon.com/images/I/71JyOm2zWdL.jpg',
            'https://i.ytimg.com/vi/N__3Ugle-II/hqdefault.jpg'
        ],
        description: 'Multiple ear tip sizes included to ensure the perfect fit for every ear shape. Lightweight design prevents fatigue.',
        features: [
            '3 sizes of silicone ear tips',
            'Memory foam option available',
            'Pressure-free design',
            'All-day comfort guarantee'
        ],
        products: ['AudioLuxe Elite', 'AudioLuxe Mini', 'AudioLuxe Air']
    },
    charging: {
        title: 'Compact Charging Case',
        mainImage: 'https://m.media-amazon.com/images/I/71bjg7lvWhL._AC_.jpg',
        images: [
            'https://m.media-amazon.com/images/I/71QX95fJocL._AC_.jpg',
            'https://m.media-amazon.com/images/I/41u8vi8tWNL._AC_.jpg',
            'https://m.media-amazon.com/images/I/81FoK3-68DL.jpg',
            'https://i5.walmartimages.com/seo/Toplive-Cable-Organizer-Pouch-Electronic-Travel-Case-Portable-Waterproof-Double-Layers-All-in-One-Storage-Bag-Cord-Charger-Phone-Earphone-Dark-Green_d852b4d8-28ae-42dd-a3bb-2331b4cb4397.82e1771dd89e64dc912afde0cb6e2c27.jpeg'
        ],
        description: 'Pocket-sized charging case provides multiple charges on the go. LED indicators show battery level at a glance.',
        features: [
            '23 hours additional battery',
            'USB-C and wireless charging',
            'LED battery indicators',
            'Fast charging support'
        ],
        products: ['AudioLuxe Elite', 'AudioLuxe Air', 'AudioLuxe Sport']
    },
    lifestyle: {
        title: 'Active Lifestyle',
        mainImage: 'https://thumbs.dreamstime.com/b/black-woman-fitness-stretching-exercise-earphones-music-motivation-active-lifestyle-outdoors-african-american-strong-focus-259249029.jpg',
        images: [
            'https://robots.net/wp-content/uploads/2023/10/13-amazing-noise-cancelling-headphones-for-airplane-travel-for-2023-1697093932.jpg',
           'https://canary.contestimg.wish.com/api/webimage/638e933a333274cac2e0874b-large.jpg?cache_buster=c388589efa530804376ad0cec964f3e1',
           'https://www.slashgear.com/img/gallery/10-of-the-best-wireless-headphones-for-every-budget/l-intro-1735414739.jpg',
           'https://assets.bosecreative.com/transform/6dec3608-11a5-4815-b5b1-cac7bedbee3a/CTP-46351_SF_PDP_IMG-1?io=transform:fit,height:1000,width:1000&quality=95'
        ],
        description: 'Perfect for workouts, running, and outdoor activities. Sweat-resistant and secure fit for active use.',
        features: [
            'IPX5 water resistance',
            'Sweat-proof design',
            'Secure sport fit',
            'Touch controls for easy use'
        ],
        products: ['AudioLuxe Sport', 'AudioLuxe Elite', 'AudioLuxe Mini']
    },
    package: {
        title: 'Complete Package',
        mainImage: 'https://cdn.shopify.com/s/files/1/0617/2308/3005/products/6956a8c4-0d09-4b4c-855c-a1cdfad93406_1024x.jpg?v=1668172670',
        images: [
            'https://cdn.mos.cms.futurecdn.net/vWUM26ht97JKhqcxP5HDqC.jpg',
            'https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2023/06/52927833779_6b13ef1ef2_o.jpg',
            'https://www.yankodesign.com/images/design_news/2019/12/auto-draft/pats_modular_headphone_speaker-yankodesign08.jpg',
            'http://images.summitmedia-digital.com/spotph/images/2022/02/11/marshall-headphones-640-1644577026.jpg',
        ],
        features: [

            'Complete accessory kit',
            'Premium packaging',
            '2-year warranty included',
            '30-day money-back guarantee'
        ],
        products: ['AudioLuxe Elite', 'AudioLuxe Air', 'AudioLuxe Sport']
    }
};


const supportContent = {
    guides: {
    title: 'User Guides',
    content: `
        <div class="content-card">
            <h3>Quick Start Guides</h3>
            <div class="row g-3">
                <div class="col-sm-6">
                    <div class="d-flex align-items-center p-3 bg-light rounded">
                        <i class="bi bi-box fs-1 text-primary me-3"></i>
                        <div>
                            <h5 class="mb-1">Unboxing & Setup</h5>
                            <p class="mb-0 small">First steps to get started.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="d-flex align-items-center p-3 bg-light rounded">
                        <i class="bi bi-bluetooth fs-1 text-primary me-3"></i>
                        <div>
                            <h5 class="mb-1">Bluetooth Pairing</h5>
                            <p class="mb-0 small">Connect to any device.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="d-flex align-items-center p-3 bg-light rounded">
                        <i class="bi bi-hand-index-thumb fs-1 text-primary me-3"></i>
                        <div>
                            <h5 class="mb-1">Touch Controls</h5>
                            <p class="mb-0 small">Gestures and shortcuts.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="d-flex align-items-center p-3 bg-light rounded">
                        <i class="bi bi-battery-charging fs-1 text-primary me-3"></i>
                        <div>
                            <h5 class="mb-1">Charging Tips</h5>
                            <p class="mb-0 small">Maximize battery life.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
},
    warranty: {
        title: 'Warranty Information',
        content: `
            <div class="content-card">
                <h3>2-Year Premium Warranty</h3>
                <p>All AudioLuxe products come with a comprehensive 2-year warranty that covers manufacturing defects and hardware failures.</p>
                <h4>What's Covered:</h4>
                <ul class="content-list">
                    <li>✓ Manufacturing defects</li>
                    <li>✓ Battery replacement (after 500 cycles)</li>
                    <li>✓ Button and touch control failures</li>
                    <li>✓ Charging port issues</li>
                </ul>
                <h4>How to Claim:</h4>
                <p>Contact our support team with your proof of purchase and product serial number. We'll process your claim within 24 hours.</p>
            </div>
        `
    },
    contact: {
        title: 'Contact Us',
        content: `
            <div class="content-card">
                <h3>Get in Touch</h3>
                <p>Our support team is here to help you 24/7.</p>
                <div class="row mt-4">
                    <div class="col-md-6">
                        <h5><i class="bi bi-chat-dots text-primary me-2"></i>Live Chat</h5>
                        <p>Available 24/7 on our website</p>
                    </div>
                    <div class="col-md-6">
                        <h5><i class="bi bi-envelope text-primary me-2"></i>Email</h5>
                        <p>support@audioluxe.com</p>
                    </div>
                    <div class="col-md-6">
                        <h5><i class="bi bi-telephone text-primary me-2"></i>Phone</h5>
                        <p>1-800-AUDIOLUXE (Mon-Fri, 9am-6pm EST)</p>
                    </div>
                    <div class="col-md-6">
                        <h5><i class="bi bi-geo-alt text-primary me-2"></i>Address</h5>
                        <p>123 Audio Street, Sound City, SC 12345</p>
                    </div>
                </div>
            </div>
        `
    },
    faqs: {
        title: 'Frequently Asked Questions',
        content: `
            <div class="content-card">
                <h3>Common Questions</h3>
                <div class="accordion" id="supportFaqAccordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#supportFaq1">
                                How long does the battery last?
                            </button>
                        </h2>
                        <div id="supportFaq1" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                                Up to 7 hours on a single charge, with 23 additional hours from the charging case.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#supportFaq2">
                                Are they waterproof?
                            </button>
                        </h2>
                        <div id="supportFaq2" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                They have IPX5 water resistance, making them sweat-proof and splash-resistant.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
};


const companyContent = {
    about: {
        title: 'About AudioLuxe',
        content: `
            <div class="content-card">
                <h3>Our Story</h3>
                <p>Founded in 2020, AudioLuxe has been dedicated to creating exceptional audio experiences that enhance every moment of your life. We believe that great sound shouldn't be a luxury—it should be accessible to everyone.</p>
                <h4>Our Mission</h4>
                <p>To innovate and deliver premium audio products that combine cutting-edge technology with beautiful design, all at an affordable price point.</p>
                <h4>Our Values</h4>
                <ul class="content-list">
                    <li>🎵 Passion for Audio Excellence</li>
                    <li>🚀 Continuous Innovation</li>
                    <li>🌍 Environmental Responsibility</li>
                    <li>🤝 Customer-First Approach</li>
                </ul>
            </div>
        `
    },
    careers: {
        title: 'Careers at AudioLuxe',
        content: `
            <div class="content-card">
                <h3>Join Our Team</h3>
                <p>We're always looking for talented individuals who share our passion for audio innovation and customer satisfaction.</p>
                <h4>Open Positions:</h4>
                <ul class="content-list">
                    <li>Senior Audio Engineer</li>
                    <li>Product Designer</li>
                    <li>Marketing Manager</li>
                    <li>Customer Support Specialist</li>
                </ul>
                <p>Send your resume to careers@audioluxe.com</p>
            </div>
        `
    },
    press: {
        title: 'Press & Media',
        content: `
            <div class="content-card">
                <h3>Press Releases</h3>
                <ul class="content-list">
                    <li><strong>Oct 2023:</strong> AudioLuxe Elite Wins "Best Earbuds of 2023" Award</li>
                    <li><strong>Sep 2023:</strong> Company Raises $50M in Series B Funding</li>
                    <li><strong>Aug 2023:</strong> AudioLuxe Expands to 50+ Countries</li>
                </ul>
                <h4>Media Kit</h4>
                <p>Download our media kit including logos, product images, and company information.</p>
            </div>
        `
    },
    blog: {
        title: 'AudioLuxe Blog',
        content: `
            <div class="content-card">
                <h3>Latest Posts</h3>
                <ul class="content-list">
                    <li><strong>The Science of Sound:</strong> How We Engineer Perfect Audio</li>
                    <li><strong>5 Tips for Better Earbud Hygiene</strong></li>
                    <li><strong>Understanding Noise Cancellation Technology</strong></li>
                    <li><strong>How to Choose the Right Earbuds for You</strong></li>
                </ul>
            </div>
        `
    }
};


const legalContent = {
    privacy: {
        title: 'Privacy Policy',
        content: `
            <div class="content-card">
                <h3>Your Privacy Matters</h3>
                <p>At AudioLuxe, we are committed to protecting your personal information and privacy. This policy outlines how we collect, use, and safeguard your data.</p>
                <h4>Information We Collect:</h4>
                <ul class="content-list">
                    <li>• Name and contact information</li>
                    <li>• Purchase history</li>
                    <li>• Device usage data</li>
                    <li>• Technical information</li>
                </ul>
                <p>We never sell your personal information to third parties. All data is encrypted and stored securely.</p>
            </div>
        `
    },
    terms: {
        title: 'Terms of Service',
        content: `
            <div class="content-card">
                <h3>Terms and Conditions</h3>
                <p>By using AudioLuxe products and services, you agree to the following terms:</p>
                <ul class="content-list">
                    <li>• Products are sold with a 2-year warranty</li>
                    <li>• 30-day money-back guarantee</li>
                    <li>• Free shipping on orders over $50</li>
                    <li>• International customers may incur customs fees</li>
                </ul>
                <p>For full terms and conditions, please download our complete terms document.</p>
            </div>
        `
    },
    cookies: {
        title: 'Cookie Policy',
        content: `
            <div class="content-card">
                <h3>Cookie Policy</h3>
                <p>We use cookies to enhance your experience on our website:</p>
                <ul class="content-list">
                    <li>• Essential cookies for site functionality</li>
                    <li>• Analytics cookies to improve our services</li>
                    <li>• Marketing cookies for personalized content</li>
                </ul>
                <p>You can manage your cookie preferences in your browser settings.</p>
            </div>
        `
    },
    accessibility: {
        title: 'Accessibility Statement',
        content: `
            <div class="content-card">
                <h3>Accessibility Commitment</h3>
                <p>AudioLuxe is committed to ensuring digital accessibility for people with disabilities.</p>
                <ul class="content-list">
                    <li>• WCAG 2.1 AA compliant website</li>
                    <li>• Screen reader compatible</li>
                    <li>• Keyboard navigation support</li>
                    <li>• High contrast mode available</li>
                </ul>
                <p>If you encounter any accessibility issues, please contact us at accessibility@audioluxe.com</p>
            </div>
        `
    }
};


function showPurchaseModal(name, imageUrl, price, description) {
    const modal = document.getElementById('purchaseModal');
    
   
    document.getElementById('modalProductImage').src = imageUrl;
    document.getElementById('modalProductImage').alt = name;
    document.getElementById('modalProductName').textContent = name;
    document.getElementById('modalProductDesc').textContent = description;
    document.getElementById('modalProductPrice').textContent = `$${price}`;
    
    
    document.getElementById('orderProductName').textContent = name;
    document.getElementById('orderProductPrice').textContent = `$${price}`;
    
   
    const tax = (price * 0.1).toFixed(2);
    const total = (price + parseFloat(tax)).toFixed(2);
    document.getElementById('orderTax').textContent = `$${tax}`;
    document.getElementById('orderTotal').textContent = `$${total}`;
    
  
    new bootstrap.Modal(modal).show();
}

function showGalleryDetail(type) {
    const data = galleryData[type];
    document.getElementById('galleryModalTitle').textContent = data.title;
    
    let galleryHtml = `
        <div class="row">
            <div class="col-md-6">
                <img src="${data.mainImage}" alt="${data.title}" class="img-fluid rounded main-image">
            </div>
            <div class="col-md-6">
                <h4>${data.title}</h4>
                <p>${data.description}</p>
                <h5 class="mt-4">Key Features:</h5>
                <ul>
                    ${data.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                <h5 class="mt-4">Featured Products:</h5>
                <p>${data.products.join(', ')}</p>
            </div>
        </div>
        <h5 class="mt-4 mb-3">More Images:</h5>
        <div class="gallery-grid">
    `;
    
    data.images.forEach((imgUrl, index) => {
        galleryHtml += `
            <div class="gallery-thumb" onclick="changeMainImage('${imgUrl}')">
                <img src="${imgUrl}" alt="Gallery Image ${index + 1}">
            </div>
        `;
    });
    
    galleryHtml += `</div>`;
    document.getElementById('galleryModalBody').innerHTML = galleryHtml;
    
    const modal = new bootstrap.Modal(document.getElementById('galleryModal'));
    modal.show();
}

function changeMainImage(imageUrl) {
    const mainImage = document.querySelector('.main-image');
    if (mainImage) {
        mainImage.src = imageUrl;
    }
}


function showSupport(topic) {
    const data = supportContent[topic];
    document.getElementById('infoModalTitle').textContent = data.title;
    document.getElementById('infoModalBody').innerHTML = data.content;
    new bootstrap.Modal(document.getElementById('infoModal')).show();
}

function showCompany(topic) {
    const data = companyContent[topic];
    document.getElementById('infoModalTitle').textContent = data.title;
    document.getElementById('infoModalBody').innerHTML = data.content;
    new bootstrap.Modal(document.getElementById('infoModal')).show();
}

function showLegal(topic) {
    const data = legalContent[topic];
    document.getElementById('infoModalTitle').textContent = data.title;
    document.getElementById('infoModalBody').innerHTML = data.content;
    new bootstrap.Modal(document.getElementById('infoModal')).show();
}


function showProducts(category) {
    if (category === 'accessories') {
       
        alert('Accessories page coming soon!');
    }
}


function displayProducts(sectionId, title, subtitle, products) {
    const section = document.getElementById(sectionId);
    section.classList.add('active');
    document.getElementById('productsTitle').textContent = title;
    document.getElementById('productsSubtitle').textContent = subtitle;
    
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="https://picsum.photos/seed/${product.image}/300/200.jpg" alt="${product.name}">
                <div class="product-card-body">
                    <h5 class="product-card-title">${product.name}</h5>
                    <p class="text-muted">${product.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="product-card-price">${product.price}</span>
                        <button class="btn btn-primary btn-sm" onclick="showPurchaseModal()">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
    
    window.scrollTo(0, 0);
}


function showHome() {
    hideAllSections();
    document.getElementById('mainContent').style.display = 'block';
    window.scrollTo(0, 0);
}

function hideAllSections() {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('productsSection').classList.remove('active');
    document.getElementById('supportSection').classList.remove('active');
    document.getElementById('companySection').classList.remove('active');
    document.getElementById('legalSection').classList.remove('active');
}


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('purchaseForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your order! Your COD request has been confirmed. We will deliver within 2-3 business days.');
            bootstrap.Modal.getInstance(document.getElementById('purchaseModal')).hide();
            form.reset();
        });
    }
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
    }
});
