import { HookApp, log } from './agent/Utils.js';

HookApp('iShot', (hook, getPointer, getClassMethod, appBaseAddr) => {
  hook(
    getClassMethod(
      'NSJSONSerialization',
      '+ JSONObjectWithData:options:error:'
    ),
    (ths, retv) => {
      // retv.replace(ptr(1));
      console.log('JSONObjectWithData:  out');
      let data = new ObjC.Object(retv);
      console.log('原数据: ');
      console.log(data.toString());

      if (data.toString().includes('receipt =')) {
        let key_receipt = ObjC.classes.NSString.stringWithString_('receipt');
        let receipt = data.objectForKeyedSubscript_(key_receipt);
        let key_in_app = ObjC.classes.NSString.stringWithString_('in_app');
        let key_expires_date_ms =
          ObjC.classes.NSString.stringWithString_('expires_date_ms');
        // let key_product_id =
        //   ObjC.classes.NSString.stringWithString_('product_id');
        // let data_product_id = ObjC.classes.NSString.stringWithString_(
        //   'ishotfeixuqidingyue20220212'
        // );
        let key_purchase_date_ms =
          ObjC.classes.NSString.stringWithString_('purchase_date_ms');
        let dict = ObjC.classes.NSMutableDictionary.alloc().init();
        dict.setObject_forKey_(1825020109000, key_expires_date_ms);
        dict.setObject_forKey_(1625020109000, key_purchase_date_ms);
        // dict.setObject_forKey_(data_product_id, key_product_id);
        let info_array = ObjC.classes.NSMutableArray.alloc().init();
        info_array.addObject_(dict);
        let receipt1 = receipt.mutableCopy();
        receipt1.setObject_forKey_(info_array, key_in_app);
        let replace_data = data.mutableCopy();
        replace_data.setObject_forKey_(receipt1, key_receipt);
        console.log('替换后...');
        console.log(replace_data.toString());

        retv.replace(replace_data);
        console.log('[+] Crack Success!');
      } else {
        console.log('数据有问题，不改');
      }
    },
    (ths, args) => {
      console.log('JSONObjectWithDatay: in: ');
    }
  );
});

// // 修改地址的值
// function hookStart(hook: any, getPointer: any) {
//   /*
//     if ( byte_1001F1E48 )
//   {
//     byte_1001F1159 = 0;
//     v50 = v68;
//     objc_msgSend(v68, "removeObjectForKey:", CFSTR("InstallTimeInfo"));
//   }
//   */

//   // 获取需要修改的地址
//   const target = getPointer(0x1f1e48);

//   // 修改地址值
//   const pointer = new NativePointer(target.target);
//   pointer.writeUInt(1);

//   // 获取需要修改的地址
//   const target1 = getPointer(0x1f1159);

//   // 修改地址值
//   const pointer1 = new NativePointer(target1.target);
//   pointer1.writeUInt(0);

//   // 打印日志
//   log('Modified memory1 value at address:', target.target);
//   log('Modified memory2 value at address:', target1.target);
// }

// // 注入Hook
// HookApp('iShot', hookStart);
