function transform(data,node,headers){
  if(/\d+\s+days\s+from/.exec(data)) {
    var numOfDays = Number(/\d+\s+days\s+from/.exec(data)[0].replace(/[^0-9]/g, ""));
    var n = headers.get("Date");
    var n1 = new Date(n * 1000);
    var day1 = n1.getDate() + numOfDays;
    var mon1 = n1.getMonth();
    var vt = new Date("1970", mon1, day1);
    return vt;
  }
  return "";
}


var str = "Get $10 Off When You Spend $85+ Now (Redeem 4/14-4/20)~~~ *Buy any full-priced bra at soma.com or at 866.768.7662 and receive free Parcel Post shipping with your order. May be upgraded to express shipping for $9.95 (estimated 2-5 business days) within the continental U.S. No adjustments on prior shipments. Two day and next day deliveries are not available for P.O. Boxes, AP/FPO, military addresses, and other certain areas UPS cannot reach. Free returns only valid on full-priced bras purchased at soma.com or at 866.768.7662. Offer not valid on purchases made in stores (including Soma Outlets). No cash value; Non-transferable; No adjustments on prior purchases or shipments. If qualified, free shipping will be reflected at checkout. Free return shipping is only available for items shipped from a U.S. address and must be made within 60 days of purchase in accordance with our Return Policy. See soma.com or call 1.866.768.7662 for Soma’s complete Return Policy. Excludes sale and clearance styles. Offer not valid on the purchase of gift cards, previously purchased merchandise or taxes. If you return a portion of your purchase, an applicable portion of your original discount will be forfeited. Valid through 04/02/19. **One time use only. Present coupon in Soma® boutiques (including outlets) or enter offer code when ordering online at Soma.com or by phone at 866.768.7662 to receive discount off your qualifying merchandise purchase (excluding taxes and shipping). Offer may not be combined with other coupons or offers, except LOVE SOMA REWARDS® certificates. Not valid on items being sold to benefit charity, purchase of gift cards, prior purchases, Anita, Barefoot Dreams, Chantelle, Le Mystère, SomaInnofit™, Wacoal, sale or clearance items, taxes or shipping. One coupon per transaction. If you return a portion of your purchase, refunded amount will reflect prorated discount from original purchase. Coupon may not be sold, auctioned, transferred or reproduced. No cash value. VALID FEBRUARY 27, 2019. ***Buy 3, get 2 free panties valid in stores, at soma.com or at 866.768.7662 on select full-priced styles only, while supplies last. Discounted item(s) will be reflected at checkout. Not valid if reproduced; No cash value; Non-transferable; No adjustments on prior purchases. Offer not valid on purchase of gift cards, previously purchased merchandise, taxes or shipping. If you return a portion of your purchase, an applicable portion of your original discount will be forfeited. Limited time only ****Free Vanishing Edge® panty ($16-27 value), while supplies last,with purchase of any full-price bra. Present coupon in Soma® boutiques and outlets. When ordering online at Soma.com or by phone at 866.768.7662, free item will be added automatically after purchase of full-price bra. One per customer. Offer may not be combined with other coupons or offers, except LOVE SOMA REWARDS® certificates. Not valid on items being sold to benefit charity, purchase of gift cards, prior purchases, sale or clearance items, taxes or shipping. One coupon per transaction. No substitution, exchange, return or credit given for free gift. Coupon may not be sold, auctioned, transferred or reproduced. No cash value. VALID FEBRUARY 27 THROUGH MARCH 9, 2019. From 2/28/19 - 4/9/19, with your $85 purchase, receive $10 off for use on your merchandise purchase (some exclusions apply). Coupon will be delivered via email within 7 days of purchase and is valid 4/14/19 -4/20/19 in Soma boutiques (including outlets), at soma.com, or by phone at 866.768.7662. No cash value. One time use only. Card must be presented and surrendered at time of purchase. Offer not valid on purchase of gift cards, previously purchased merchandise, taxes or shipping. May not be combined with other coupons, offers or event, except Love Soma Rewards certificates. Coupon will be sent via email if ordering online. For customer service, click here. To unsubscribe or update preferences, click here. To forward this email to your friends, click here. To view our privacy policy, click here. Soma Intimates Toll Free 866.768.766211215 Metro Parkway, Fort Myers, FL 33966 Soma and Soma Intimates are registered trademark’s of Chico’s Brands Investments, Inc. © 2019 Chico’s Distribution Services, LLC. All Rights Reserved.",



