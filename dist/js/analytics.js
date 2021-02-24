var enPageName_clear = pageJson.pageName.replace(/;|,|(|)/g, '');   //strip semicolons, commas, parentheses
var utag_data={
  'channel' : 'preserve.nature.org',
  'locale' : pageJson.locale,
  'page_id' : pageJson.campaignPageId,
  'page_name' : pageJson.pageType + ':' + pageJson.campaignPageId + ':' + enPageName_clear,
  'site_group' : 'engaging networks:' +  pageJson.pageType,
  'site_section' : 'engaging networks',
  'site_section_2' : 'engaging networks|' + pageJson.pageType,
  'site_section_3' : 'engaging networks|' + pageJson.pageType,
  'site_section_4' : 'engaging networks|' + pageJson.pageType,
  'hier1' : 'preserve.nature.org|' + pageJson.pageType,
  'constituent_id' : ''  //if available. otherwise blank.
};
// Add on to data layer for specific page types

//donation page
if (pageJson.pageType == 'donation' && pageJson.pageNumber == '1') {
  utag_data.page_category = 'donation';
  utag_data.form_type = 'donation';
  utag_data.form_name = utag_data.page_name;
  utag_data.donation_form_id = pageJson.campaignPageId;
  utag_data.product_id = [utag_data.page_name];
}

//figure out intermediate donation pages later, if applicable

//donation confirmation
if (pageJson.pageType == 'donation' && pageJson.pageNumber == pageJson.pageCount) {
  var donationData = sessionStorage.getItem('donationData');

  if (donationData) {
    donationData = JSON.parse(donationData);
    sessionStorage.removeItem(donationData);
  }

  utag_data.page_category = 'confirmation';
  utag_data.form_type = 'donation';
  utag_data.form_name = utag_data.page_name;
  utag_data.donation_form_id = pageJson.campaignPageId;
  utag_data.product_id = [utag_data.page_name];
  utag_data.customer_state = donationData ? donationData.state : '';
  utag_data.customer_postal_code = donationData ? donationData.zipCode : '';
  utag_data.customer_country = pageJson.country;
  utag_data.donation_type = pageJson.recurring;
  utag_data.payment_method_dl = pageJson.paymentType;  //what are the possible results for this?
  utag_data.order_currency_code = 'USD';  //always USD, even on international forms
  utag_data.order_id = pageJson.donationLogId;
  utag_data.order_total = pageJson.amount;  // stripped of currency symbol and commas. includes tipjar amount in total.
  utag_data.product_quantity = ['1'];
  utag_data.product_unit_price = [utag_data.order_total];
  utag_data.tip_jar = donationData ? donationData.extraAmount : '';  // this can be set mathematically. no currency symbol.
  utag_data.email = donationData ? donationData.emailAddress : '';
  utag_data.page_name = utag_data.page_name + '-complete';  //update page_name, must come after form_name & product_id
}

(function(a,b,c,d){
  a='//tags.tiqcdn.com/utag/tnc/global/qa/utag.js';
  b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;
  a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
})();