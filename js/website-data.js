const WEBSITE_NAME = 'website name';
const WEBSITE_URL = 'website url';
const WEBSITE_CORP = 'website corp';
const WEBSITE_PHONE = 'website phone';
const WEBSITE_EMAIL = 'website email';
const WEBSITE_ADDRESS = 'website address';
const WEBSITE_RETURN_ADDRESS = 'website return address';
const WEBSITE_DESCRIPTOR = 'website desc';

let websiteName = document.querySelectorAll('.js_website-name');
let websiteUrl = document.querySelectorAll('.js_website-url');
let websiteCorp = document.querySelectorAll('.js_website-corp');
let websitePhone = document.querySelectorAll('.js_website-phone');
let websiteEmail = document.querySelectorAll('.js_website-email');
let websiteAddress = document.querySelectorAll('.js_website-address');
let websiteReturnAddress = document.querySelectorAll('.js_website-return-address');
let websiteDescriptor = document.querySelectorAll('.js_website-desc');

let allLogoDataText = document.querySelectorAll('.js_logo-data');
allLogoDataText = [...allLogoDataText];
allLogoDataText.forEach(item => {
    item.setAttribute('data-text', WEBSITE_NAME);
})


websiteName = [...websiteName];
websiteUrl = [...websiteUrl];
websiteCorp = [...websiteCorp];
websitePhone = [...websitePhone];
websiteAddress = [...websiteAddress];
websiteDescriptor = [...websiteDescriptor];

// SET WEBSITE TITLE
document.title = WEBSITE_NAME;

if(!(websiteName.length === 0)) {
    setInformation(websiteName, WEBSITE_NAME);
}

if(!(websiteUrl.length === 0)) {
    setInformation(websiteUrl, WEBSITE_URL);
    setWebsiteHref(websiteUrl, WEBSITE_URL);
}

if(!(websiteCorp.length === 0)) {
    setInformation(websiteCorp, WEBSITE_CORP);
}

if(!(websitePhone.length === 0)) {
    setInformation(websitePhone, WEBSITE_PHONE);
    setPhoneHref(websitePhone, WEBSITE_PHONE);
}

if(!(websiteEmail.length === 0)) {
    setInformation(websiteEmail, WEBSITE_EMAIL);
    setEmailHref(websiteEmail, WEBSITE_EMAIL);
}

if(!(websiteAddress.length === 0)) {
    setInformation(websiteAddress, WEBSITE_ADDRESS);
}

if(!(websiteReturnAddress.length === 0)) {
    setInformation(websiteReturnAddress, WEBSITE_RETURN_ADDRESS);
}

if(!(websiteDescriptor.length === 0)) {
    setInformation(websiteDescriptor, WEBSITE_DESCRIPTOR);
}


function setInformation(array, info) {
    array.forEach(item => {
        item.textContent = info;
    });
}

function setWebsiteHref(array, info) {
    array.forEach(item => {
       item.hasAttribute('href') && item.setAttribute('href', info);
    });
}

function setPhoneHref(array, info) {
    array.forEach(item => {
       const href = `tel:${info}`;
       item.hasAttribute('href') && item.setAttribute('href', href);
    });
}

function setEmailHref(array, info) {
    array.forEach(item => {
        const href = `mailto:${info}`
        item.setAttribute('href', href);
    });
}

