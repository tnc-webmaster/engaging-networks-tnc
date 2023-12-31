var pageName_noNum = pageJson.pageType + ':' + pageJson.campaignPageId + '-' + pageJson.campaignId + ':' + pageJson.pageName.replace(/;|,|(|)/g, '');
var pageName_Num = pageName_noNum + '/' + pageJson.pageNumber;
var donationData = sessionStorage.getItem('donationData');
var mobilePhoneData = sessionStorage.getItem('mobilePhoneData');

var utag_data = {
  'channel': 'preserve.nature.org',
  'locale': pageJson.locale,
  'page_id': pageJson.campaignPageId,
  'page_name': pageName_Num,
  'en_campaignId': pageJson.campaignId,
  'en_txn6': pageJson.externalReference6,
  'en_page_count': pageJson.pageCount,
  'en_page_number': pageJson.pageNumber,
  'site_group': 'engaging networks:' + pageJson.pageType,
  'site_section': 'engaging networks',
  'site_section_2': 'engaging networks|' + pageJson.pageType,
  'site_section_3': 'engaging networks|' + pageJson.pageType,
  'site_section_4': 'engaging networks|' + pageJson.pageType,
  'hier1': 'preserve.nature.org|' + pageJson.pageType,
  'constituent_id': pageJson.supporterId ? pageJson.supporterId : '',
  'page_category': 'none',
  'en_code': '2022-12-01'
};

// Add on to data layer for specific page types

//donation
if (pageJson.pageType == 'donation') {
  utag_data.form_name = pageName_noNum;
  utag_data.donation_form_id = pageJson.campaignPageId;
  utag_data.product_id = [pageName_noNum];
  if (pageJson.pageNumber == '1') {
    utag_data.page_category = 'donation';
    utag_data.form_type = 'donation';
  }

  // donation confirmation
  if (donationData) {
    // donation confirmation with no ecard
    if (pageJson.pageNumber == pageJson.pageCount && sessionStorage.getItem('donationData').indexOf('ecardSelected') === -1) {
      donationData = JSON.parse(donationData);
	  mobilePhoneData = JSON.parse(mobilePhoneData);
	  sessionStorage.removeItem('donationData');
	  utag_data.page_category = 'don_emt_submit';
	  if (mobilePhoneData && mobilePhoneData.phoneNumber !== '') {
		  utag_data.page_category = 'don_emt_txt_submit';
		  utag_data.text_signup_location = 'donation';
	  }
      utag_data.form_type = 'donation';
      utag_data.customer_state = donationData ? donationData.state : '';
      utag_data.customer_postal_code = donationData ? donationData.zipCode : '';
      utag_data.customer_country = pageJson.country;
      utag_data.en_donation_type = pageJson.recurring;
      utag_data.payment_method_dl = pageJson.paymentType;
      utag_data.order_currency_code = 'USD';
      utag_data.order_id = pageJson.donationLogId.toString();
      utag_data.order_total = pageJson.amount.toString();
      utag_data.product_quantity = ['1'];
      utag_data.product_unit_price = [utag_data.order_total];
      utag_data.tip_jar = donationData ? donationData.extraAmount : '';
      utag_data.email = donationData ? donationData.emailAddress : '';
      utag_data.page_name = pageName_Num + '-complete';
      utag_data.campaign_tag = donationData ? donationData.en_txn1 : '';
      utag_data.pixel_id = donationData ? donationData.vid : '';
      utag_data.pixel_id2 = donationData ? donationData.vid2 : '';
	  utag_data.email_signup_location = 'donation';
    }
  }
}


//donation confirmation with ecard
if ((pageJson.pageType == 'e-card') && (pageJson.pageNumber == pageJson.pageCount) && (donationData)) {
	  donationData = JSON.parse(donationData);
	  sessionStorage.removeItem('donationData');
	  utag_data.form_name = donationData.productId;
	  utag_data.product_id = [donationData.productId];
	  utag_data.donation_form_id = donationData.campaignPageId;
	  utag_data.page_category = 'donation_ecard';
	  utag_data.form_type = 'donation';
	  utag_data.customer_state = donationData ? donationData.state : '';
	  utag_data.customer_postal_code = donationData ? donationData.zipCode : '';
	  utag_data.customer_country = pageJson.country;
	  utag_data.en_donation_type = pageJson.recurring;
	  utag_data.payment_method_dl = pageJson.paymentType;
	  utag_data.order_currency_code = 'USD';
	  utag_data.order_id = pageJson.donationLogId.toString();
	  utag_data.order_total = pageJson.amount.toString();
	  utag_data.product_quantity = ['1'];
	  utag_data.product_unit_price = [utag_data.order_total];
	  utag_data.tip_jar = donationData ? donationData.extraAmount : '';
	  utag_data.email = donationData ? donationData.emailAddress : '';
	  utag_data.page_name = pageName_Num + '-complete';
	  utag_data.campaign_tag = donationData ? donationData.en_txn1 : '';
	  utag_data.pixel_id = donationData ? donationData.vid : '';
	  utag_data.pixel_id2 = donationData ? donationData.vid2 : '';
	  utag_data.email_signup_location = 'donation';
}

//quiz or survey
if (pageJson.pageType == 'survey') {
  utag_data.form_type = 'survey';
  utag_data.form_name = pageName_noNum;
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
  utag_data.page_category = 'form_view';
  utag_data.form_type = pageJson.pageType;
  utag_data.form_name = pageName_noNum;
  utag_data.action_id = pageName_noNum;
  utag_data.action_type = pageJson.pageType;
}

//ecard view & non-donation submit
if (pageJson.pageType == 'e-card') {
  utag_data.ecard_name = pageName_noNum;
  if ((pageJson.pageNumber == pageJson.pageCount) && (!donationData)) {
    utag_data.page_category = 'ecrd_emt_submit';
    utag_data.page_name = pageName_Num + '-complete';
	utag_data.email_signup_location = 'ecard';
  }
}

//events & generic forms
//Do not fire form submit event on data capture forms
if (pageJson.pageType == 'otherdatacapture' || pageJson.pageType == 'event') {
  utag_data.form_type = pageJson.pageType;
  utag_data.form_name = pageName_noNum;
  if (pageJson.pageNumber == '1') {
    utag_data.page_category = 'form_view';
  }
  if (pageJson.pageNumber == pageJson.pageCount && pageJson.pageType == 'event') {
	utag_data.page_category = 'frm_evt_emt_submit';
    utag_data.page_name = pageName_Num + '-complete';
	utag_data.email_signup_location = 'event';
  }
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