str2 = "New Enbliss Panties Get 2 Free When You Buy 3** Shop Now~~~ *Buy any full-priced bra at soma.com or at 866.768.7662 and receive free Parcel Post shipping with your order. May be upgraded to express shipping for $9.95 (estimated 2-5 business days) within the continental U.S. No adjustments on prior shipments. Two day and next day deliveries are not available for P.O. Boxes, AP/FPO, military addresses, and other certain areas UPS cannot reach. Free returns only valid on full-priced bras purchased at soma.com or at 866.768.7662. Offer not valid on purchases made in stores (including Soma Outlets). No cash value; Non-transferable; No adjustments on prior purchases or shipments. If qualified, free shipping will be reflected at checkout. Free return shipping is only available for items shipped from a U.S. address and must be made within 60 days of purchase in accordance with our Return Policy. See soma.com or call 1.866.768.7662 for Soma’s complete Return Policy. Excludes sale and clearance styles. Offer not valid on the purchase of gift cards, previously purchased merchandise or taxes. If you return a portion of your purchase, an applicable portion of your original discount will be forfeited. Valid through 04/02/19. **One time use only. Present coupon in Soma® boutiques (including outlets) or enter offer code when ordering online at Soma.com or by phone at 866.768.7662 to receive discount off your qualifying merchandise purchase (excluding taxes and shipping). Offer may not be combined with other coupons or offers, except LOVE SOMA REWARDS® certificates. Not valid on items being sold to benefit charity, purchase of gift cards, prior purchases, Anita, Barefoot Dreams, Chantelle, Le Mystère, SomaInnofit™, Wacoal, sale or clearance items, taxes or shipping. One coupon per transaction. If you return a portion of your purchase, refunded amount will reflect prorated discount from original purchase. Coupon may not be sold, auctioned, transferred or reproduced. No cash value. VALID FEBRUARY 27, 2019. ***Buy 3, get 2 free panties valid in stores, at soma.com or at 866.768.7662 on select full-priced styles only, while supplies last. Discounted item(s) will be reflected at checkout. Not valid if reproduced; No cash value; Non-transferable; No adjustments on prior purchases. Offer not valid on purchase of gift cards, previously purchased merchandise, taxes or shipping. If you return a portion of your purchase, an applicable portion of your original discount will be forfeited. Limited time only ****Free Vanishing Edge® panty ($16-27 value), while supplies last,with purchase of any full-price bra. Present coupon in Soma® boutiques and outlets. When ordering online at Soma.com or by phone at 866.768.7662, free item will be added automatically after purchase of full-price bra. One per customer. Offer may not be combined with other coupons or offers, except LOVE SOMA REWARDS® certificates. Not valid on items being sold to benefit charity, purchase of gift cards, prior purchases, sale or clearance items, taxes or shipping. One coupon per transaction. No substitution, exchange, return or credit given for free gift. Coupon may not be sold, auctioned, transferred or reproduced. No cash value. VALID FEBRUARY 27 THROUGH MARCH 9, 2019. From 2/28/19 - 4/9/19, with your $85 purchase, receive $10 off for use on your merchandise purchase (some exclusions apply). Coupon will be delivered via email within 7 days of purchase and is valid 4/14/19 -4/20/19 in Soma boutiques (including outlets), at soma.com, or by phone at 866.768.7662. No cash value. One time use only. Card must be presented and surrendered at time of purchase. Offer not valid on purchase of gift cards, previously purchased merchandise, taxes or shipping. May not be combined with other coupons, offers or event, except Love Soma Rewards certificates. Coupon will be sent via email if ordering online. For customer service, click here. To unsubscribe or update preferences, click here. To forward this email to your friends, click here. To view our privacy policy, click here. Soma Intimates Toll Free 866.768.766211215 Metro Parkway, Fort Myers, FL 33966 Soma and Soma Intimates are registered trademark’s of Chico’s Brands Investments, Inc. © 2019 Chico’s Distribution Services, LLC. All Rights Reserved.",



