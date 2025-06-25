import { HookApp, log } from './agent/Utils.js';

HookApp('FastZip', (hook, getPointer, getClassMethod, appBaseAddr) => {
  hook(
    getClassMethod(
      'NSJSONSerialization',
      '+ JSONObjectWithData:options:error:'
    ),
    (ths, retv) => {
      // retv.replace(ptr(1));
      console.log('JSONObjectWithData:  out');
      let data = new ObjC.Object(retv);
      let key_receipt = ObjC.classes.NSString.stringWithString_('receipt');
      let receipt = data.objectForKeyedSubscript_(key_receipt);
      let key_in_app = ObjC.classes.NSString.stringWithString_('in_app');
      let key_expires_date_ms =
        ObjC.classes.NSString.stringWithString_('expires_date_ms');

      let dict = ObjC.classes.NSMutableDictionary.alloc().init();
      dict.setObject_forKey_(9999999999999, key_expires_date_ms);

      let info_array = ObjC.classes.NSMutableArray.alloc().init();
      info_array.addObject_(dict);
      let receipt1 = receipt.mutableCopy();
      receipt1.setObject_forKey_(info_array, key_in_app);
      let replace_data = data.mutableCopy();
      replace_data.setObject_forKey_(receipt1, key_receipt);
      retv.replace(replace_data);
      console.log('[+] Crack Success!');
    },
    (ths, args) => {
      console.log('JSONObjectWithDatay: in: ');
    }
  );
});
