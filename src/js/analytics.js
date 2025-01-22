let eventData = sessionStorage.getItem('eventData');
let donationData = sessionStorage.getItem('donationData');
let mobilePhoneData = sessionStorage.getItem('mobilePhoneData');
const pageName_noNum = pageJson.pageType + ':' + pageJson.campaignPageId + '-' + pageJson.campaignId + ':' + pageJson.pageName.replace(/;|,|(|)/g, '');
const pageName_Num = pageName_noNum + '/' + pageJson.pageNumber;

const utag_data = {
    'channel': 'preserve.nature.org',
    'constituent_id': pageJson.supporterId ? pageJson.supporterId : '',
    'en_campaignId': pageJson.campaignId,
    'en_code': '2025-01-13',
    'en_page_count': pageJson.pageCount,
    'en_page_number': pageJson.pageNumber,
    'en_txn6': pageJson.externalReference6,
    'hier1': 'preserve.nature.org|' + pageJson.pageType,
    'locale': pageJson.locale,
    'page_category': 'none',
    'page_id': pageJson.campaignPageId,
    'page_name': pageName_Num,
    'site_group': 'engaging networks:' + pageJson.pageType,
    'site_section': 'engaging networks',
    'site_section_2': 'engaging networks|' + pageJson.pageType,
    'site_section_3': 'engaging networks|' + pageJson.pageType,
    'site_section_4': 'engaging networks|' + pageJson.pageType,
};

/******* Parse DonationData, MobileData, and EventData ******/
if (donationData && typeof JSON.parse(donationData) === 'object') {
    donationData = JSON.parse(donationData);
}
if (eventData && typeof JSON.parse(eventData) === 'object') {
    eventData = JSON.parse(eventData);
}
if (mobilePhoneData && typeof JSON.parse(mobilePhoneData) === 'object') {
    mobilePhoneData = JSON.parse(mobilePhoneData);
}

/******** Donation Flows Logic Check Statements Begin *******/

const is_non_ecard_donation_final_page = (
    pageJson.pageNumber === pageJson.pageCount &&
    pageJson.pageType === 'donation' &&
    donationData &&
    (!donationData.ecardSelected || donationData.ecardSelected !== 'true')
);

const is_engrid_ecard_final_page = (
    document.querySelector('body[data-engrid-theme="tnc"]') &&
    pageJson.pageNumber === pageJson.pageCount &&
    donationData &&
    donationData.ecardSelected === 'true' &&
    pageJson.pageType === 'donation'
);

const is_old_ecard_flow_final_page = (
    !document.querySelector('body[data-engrid-theme="tnc"]') &&
    pageJson.pageNumber === pageJson.pageCount &&
    pageJson.pageType === 'e-card' && 
    donationData &&
    donationData.ecardSelected === 'true'
);

/******** Donation Flows Logic Check Statements End ********/

// Add on to data layer for specific page types

// Donation Specific Fields
if (pageJson.pageType === 'donation') {
    utag_data.donation_form_id = pageJson.campaignPageId;
    utag_data.form_name = pageName_noNum;
    utag_data.product_id = [pageName_noNum];
    if (pageJson.pageNumber == '1') {
        utag_data.form_type = 'donation';
        utag_data.page_category = 'donation';
    }
}

/******** Successful Donations - eCard and non-ecard analytics Start ********/

// Successful Donation/Donation + eCard Fields
if (
    is_engrid_ecard_final_page ||
    is_non_ecard_donation_final_page ||
    is_old_ecard_flow_final_page
) {

    const {
        address1 = '',
        city = '',
        emailAddress = '',
        en_txn1 = '',
        extraAmount = '',
        firstName = '',
        lastName = '',
        phoneNumber = '',
        state = '',
        vid = '',
        vid2 = '',
        zipCode = '',
    } = donationData;

    // Common Fields for e-card and no e-card donation Flows
    utag_data.campaign_tag = en_txn1;
    utag_data.const_address = address1;
    utag_data.const_city = city;
    utag_data.const_first = firstName;
    utag_data.const_last = lastName;
    utag_data.const_phone = phoneNumber;
    utag_data.customer_country = pageJson.country;
    utag_data.customer_postal_code = zipCode;
    utag_data.customer_state = state;
    utag_data.email = emailAddress;
    utag_data.email_signup_location = 'donation';
    utag_data.en_donation_type = pageJson.recurring;
    utag_data.form_type = 'donation';
    utag_data.order_currency_code = 'USD';
    utag_data.order_id = pageJson.donationLogId.toString();
    utag_data.order_total = pageJson.amount.toString();
    utag_data.page_name = pageName_Num + '-complete';
    utag_data.payment_method_dl = pageJson.paymentType;
    utag_data.pixel_id = vid;
    utag_data.pixel_id2 = vid2;
    utag_data.product_quantity = ['1'];
    utag_data.product_unit_price = [utag_data.order_total];
    utag_data.tip_jar = extraAmount;

}


