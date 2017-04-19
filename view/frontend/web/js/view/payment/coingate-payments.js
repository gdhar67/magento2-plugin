/**
 * CoinGate payment method model
 *
 * @category    CoinGate
 * @package     CoinGate_Merchant
 * @author      CoinGate
 * @copyright   CoinGate (https://coingate.com)
 * @license     https://github.com/coingate/magento2-plugin/blob/master/LICENSE The MIT License (MIT)
 */
/*browser:true*/
/*global define*/
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'coingate_merchant',
                component: 'CoinGate_Merchant/js/view/payment/method-renderer/coingate-method'
            }
        );
        /** Add view logic here if needed */
        return Component.extend({});
    }
);