str3 = "Free Shipping + Free Returns On Full Price Bras* Limited Time VIP Exclusive 1-Day Preview 15% Off** Entire Purchase Use Code: 58848 Shop New~~~ *Buy any full-priced bra at soma.com or at 866.768.7662 and receive free Parcel Post shipping with your order. May be upgraded to express shipping for $9.95 (estimated 2-5 business days) within the continental U.S. No adjustments on prior shipments. Two day and next day deliveries are not available for P.O. Boxes, AP/FPO, military addresses, and other certain areas UPS cannot reach. Free returns only valid on full-priced bras purchased at soma.com or at 866.768.7662. Offer not valid on purchases made in stores (including Soma Outlets). No cash value; Non-transferable; No adjustments on prior purchases or shipments. If qualified, free shipping will be reflected at checkout. Free return shipping is only available for items shipped from a U.S. address and must be made within 60 days of purchase in accordance with our Return Policy. See soma.com or call 1.866.768.7662 for Soma’s complete Return Policy. Excludes sale and clearance styles. Offer not valid on the purchase of gift cards, previously purchased merchandise or taxes. If you return a portion of your purchase, an applicable portion of your original discount will be forfeited. Valid through 04/02/19. **One time use only. Present coupon in Soma® boutiques (including outlets) or enter offer code when ordering online at Soma.com or by phone at 866.768.7662 to receive discount off your qualifying merchandise purchase (excluding taxes and shipping). Offer may not be combined with other coupons or offers, except LOVE SOMA REWARDS® certificates. Not valid on items being sold to benefit charity, purchase of gift cards, prior purchases, Anita, Barefoot Dreams, Chantelle, Le Mystère, SomaInnofit™, Wacoal, sale or clearance items, taxes or shipping. One coupon per transaction. If you return a portion of your purchase, refunded amount will reflect prorated discount from original purchase. Coupon may not be sold, auctioned, transferred or reproduced. No cash value. VALID FEBRUARY 27, 2019. ***Buy 3, get 2 free panties valid in stores, at soma.com or at 866.768.7662 on select full-priced styles only, while supplies last. Discounted item(s) will be reflected at checkout. Not valid if reproduced; No cash value; Non-transferable; No adjustments on prior purchases. Offer not valid on purchase of gift cards, previously purchased merchandise, taxes or shipping. If you return a portion of your purchase, an applicable portion of your original discount will be forfeited. Limited time only ****Free Vanishing Edge® panty ($16-27 value), while supplies last,with purchase of any full-price bra. Present coupon in Soma® boutiques and outlets. When ordering online at Soma.com or by phone at 866.768.7662, free item will be added automatically after purchase of full-price bra. One per customer. Offer may not be combined with other coupons or offers, except LOVE SOMA REWARDS® certificates. Not valid on items being sold to benefit charity, purchase of gift cards, prior purchases, sale or clearance items, taxes or shipping. One coupon per transaction. No substitution, exchange, return or credit given for free gift. Coupon may not be sold, auctioned, transferred or reproduced. No cash value. VALID FEBRUARY 27 THROUGH MARCH 9, 2019. From 2/28/19 - 4/9/19, with your $85 purchase, receive $10 off for use on your merchandise purchase (some exclusions apply). Coupon will be delivered via email within 7 days of purchase and is valid 4/14/19 -4/20/19 in Soma boutiques (including outlets), at soma.com, or by phone at 866.768.7662. No cash value. One time use only. Card must be presented and surrendered at time of purchase. Offer not valid on purchase of gift cards, previously purchased merchandise, taxes or shipping. May not be combined with other coupons, offers or event, except Love Soma Rewards certificates. Coupon will be sent via email if ordering online. For customer service, click here. To unsubscribe or update preferences, click here. To forward this email to your friends, click here. To view our privacy policy, click here. Soma Intimates Toll Free 866.768.766211215 Metro Parkway, Fort Myers, FL 33966 Soma and Soma Intimates are registered trademark’s of Chico’s Brands Investments, Inc. © 2019 Chico’s Distribution Services, LLC. All Rights Reserved.",