// Donation Confirmation with no eCard
if (is_non_ecard_donation_final_page) {
    const { isEmailOptInChecked = false } = donationData;
    utag_data.page_category = isEmailOptInChecked ? 'don_emt_emo_submit' : 'don_emt_submit';

    if (mobilePhoneData && mobilePhoneData.phoneNumber) {
        utag_data.page_category = isEmailOptInChecked ? 'don_emt_emo_txt_submit' : 'don_emt_txt_submit';
        utag_data.text_signup_location = 'donation';
    }
}

// Donation confirmation with eCard
if (is_engrid_ecard_final_page || is_old_ecard_flow_final_page) {
    const { isEmailOptInChecked = false } = donationData;
    const { campaignPageId, productId } = donationData;
    utag_data.donation_form_id = campaignPageId;
    utag_data.form_name = productId;
    utag_data.product_id = [productId];
    if (mobilePhoneData && mobilePhoneData.phoneNumber) {
        utag_data.page_category = isEmailOptInChecked ? 'don_emt_emo_txt_ecrd_submit' : 'don_emt_txt_ecrd_submit';
    } else {
        utag_data.page_category = isEmailOptInChecked ? 'don_emt_emo_ecrd_submit' : 'donation_ecard';
    }
}
/******** Successful Donations - eCard and non-eCard analytics End ********/


//quiz or survey
if (pageJson.pageType == 'survey') {
    utag_data.form_name = pageName_noNum;
    utag_data.form_type = 'survey';
    if (pageJson.pageNumber == '1') {
        utag_data.page_category = 'form_view';
    }
    if (pageJson.pageNumber == pageJson.pageCount) {
        utag_data.page_category = 'form_submitted';
        utag_data.page_name = pageName_Num + '-complete';
    }
}

//advocacy
if ((pageJson.pageType == 'emailtotarget' || pageJson.pageType == 'advocacypetition') && pageJson.pageNumber == '1') {
    utag_data.action_id = pageName_noNum;
    utag_data.action_type = pageJson.pageType;
    utag_data.form_name = pageName_noNum;
    utag_data.form_type = pageJson.pageType;
    utag_data.page_category = 'form_view';
}

//ecard view & non-donation submit
if (
    pageJson.pageType == 'e-card' && 
    !pageName_Num.toLowerCase().includes('donation') &&
    !donationData
) {
    utag_data.ecard_name = pageName_noNum;
    if ((pageJson.pageNumber == pageJson.pageCount) && (!donationData) && !pageJson.amount) {
        utag_data.email_signup_location = 'ecard';
        utag_data.page_category = 'ecrd_emt_submit';
        utag_data.page_name = pageName_Num + '-complete';
    }
}

//events & generic forms
//Do not fire form submit event on data capture forms
if (pageJson.pageType == 'otherdatacapture' || pageJson.pageType == 'event') {
    utag_data.form_name = pageName_noNum;
    utag_data.form_type = pageJson.pageType;
    if (pageJson.pageNumber == '1') {
        utag_data.page_category = 'form_view';
    }
    if (pageJson.pageNumber == pageJson.pageCount && pageJson.pageType == 'event') {
        // Enhanced data layer attributes for events
        if (eventData && typeof eventData === 'object') {
            utag_data.const_address = eventData.address1 || '';
            utag_data.const_city = eventData.city || '';
            utag_data.const_first = eventData.firstName || '';
            utag_data.const_last = eventData.lastName || '';
            utag_data.const_phone = eventData.phoneNumber || '';
            utag_data.customer_country = eventData.country || '';
            utag_data.customer_postal_code = eventData.zipCode || '';
            utag_data.customer_state = eventData.state || '';
        }
        utag_data.email_signup_location = 'event';
        utag_data.page_category = 'frm_evt_emt_submit';
        utag_data.page_name = pageName_Num + '-complete';
    }
}

// Remove session storage last to consolidate removal until after functional code
if (
    is_engrid_ecard_final_page || // Delete on ENGrid Donation e-card sequence
    is_non_ecard_donation_final_page || // Delete on Donation sequence that doesn't have an ecard
    is_old_ecard_flow_final_page // Delete on Old Donation e-card sequence
) {
    sessionStorage.removeItem('donationData');
    sessionStorage.removeItem('mobilePhoneData');
}
if (eventData) {
    sessionStorage.removeItem('eventData');
    sessionStorage.removeItem('mobilePhoneData');
}

(function(a, b, c, d) {
    a = '//tags.tiqcdn.com/utag/tnc/global/prod/utag.js';
    b = document;
    c = 'script';
    d = b.createElement(c);
    d.src = a;
    d.type = 'text/java' + c;
    d.async = true;
    a = b.getElementsByTagName(c)[0];
    a.parentNode.insertBefore(d, a);
})();
