import { HookApp, log } from './agent/Utils.js';

HookApp('AutoSwitchInput', (hook, getPointer, getClassMethod, appBaseAddr) => {
  hook(
    getClassMethod(
      'NSJSONSerialization',
      '+ dataWithJSONObject:options:error:'
    ),
    (ths, retv) => {
      // retv.replace(ptr(1));
      console.log('JSONObjectWithData:  out');
      let data = new ObjC.Object(retv);
      console.log(data.toString());
      if ('environment'.indexOf(data.toString()) != -1) {
        let key_receipt = ObjC.classes.NSString.stringWithString_('receipt');
        let receipt = data.objectForKeyedSubscript_(key_receipt);
        let key_in_app = ObjC.classes.NSString.stringWithString_('in_app');
        let key_expires_date_ms =
          ObjC.classes.NSString.stringWithString_('expires_date_ms');
        let key_product_id =
          ObjC.classes.NSString.stringWithString_('product_id');
        let data_product_id = ObjC.classes.NSString.stringWithString_(
          'AutoSwitchInputLifetime2021013101'
        );
        let key_purchase_date_ms =
          ObjC.classes.NSString.stringWithString_('purchase_date_ms');
        let dict = ObjC.classes.NSMutableDictionary.alloc().init();
        dict.setObject_forKey_(3982000000000, key_expires_date_ms);
        dict.setObject_forKey_(1672000000000, key_purchase_date_ms);
        dict.setObject_forKey_(data_product_id, key_product_id);
        let info_array = ObjC.classes.NSMutableArray.alloc().init();
        info_array.addObject_(dict);
        let receipt1 = receipt.mutableCopy();
        receipt1.setObject_forKey_(info_array, key_in_app);
        let replace_data = data.mutableCopy();
        replace_data.setObject_forKey_(receipt1, key_receipt);
        retv.replace(replace_data);
        console.log('[+] Crack Success!');
      }else{
        console.log("数据不对，跳过")
      }
    },
    (ths, args) => {
      console.log('JSONObjectWithDatay: in: ');
    }
  );
});