str4 = "New Full Coverage Enbliss Shop 50% Off~~~ *Buy any full-priced bra at soma.com or at 866.768.7662 and receive free Parcel Post shipping with your order. May be upgraded to express shipping for $9.95 (estimated 2-5 business days) within the continental U.S. No adjustments on prior shipments. Two day and next day deliveries are not available for P.O. Boxes, AP/FPO, military addresses, and other certain areas UPS cannot reach. Free returns only valid on full-priced bras purchased at soma.com or at 866.768.7662. Offer not valid on purchases made in stores (including Soma Outlets). No cash value; Non-transferable; No adjustments on prior purchases or shipments. If qualified, free shipping will be reflected at checkout. Free return shipping is only available for items shipped from a U.S. address and must be made within 60 days of purchase in accordance with our Return Policy. See soma.com or call 1.866.768.7662 for Soma’s complete Return Policy. Excludes sale and clearance styles. Offer not valid on the purchase of gift cards, previously purchased merchandise or taxes. If you return a portion of your purchase, an applicable portion of your original discount will be forfeited. Valid through 04/02/19. **50% off your highest priced item when you purchase 2 or more items (excluding clearance). Enter code when ordering at soma.com or at 866.768.7662. Offer not valid in stores. Qualifying purchase and offer excludes purchase of gift cards and charitable items (including donations), prior purchases, soma.com clearance items, Anita, Barefoot Dreams, Chantelle, Elomi, Freya, Le Mystère, and Wacoal, taxes or shipping. One time use only. Offer may not be combined with other offers except LOVE SOMA REWARDS® certificates, has no cash value, is not transferable, and may not be reproduced. Discount applied after all other promotions, before taxes and shipping, if any.​ Exclusions apply. Discount will be applied pro-rata to qualifying purchase items; refunds or credits for returns or exchanges on such items will reflect discount. Valid through 03/11/19. From 2/28/19 - 4/9/19, with your $85 purchase, receive $10 off for use on your merchandise purchase (some exclusions apply). Coupon will be delivered via email within 7 days of purchase and is valid 4/14/19 -4/20/19 in Soma boutiques (including outlets), at soma.com, or by phone at 866.768.7662. No cash value. One time use only. Card must be presented and surrendered at time of purchase. Offer not valid on purchase of gift cards, previously purchased merchandise, taxes or shipping. May not be combined with other coupons, offers or event, except Love Soma Rewards certificates. Coupon will be sent via email if ordering online. For customer service, click here. To unsubscribe or update preferences, click here. To forward this email to your friends, click here. To view our privacy policy, click here. Soma Intimates Toll Free 866.768.766211215 Metro Parkway, Fort Myers, FL 33966 Soma and Soma Intimates are registered trademark’s of Chico’s Brands Investments, Inc. © 2019 Chico’s Distribution Services, LLC. All Rights Reserved.",




str5 = "Flash Sale 25% Off* Select Swim And Apparel Shop Swim~~~ * Valid in stores, at soma.com or at 866.768.7662 on select full-priced styles only, while supplies last.Marked price reflects savings off original ticketed price. Not valid if reproduced; No cash value; Non–transferable; No adjustments on prior purchases. Offer not valid on purchase of gift cards, previously purchased merchandise, taxes, or shipping. If you return a portion of your purchase, an applicable portion of your original discount will be forfeited. Offer valid through 3/21/19 From 2/28/19 - 4/9/19, with your $85 purchase, receive $10 off for use on your merchandise purchase (some exclusions apply). Coupon will be delivered via email within 7 days of purchase and is valid 4/14/19 -4/20/19 in Soma boutiques (including outlets), at soma.com, or by phone at 866.768.7662. No cash value. One time use only. Card must be presented and surrendered at time of purchase. Offer not valid on purchase of gift cards, previously purchased merchandise, taxes or shipping. May not be combined with other coupons, offers or event, except Love Soma Rewards certificates. Coupon will be sent via email if ordering online. For customer service, click here. To unsubscribe or update preferences, click here. To forward this email to your friends, click here. To view our privacy policy, click here. Soma Intimates Toll Free 866.768.766211215 Metro Parkway, Fort Myers, FL 33966 Soma and Soma Intimates are registered trademark’s of Chico’s Brands Investments, Inc. © 2019 Chico’s Distribution Services, LLC. All Rights Reserved.",


str6 = "Get $10 Off When You Spend $85+ Now (Redeem 4/14-4/20)~~~ From 2/28/19 - 4/9/19, with your $85 purchase, receive $10 off for use on your merchandise purchase (some exclusions apply). Coupon will be delivered via email within 7 days of purchase and is valid 4/14/19 -4/20/19 in Soma boutiques (including outlets), at soma.com, or by phone at 866.768.7662. No cash value. One time use only. Card must be presented and surrendered at time of purchase. Offer not valid on purchase of gift cards, previously purchased merchandise, taxes or shipping. May not be combined with other coupons, offers or event, except Love Soma Rewards certificates. Coupon will be sent via email if ordering online. For customer service, click here. To unsubscribe or update preferences, click here. To forward this email to your friends, click here. To view our privacy policy, click here. Soma Intimates Toll Free 866.768.766211215 Metro Parkway, Fort Myers, FL 33966 Soma and Soma Intimates are registered trademark’s of Chico’s Brands Investments, Inc. © 2019 Chico’s Distribution Services, LLC. All Rights Reserved.",


str7 = "Feel the love by joining Love Soma Rewards $1=1 point. $5 reward for every $125 points, Birthday gifts, free shipping*, and so much more! See Your Status (gold and platinum members)~~~ From 2/28/19 - 4/9/19, with your $85 purchase, receive $10 off for use on your merchandise purchase (some exclusions apply). Coupon will be delivered via email within 7 days of purchase and is valid 4/14/19 -4/20/19 in Soma boutiques (including outlets), at soma.com, or by phone at 866.768.7662. No cash value. One time use only. Card must be presented and surrendered at time of purchase. Offer not valid on purchase of gift cards, previously purchased merchandise, taxes or shipping. May not be combined with other coupons, offers or event, except Love Soma Rewards certificates. Coupon will be sent via email if ordering online. For customer service, click here. To unsubscribe or update preferences, click here. To forward this email to your friends, click here. To view our privacy policy, click here. Soma Intimates Toll Free 866.768.766211215 Metro Parkway, Fort Myers, FL 33966 Soma and Soma Intimates are registered trademark’s of Chico’s Brands Investments, Inc. © 2019 Chico’s Distribution Services, LLC. All Rights Reserved.",


str8 = "Get what you want 20% Off* Entire Purchase Shop Now~~~ From 2/28/19 - 4/9/19, with your $85 purchase, receive $10 off for use on your merchandise purchase (some exclusions apply). Coupon will be delivered via email within 7 days of purchase and is valid 4/14/19 -4/20/19 in Soma boutiques (including outlets), at soma.com, or by phone at 866.768.7662. No cash value. One time use only. Card must be presented and surrendered at time of purchase. Offer not valid on purchase of gift cards, previously purchased merchandise, taxes or shipping. May not be combined with other coupons, offers or event, except Love Soma Rewards certificates. Coupon will be sent via email if ordering online. For customer service, click here. To unsubscribe or update preferences, click here. To forward this email to your friends, click here. To view our privacy policy, click here. Soma Intimates Toll Free 866.768.766211215 Metro Parkway, Fort Myers, FL 33966 Soma and Soma Intimates are registered trademark’s of Chico’s Brands Investments, Inc. © 2019 Chico’s Distribution Services, LLC. All Rights Reserved.";

function transform(data, node, headers){
  var dataSpl = data.split("~~~");
  var coupon = dataSpl[0].toLowerCase();
  var vtDates = dataSpl[1].toLowerCase();
  var slicer;

  //When the offer "Ends today"
  if (coupon.indexOf("ends today") !== -1) {
    var n = headers.get("Date");
    var n1 = new Date(n * 1000);
    var day1 = n1.getDate();
    var mon1 = n1.getMonth();
    var vt = new Date("1970", mon1, day1);
    return vt;
  }

  //When coupon reads "get $10 off"
  if(coupon.indexOf("get $10 off") !== -1) return vtDates.replace(/.*From\s*(?:\d{1,2}\/){2}\d{2,4}\s*-\s*((?:\d{1,2}\/){2}\d{2,4}).*/i,"$1");



  if (/free\s*shipping.*/i.test(coupon)) {
    slicer = "free shipping";
    vtDates = vtDates.slice(vtDates.indexOf(slicer))
    vtDates = vtDates.slice(0, vtDates.indexOf("*"))

    return vtDates.replace(/.*Valid\s*through\s*((?:\d{1,2}\/){2}\d{2,4}).*/i, "$1") || "";
  }



  //When coupon reads "NN% off"
  if (/\d{1,2}%\s*off/i.test(coupon)) {
    slicer = coupon.replace(/.*(\d{2}%\s*off).*/i, "$1"); //String

    if (vtDates.indexOf(slicer) !== -1) vtDates = vtDates.slice(vtDates.indexOf(slicer));

    return vtDates.replace(/.*Valid\s*through\s*((?:\d{1,2}\/){2}\d{2,4}).*/i, "$1") || "percent";
  }

  return data;

}
